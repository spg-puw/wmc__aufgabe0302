# Aufgabe MiniFrontend mit API

Aufgabe by [PUW](https://github.com/spg-puw/).

## Aufgabe

### API

Implementiere folgende API mit express. Die Daten der API müssen *nicht* gespeichert werden (keine Persistierung) - nach jedem Neustart des Programms sind nur die Anfangsdaten vorhanden.

Die Grundstruktur des Programms ist schon in der Datei *index.js* vordefiniert.

* `GET /`: lädt die Datei `preview.html`
* `GET /products`
  * gibt alle Produkte als JSON zurück (array)
* `GET /products/<someid>`
  * gibt ein Produkt als JSON zurück, wenn das Produkt gefunden wird
  * wird das Produkt nicht gefunden, so wird der Statuscode 404 mit der Nachricht 'not found' zurückgegeben
* `POST /products`
  * erwartet ein POST-Request mit den Parametern: `name`, `price`
  * Fehlende oder leere Parameter sowie ein negativer Preis führen zu einem Fehler mit Statuscode 400 und der Nachricht 'parameter error'
  * passen alle Parameter, so wird das Produkt mit einer neuen ID in die Liste eingefügt und der Datensatz für das neue Produkt als JSON zurückgeliefert
* `DELETE /products/<someid>`
  * wenn das Produkt gefunden wird, so wird es aus der Liste gelöscht und der Datensatz des gelöschten Produktes als JSON zurückgegeben
  * wird das Produkt nicht gefunden, so wird der Statuscode 404 mit der Nachricht 'not found' zurückgegeben

### MiniFrontend

Bearbeite die Datei *preview.html* und ergänze folgende Funktionen.

* Füge ein Formular hinzu, um neue Produkte anzulegen
  * Name, Preis, Absendebutton
  * Formularziel ist die Route `POST /products`
  * Nach dem Absenden wird wird man auf die Produkte-Seite geleitet und es wird das neue Produkt als JSON angezeigt
* ergänze die Funktion loadData() ...
  * es werden die Produkte dynamisch von `GET /products` geladen
  * wenn Daten geladen wurden und Datensätze vorhanden sind, so wird die aktuelle Tabelle gelöscht und die neuen Datensätze hinzugefügt
    * siehe Tabellenstruktur im HTML-Code
    * der Preis wird in der Tabelle mit 2 Nachkommastellen und dem Eurozeichen angegeben (z.B. 10 wird zu "10.00 €")
  * sollte das Laden fehlschlagen, so wird über alert() die Fehlermeldung 'Keine Daten empfangen' ausgegeben

## Setup

Abhängigkeiten installieren:

```sh
npm install
```

Das Programm selber kann mit folgendem Befehl gestartet werden:

```sh
# normal starten
npm run start

# mit nodemon starten
npm run dev
```

Zum Testen werden *jest* und *supertest* (API) sowie *cypress* (e2e) verwendet.

```sh
# für API-Test
npm run test:api

# für Frontend-Test (e2e mit cypress)
npm run test:e2e
npm run cypress:open # cypress öffnen (API muss gestartet sein)

# alle Tests durchlaufen
npm run test
```