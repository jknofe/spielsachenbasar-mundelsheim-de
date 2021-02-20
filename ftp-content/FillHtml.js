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


// SCRIPT /////////////////////////////////////////////////////////////////////

// replace text inside this hmtl class
function ReplaceHTMLText(class_name, text) {
	elements = document.getElementsByClassName(class_name)
	for (var i = 0, len = elements.length; i < len; i++) {
  		elements[i].textContent = text;
	}
}

// add the top info box to the webpage
function AddTopInfoBox(){
	// get the target div for the top info box
	var target = document.getElementById("TopInfoBoxTarget");
	// if to box should be shown add it
	if(Top_Info_Box_Anzeigen){
		// create a div with the on_top class
		var div = document.createElement("div");
		div.setAttribute("class", "on_top");
		// add headline
		var div_h1 = document.createElement("h1");
		div_h1.textContent = Top_Info_Box;
		div_h1.setAttribute("style", "color: #FF7F50;");
		// add each text element as a paragraph
		div.appendChild(div_h1);
		for (i = 0; i < Top_Info_Box_Text.length; i++) {
  			var div_p = document.createElement("p");
			div_p.textContent = Top_Info_Box_Text[i];
			div.appendChild(div_p);
		}
		target.appendChild(div);
	}
}

// set the date inside the webpage
function SetDates(){
	// define the dates
	var Curr_Date = new Date(Date.parse(Aktuelles_Basar_Datum));
	var Next_Date = new Date(Date.parse(Folgendes_Basar_Datum));

	// define month names
	months = ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"];
	names  = ["Frühjahrsbasar", "Herbstbasar"]


	// name of basar, fist half of year is spring, second half is autumn
	var Curr_Name = names[Math.round( (Curr_Date.getMonth()/12))];
	var Next_Name = names[Math.round( (Next_Date.getMonth()/12))];
	var Reg_Date  = new Date(Curr_Date - 1000 * 60 * 60 * 24 * Tage_vor_Basar_Anmeldung); 
	var Curr_RDay = Reg_Date.getDate() + ". " + months[Reg_Date.getMonth()] + " " + Reg_Date.getFullYear();
	var Curr_BDay = Curr_Date.getDate() + ". " + months[Curr_Date.getMonth()] + " " + Curr_Date.getFullYear();
	var Curr_PDay = (Curr_Date.getDate()-1) + ". " + months[Curr_Date.getMonth()] + " " + Curr_Date.getFullYear();
	var Next_BDay = months[Next_Date.getMonth()] + " " + Next_Date.getFullYear();

	// replace span with dates
	ReplaceHTMLText("Span-Curr-B-Day", Curr_BDay);
	ReplaceHTMLText("Span-Curr-P-Day", Curr_PDay);
	ReplaceHTMLText("Span-Curr-Name", Curr_Name); 
	ReplaceHTMLText("Span-Curr-R-Month", Curr_RDay); 
	ReplaceHTMLText("Span-Next-B-Day", Next_BDay);
	ReplaceHTMLText("Span-Next-Name", Next_Name);
}

// add the easybasar iframe
function AddIFrame() {
	var basarUrl = "https://www.easybasar.de:/webservice/register.php?basar=" + Aktueller_Basar_Signatur;
	
	// get the target div for the iframe
	var target = document.getElementById("iframeTarget");
	
	// create aLink with fallback link
	var aLink = document.createElement("a");
	aLink.setAttribute("href", basarUrl);
	aLink.textContent="Hier klicken für die easyBasar Anmedung zum Basar";
	
	// create the iframe
	var ifrm = document.createElement("iframe");
	ifrm.setAttribute("src", basarUrl + "&width=274&height=160");
	ifrm.setAttribute("class", "iframeEb");
	ifrm.setAttribute("frameborder", "0");
	ifrm.setAttribute("scrolling", "no");
	ifrm.appendChild(aLink);
	
	// add it to the target div
	target.appendChild(ifrm);
}


// EOF