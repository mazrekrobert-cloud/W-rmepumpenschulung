// Run: npm install --no-save jsdom && node tests/rechenschule.cjs
const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const {JSDOM,VirtualConsole}=require(process.env.ROBERT_JSDOM_PATH||'jsdom');
const html=fs.readFileSync(path.join(__dirname,'../index.html'),'utf8');
let errors=[];
function boot(saved={}){const vc=new VirtualConsole();vc.on('jsdomError',e=>errors.push(e.message));return new JSDOM(html,{url:'https://training.example/',runScripts:'dangerously',virtualConsole:vc,beforeParse(w){w.confirm=()=>true;w.HTMLElement.prototype.scrollIntoView=function(){};for(const [k,v] of Object.entries(saved))w.localStorage.setItem(k,v)}})}
let dom=boot();const w=dom.window,d=w.document,$=id=>d.getElementById(id),R=w.RobertMath;
const click=id=>$(id).click(),change=(id,value)=>{$(id).value=String(value);$(id).dispatchEvent(new w.Event('change',{bubbles:true}))},input=(id,value)=>{$(id).value=String(value);$(id).dispatchEvent(new w.Event('input',{bubbles:true}))};
assert.deepEqual(errors,[]);assert.ok(R);assert.equal(d.querySelectorAll('#calcTopic option').length,12);
function answer(task,prefix){input(prefix+'Formula',task.formulaIndex);task.parts.forEach((p,i)=>{input(prefix+'Value'+i,String(p.value).replace('.',','));input(prefix+'Unit'+i,p.unit)})}
let partCount=0;for(let t=0;t<12;t++)for(let v=0;v<3;v++){
 const task=R.makeTask(t,v);partCount+=task.parts.length;assert.ok(task.parts.every(p=>Number.isFinite(p.value)&&p.value>0));assert.equal(task.formula.filter(f=>f.correct).length,1);
 const a={formula:String(task.formulaIndex),parts:task.parts.map(p=>({raw:String(p.value),unit:p.unit}))};assert.equal(R.grade(task,a).score,task.max);
 change('calcTopic',t);change('calcVariant',v);answer(task,'practice');click('checkPractice');assert.match($('practiceFeedback').textContent,/Aufgabe gelöst/);assert.ok($('practiceSolution').hidden);assert.match($('practiceFormulaFeedback').textContent,/richtig/);
}
assert.equal(partCount,108);assert.match($('calcProgress').textContent,/36 \/ 36 selbstständig/);
// Independent reference calculations, not values copied back from the task engine.
assert.ok(Math.abs(R.makeTask(0,0).parts[2].value-15.0027)<1e-8);assert.ok(Math.abs(R.makeTask(3,0).parts[2].value-6.978)<1e-8);assert.ok(Math.abs(R.makeTask(4,0).parts[1].value-1375.7523645743766)<1e-7);
assert.ok(Math.abs(R.makeTask(7,0).parts[1].value-122.115)<1e-8);assert.ok(Math.abs(R.makeTask(10,0).parts[2].value-23.26)<1e-8);
assert.equal(R.parseNumber('1 376,25'),1376.25);assert.equal(R.parseNumber('0'),0);assert.ok(Number.isNaN(R.parseNumber('')));assert.ok(Number.isNaN(R.parseNumber('1,2,3')));assert.ok(Number.isNaN(R.parseNumber('Infinity')));
let task=R.makeTask(4,0);let bad={formula:'',parts:task.parts.map(p=>({raw:'',unit:''}))};assert.equal(R.grade(task,bad).score,0);bad={formula:String(task.formulaIndex),parts:task.parts.map(p=>({raw:String(p.value),unit:'€'}))};assert.equal(R.grade(task,bad).score,2+task.parts.length*2);
// Wrong answers do not leak final numbers; hints and solutions mark assisted progress.
click('resetCalc');change('calcTopic',4);change('calcVariant',0);input('practiceValue0','1376');click('checkPractice');assert.match($('practiceStatus0').textContent,/Faktor 1.000/);assert.ok($('practiceSolution').hidden);click('showHint');click('showHint');click('showHint');assert.equal($('showHint').disabled,true);answer(task,'practice');input('practiceNotes','<img src=x onerror=alert(1)>');click('showSolution');assert.equal($('practiceSolution').querySelector('img'),null);click('checkPractice');assert.match($('calcProgress').textContent,/0 \/ 36 selbstständig · 1 mit Hilfe/);
// All formula derivations run to completion and reset safely.
for(const value of ['mass','capacity','delta','flow','spread','time']){change('formulaTarget',value);let guard=10;while(!$('formulaNext').disabled&&guard--)click('formulaNext');assert.ok(guard>0);click('formulaRestart');assert.equal($('formulaSteps').children.length,1)}
// Exam navigation, deferred feedback, persisted drafts, full score, reset, blank submit.
click('startExam');assert.equal(d.querySelector('[data-tab="lab"]').disabled,true);let session=JSON.parse(w.localStorage.getItem('robert-calculation-school-v1')).exam;assert.equal(session.tasks.length,6);let maximum=0;
for(let i=0;i<6;i++){const spec=session.tasks[i],task=R.makeTask(spec.topic,spec.variant);maximum+=task.max;answer(task,'exam');input('examNotes','Mein dokumentierter Weg');if(i<5)click('examNext')}
assert.ok($('examResults').hidden);let saved=Object.fromEntries(Array.from({length:w.localStorage.length},(_,i)=>{const k=w.localStorage.key(i);return [k,w.localStorage.getItem(k)]}));const resumed=boot(saved);assert.equal(resumed.window.document.getElementById('examWorkspace').hidden,false);assert.equal(resumed.window.document.querySelector('[data-tab="lab"]').disabled,true);assert.equal(resumed.window.document.getElementById('examNotes').value,'Mein dokumentierter Weg');resumed.window.close();
click('submitExam');assert.equal($('examWorkspace').hidden,true);assert.equal($('examResults').hidden,false);assert.match($('examResults').textContent,new RegExp(maximum+' / '+maximum+' Punkte'));assert.equal(d.querySelector('[data-tab="lab"]').disabled,false);assert.equal(JSON.parse(w.localStorage.getItem('robert-calculation-school-v1')).exam,null);
click('startExam');click('submitExam');assert.match($('examResults').textContent,/0 \/ \d+ Punkte/);
click('startExam');click('discardExam');assert.equal($('examWorkspace').hidden,true);
assert.deepEqual(errors,[]);dom.window.close();console.log('PASS: 36 tasks / 108 numeric parts, 12 topics, reference results, parsing, units, no premature solution, hints, XSS escaping, assisted tracking, all derivations, six-task exam, resume, blank submission, discard and unlocked navigation. Real jsdom DOM, no visual rendering.');
