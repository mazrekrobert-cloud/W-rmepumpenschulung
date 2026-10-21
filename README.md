# SHK-Wissen mit Robert · Wärmepumpenschule

Deutschsprachiges interaktives Schulprogramm zu Luft-Wasser-Wärmepumpen und Kältekreisläufen. Herstellerunabhängige Lernwerkstatt, kein zertifizierter Ausbildungsgang.

## Starten

1. Bei GitHub mit dem Konto anmelden, das Zugriff auf dieses private Repository hat. Ohne Anmeldung kann eine 404-Seite erscheinen.
2. `index.html` öffnen und **Download raw file** wählen.
3. Als `index.html` speichern und mit Safari, Chrome, Firefox oder Edge öffnen. Eine gegebenenfalls angehängte `.txt`-Endung entfernen.

GitHub zeigt den Quelltext. Die heruntergeladene Datei läuft direkt im Browser ohne Installation, Cloud-Einstellung oder API-Schlüssel. Bereits heruntergeladene ältere Versionen erneut herunterladen. Die Anwendung wurde nicht als öffentliche Website veröffentlicht.

## Lernumfang

- 12 Module mit 36 Lerneinheiten: Lernstoff, Praxisbeispiele und Verständnisfragen mit Erklärungen.
- 5 Animationsansichten: Kreislauf mit Messpunkten, Phasenwechsel, Verdichtung, Heizwasser und Abtauen.
- Einstellbare Temperaturen, Überhitzung und Unterkühlung; R290-Sättigungsdruck in bar(a) oder bar(g), Druckverhältnis und Messwertprotokoll.
- Vier voreingestellte Lernsituationen und Druck-zu-Sättigungstemperatur-Rechner.
- Separates Wasserlabor mit veränderbarer Leistung und veränderbarem Durchfluss.
- 18 Rechenübungen, 8 Diagnosefälle, freie Modulwahl und gespeicherter Fortschritt.

## Neue Rechenschule

Unter **④ Rechenschule** stehen jetzt vier Bereiche bereit:

1. **Formeln verstehen:** Wärmemenge Q = m · c · Δϑ und Wärmeleistung Q̇ = ṁ · c · Δϑ unterscheiden; sechs schrittweise Herleitungen zum Umstellen; Einheitenübersicht und dokumentierter Rechenweg.
2. **Aufgabenwerkstatt:** 36 mehrteilige Praxisaufgaben in zwölf Themen mit insgesamt 108 numerischen Teilantworten. Drei Varianten je Thema; Hauptformel und geforderte Einheit werden selbst ausgewählt.
3. **Lernprüfung:** sechs gemischte mehrteilige Aufgaben, Auswertung erst nach Abgabe. Keine automatische Zeitbegrenzung (Richtwert 45 Minuten). Hilfebereiche sind während eines laufenden Durchgangs gesperrt. Entwürfe können im selben Browser fortgesetzt werden.
4. **Lernstand:** getrennte Anzeige für beim ersten Versuch selbstständig gelöste Aufgaben und Lösungen mit Hilfe/Wiederholung. Theoriefortschritt bleibt separat erhalten.

Die zwölf Rechenthemen: Speicher-Wärmemenge, unbekannte Masse, Temperaturänderung, Heizleistung, Volumenstrom, Spreizung/Rücklauf, Glykolgemisch mit vorgegebenen Stoffwerten, Speicherladezeit/Strombedarf, COP/Umweltwärme, Jahresbilanz/Kosten, ideale Puffer-Ladezeit und Beurteilung einer Wärmeübertragung als Kundenauftrag.

Jede Aufgabe enthält drei gestufte Tipps, eine ausführliche Musterlösung, eine Plausibilitätsbetrachtung und ein Notizfeld. Bewertet werden Hauptformel (2 Punkte), Zahlenwert (2 Punkte je Teilantwort) und geforderte Einheit (1 Punkt je Teilantwort). Freie Rechenwege werden gespeichert und zum Selbstvergleich angezeigt, **nicht automatisch bewertet**. Es werden keine offiziellen Prüfungsnoten vergeben.

Alle neuen Wasseraufgaben verwenden konsistent ρ ≈ 1 kg/l und c = 4,1868 kJ/(kg·K) = 1,163 Wh/(kg·K), entsprechend 0,001163 kWh/(kg·K). Temperaturabhängigkeit, Verluste und Schichtung werden nur berücksichtigt, wenn ausdrücklich vorgegeben. Glykolwerte und Strompreise sind jeweils Aufgabendaten. Antworten ohne Tausendertrennzeichen eingeben; Dezimalkomma und Dezimalpunkt werden unterstützt. Rundungstoleranz: ±0,2 % oder ±0,011, je nachdem, was größer ist.

Die Aufgaben sind selbst erstellt und orientieren sich am fallbezogenen Anwenden und Dokumentieren technischer Berechnungen gemäß [§ 6 Installateur- und Heizungsbauermeisterverordnung](https://www.gesetze-im-internet.de/installateurheizungsbauermstrv/__6.html). Sie sind keine Original-Prüfungsaufgaben und decken nicht die gesamte Meisterausbildung ab.

Die bisherigen 18 Schnellübungen bleiben aus der Aufgabenwerkstatt erreichbar.

## Module

1. Wärme und Energie
2. Luft-Wasser-System verstehen
3. Verdampfung intensiv
4. Verdichter und Temperaturhub
5. Verflüssigung und Heizwasser
6. Expansionsventil und Regelung
7. Druck richtig lesen
8. Messpraxis und Sensoren
9. Hydraulik und Rechnen
10. Effizienz und Anlagenbetrieb
11. Abtauen und Umkehrbetrieb
12. Diagnose und Transfer

Je Modul drei Einheiten. Empfohlener Ablauf: Lernstoff lesen, passende Animation erkunden, Verständnisfrage lösen, Rechen- oder Diagnoseübung bearbeiten.

## Stoffwerte und Grenzen

R290-Sättigungsdrücke basieren auf Antoine-Näherungen aus dem [NIST Chemistry WebBook](https://webbook.nist.gov/cgi/cbook.cgi?ID=C74986&Mask=4). Bis 10 °C wird Rips verwendet, ab 40 °C Helgeson/Sage. Im gemeinsamen gültigen Bereich von 10 bis 40 °C werden die Drücke zur Stetigkeit linear gewichtet. Diese Gewichtung ist eine eigene didaktische Näherung. Rechnerbereich: −25 bis 65 °C. Für Überdruck gilt hier eine angenommene Atmosphäre von 1,01325 bar.

Vertiefende Primärquellen: [Viessmann](https://www.viessmann.de/de/wissen/technik-und-systeme/luft-wasser-waermepumpe/funktion.html) und [Danfoss](https://www.danfoss.com/en/service-and-support/case-stories/dcs/dimensioning-of-refrigeration-components-part-2-thermostatic-expansion-valves/). Lehrtexte und Diagramme sind eigenständig erstellt.

Das Labor ist keine vollständige thermodynamische Simulation. Regler setzen Zustände unabhängig; Druckverluste bleiben unberücksichtigt. Heißgastemperatur, Kältemittelmassenstrom und COP werden nicht aus den Reglern berechnet. Das Wasserlabor ist eine separate Bilanz für reines Wasser. Die Abtauansicht zeigt qualitative Energieflüsse, keinen gerätespezifischen Ventilplan; die Druckanzeigen bleiben beim separat eingestellten Heizmodell.

Sensorbezeichnungen und Sollwerte sind gerätespezifisch. Arbeiten an Elektrik und R290-Anlagen erfordern passende Fachkunde und Schutzmaßnahmen. Keine Anleitung zum Öffnen oder Befüllen von Kältekreisen.

## Bedienung und Tests

Eine einzige `index.html`, ohne externe Laufzeitabhängigkeiten. Animationen sind pausierbar und berücksichtigen reduzierte Bewegung. Breite Schemata können auf kleinen Bildschirmen seitlich gescrollt werden. Fortschritt wird nach Möglichkeit lokal gespeichert; das Verhalten bei lokalen Dateien kann vom Browser abhängen. Der frühere Fortschritt der sechs alten Lektionen wird nicht übernommen, weil sich die Zuordnung geändert hat.

Automatisiert geprüft mit DOM-Testumgebung: alle 36 Lektionen, 12 Module, 18 Berechnungen, acht Diagnosefälle, fünf SVG-Ansichten, Wasserbilanz, Druck-Temperatur-Rückrechnung und Referenzwerte, ungültige Eingaben, Einheitenwechsel, Pause, Voreinstellungen und Fortschrittsspeicherung/-reset. Die neue Rechenschule wurde zusätzlich in Chromium bei Desktop- und Handybreite geprüft, einschließlich Dezimalantworten, Prüfungsmodus, Wiederaufnahme nach Neuladen und Abgabe. Die Ansichten wurden visuell kontrolliert; Safari wurde nicht separat getestet.


### Reproduzierbarer Test der Rechenschule

Die Anwendung selbst benötigt weiterhin keine Installation. Nur für den Entwicklungstest:

```sh
npm install --no-save jsdom
node tests/rechenschule.cjs
```

Der Test führt beide Skriptblöcke mit echtem DOM in jsdom aus und prüft alle 36 Aufgaben/108 Teilantworten, unabhängige Referenzergebnisse, Eingabevalidierung, Einheiten, Hilfestufen, Fortschritt, alle Formelumstellungen, sicheren Umgang mit Freitext sowie Prüfungsnavigation, Wiederaufnahme, leere Abgabe und Abbruch.
