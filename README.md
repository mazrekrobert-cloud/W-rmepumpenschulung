# Wärmepumpenschulung

Deutschsprachiges interaktives Lernprogramm für SHK-Kundendienst: Luft-Wasser-Wärmepumpe im Heizbetrieb verstehen.

## Sofort starten – ohne Installation

1. Im Repository die Datei **index.html** anklicken.
2. Oben rechts im Dateibereich **Download raw file** (Download-Symbol) wählen. Die Datei als `index.html` speichern. Falls Safari `.txt` anhängt, diese Endung entfernen.
3. Die heruntergeladene `index.html` mit Safari, Chrome, Firefox oder Edge öffnen (Doppelklick).
4. Mit **Kältekreislauf** beginnen und **Nächster Schritt** drücken.

GitHub zeigt auf der Dateiseite den Quelltext, nicht die laufende Anwendung. Die heruntergeladene HTML-Datei läuft direkt im Browser. Es sind keine Cloud-Umgebung, kein API-Schlüssel und kein npm notwendig. Die Datei kann auch auf einen anderen Rechner kopiert werden.

## Inhalte

- Animiertes, anklickbares Schema mit vier Bauteilen, Fließrichtung und Aggregatzuständen.
- Kältemittel und Heizwasser als getrennte Medien; Monoblock und Split erklärt.
- Sechs Lektionen, jeweils eine Frage mit direkter Erklärung.
- Sechs Rechenübungen: Überhitzung, Unterkühlung, Heizleistung, Volumenstrom, Spreizung und COP.
- Vier Störungsfälle mit begründeten Prüfschritten.
- Fortschritt nach Möglichkeit im lokalen Browser gespeichert, zurücksetzbar. Bei lokal geöffneten Dateien kann das Speicherverhalten je nach Browser variieren.
- Responsive Darstellung, Tastaturbedienung der Bauteile und Berücksichtigung reduzierter Animationen.

## Fachlicher Rahmen

Didaktisches Schema, keine gerätespezifische Serviceanleitung und kein vollständiger Meisterkurs. Temperaturbeispiele sind illustrative Betriebspunkte, keine Sollwerte. Für Überhitzung und Unterkühlung ist die zum jeweiligen Druck gehörende Sättigungstemperatur des richtigen Kältemittels erforderlich. Wasserformeln sind Näherungen für reines Wasser; Glykolgemische benötigen andere Stoffwerte. Arbeiten an Elektrik und Kältekreis erfordern passende Fachkunde und Schutzmaßnahmen; R290 ist brennbar.

## Entwicklung und Prüfung

Die gesamte Anwendung liegt ohne externe Abhängigkeiten in `index.html`. Geprüft wurden JavaScript-Ausführung, Bauteilschritte, alle sechs Lektionen und Berechnungen, ungültige Eingaben, vier Störungsfälle und Zurücksetzen des Fortschritts mit einem automatisierten DOM-Test. Eine visuelle Prüfung in einem echten Browser steht noch aus.
