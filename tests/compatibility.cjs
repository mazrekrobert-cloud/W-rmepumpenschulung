// Run after installing jsdom: node tests/compatibility.cjs
const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const {JSDOM,VirtualConsole}=require(process.env.ROBERT_JSDOM_PATH||'jsdom');
const html=fs.readFileSync(path.join(__dirname,'../index.html'),'utf8');
const KEY='robert-calculation-school-v1';
function boot({blocked=false,reduced=false}={}){
 const errors=[],scrolls=[],control={blocked};const vc=new VirtualConsole();vc.on('jsdomError',e=>errors.push(e.message));
 const dom=new JSDOM(html,{url:'https://training.example/',runScripts:'dangerously',virtualConsole:vc,beforeParse(w){
  w.confirm=()=>true;w.matchMedia=()=>({matches:reduced});
  w.HTMLElement.prototype.scrollIntoView=function(options){scrolls.push(options.behavior)};
  const set=w.Storage.prototype.setItem;
  w.Storage.prototype.setItem=function(k,v){if(control.blocked)throw new w.DOMException('Storage blocked','QuotaExceededError');return set.call(this,k,v)};
 }});
 const w=dom.window,$=id=>w.document.getElementById(id);
 const edit=(id,value,event)=>{$(id).value=value;$(id).dispatchEvent(new w.Event(event,{bubbles:true}))};
 return {dom,w,$,edit,errors,scrolls,control};
}
// Storage unavailable at startup must not break learning or hide the warning.
let app=boot({blocked:true});
assert.deepEqual(app.errors,[]);assert.match(app.$('calcProgress').textContent,/Speicherung nicht verfügbar/);
assert.match(app.$('progressText').textContent,/Speicherung nicht verfügbar/);
app.$('startExam').click();assert.match(app.$('examDraftInfo').textContent,/nur in dieser geöffneten Sitzung/);
app.dom.window.close();
// Native select change events persist immediately, without navigation or grading.
app=boot();app.edit('practiceFormula','1','change');app.edit('practiceUnit0','kWh','change');
let saved=JSON.parse(app.w.localStorage.getItem(KEY));
assert.equal(saved.drafts['0-0'].answer.formula,'1');assert.equal(saved.drafts['0-0'].answer.parts[0].unit,'kWh');
app.w.document.querySelector('[data-scene="phase"]').click();
const before=app.$('scene').innerHTML;app.edit('phaseStep','2','change');assert.notEqual(app.$('scene').innerHTML,before);
app.$('startExam').click();app.edit('examFormula','1','change');
saved=JSON.parse(app.w.localStorage.getItem(KEY));const spec=saved.exam.tasks[0];
assert.equal(saved.exam.answers[spec.topic+'-'+spec.variant].formula,'1');
// Failure during an already open exam changes its visible status immediately.
app.control.blocked=true;app.edit('examNotes','Nicht verlieren','input');
assert.match(app.$('examDraftInfo').textContent,/nur in dieser geöffneten Sitzung/);
assert.match(app.$('calcProgress').textContent,/Speicherung nicht verfügbar/);
// A later successful save restores the status and includes the in-memory draft.
app.control.blocked=false;app.edit('examNotes','Wieder gespeichert','input');
assert.match(app.$('examDraftInfo').textContent,/Entwurf lokal gespeichert/);
saved=JSON.parse(app.w.localStorage.getItem(KEY));assert.equal(saved.exam.answers[spec.topic+'-'+spec.variant].notes,'Wieder gespeichert');
app.$('submitExam').click();assert.deepEqual(app.scrolls,['smooth']);assert.deepEqual(app.errors,[]);app.dom.window.close();
app=boot({reduced:true});app.$('startExam').click();app.$('submitExam').click();
assert.deepEqual(app.scrolls,['auto']);assert.deepEqual(app.errors,[]);app.dom.window.close();
console.log('PASS: blocked storage, live failure/recovery, theory warning, native select changes, persisted exam selections, reduced-motion scrolling. DOM only; no Safari rendering claim.');
