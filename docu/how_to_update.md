spielsachenbasar-mundelsheim.de
===============================

1 access Strato ftp server
------------------------
use a FTP client of your favor connect to:

`ssh.strato.de`


2 edit FillHtml.js to update Basar information or set the top-info-box message
-------------------------------------------------------------------------
open the FillHtml.js file with your text editor, the first lines should look like:

```javascript
var Aktueller_Basar_Signatur = "mundel3rfergr"
var Aktuelles_Basar_Datum    = "2020-11-28"
var Folgendes_Basar_Datum    = "2021-03-28"
var Tage_vor_Basar_Anmeldung = 42 // 42 days are 6 weeks, not Answer to the Ultimate Question of Life, the Universe, and Everything

var Top_Info_Box_Anzeigen    = false  // if set to true the Top-Info-Box will be shown
var Top_Info_Box             = "ABSAGE Herbst Basar 2020"
var Top_Info_Box_Text        = [
"Leider müssen wir auch den diesjährigen Herbstbasar absagen.",
"Der Elternbeirat des Kindergarten Dammweg"
								]
```


* to update Basar dates, set a new string to `Aktuelles_Basar_Datum` and `Folgendes_Basar_Datum`; make sure not to remove the quotes ("") and follow to date order year, month, day
* to update Basar signature, paste the signatur created by EasyBasar in this string
* to set a Infobox message with headline, if you would like to display the top-info-box on the webpage to make an anouncement set `Top_Info_Box_Anzeigen` to true (no quotes here!) and fill both strings `Top_Info_Box` and `Top_Info_Box_Text`. Pay attention to `Top_Info_Box_Text`; each line is a separated entry, it has to be quoted and concatenated by comma.


