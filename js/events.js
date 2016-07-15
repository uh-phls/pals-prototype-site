var eventCal = [
    {
        "date":"Monday, August 22",
        "description":"First day of the Fall Semester",
        "location":"none"
    },
    {
        "date":"Monday, August 29",
        "description":"Last day to add a class",
        "location":"none"
    },
    {
        "date":"Friday, Sept. 2",
        "description":"An example of a lunch and learn event presented by Dr. Firstname Lastname.",
        "location":"2 p.m. in the KIVA."
    },
    {
        "date":"Monday, Sept. 5",
        "description":"Labor Day holiday",
        "location":"none"
    },
    {
        "date":"Tuesday, Nov. 8",
        "description":"U.S. Election Day! Get out and vote!",
        "location":"7 a.m. - 7 p.m. Your local voting location."
    },
    {
        "date":"Friday, Dec. 20",
        "description":"Another example of a longer entry that will allow me to test this function.",
        "location":"5 p.m. in FH 490"
    },

];

/***********************************
VAR Collection
*************************************/
var eventEntry = "";

/**************************************
FUNCTION Collection
**************************************/
function print (message) {
	var outputDiv = document.getElementById('output');
	outputDiv.innerHTML = message;
}

/****************************************
PROGRAMS
****************************************/
//Assembles and prints the events calendar
for ( var i = 0; i < 5; i += 1 ) {
	if ( eventCal[i].location === "none" ) {
		eventEntry += "<h4 class='calDate'>" + eventCal[i].date + "</h4>";
		eventEntry += "<p>" + eventCal[i].description + "</p>";
	} else {
		eventEntry += "<h4 class='calDate'>" + eventCal[i].date + "</h4>";
		eventEntry += "<p>" + eventCal[i].description + "<br>";
		eventEntry += "<span class='eventInfo'>" + eventCal[i].location + "</span></p>";
	}
}
print ( eventEntry );
