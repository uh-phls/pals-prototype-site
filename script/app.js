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
for ( var i = 0; i < eventCal.length; i += 1 ) {
	if ( eventCal[i].length < 3 ) {
		eventEntry += "<h4 class='calDate'>" + eventCal[i][0] + "</h4>";
		eventEntry += "<p>" + eventCal[i][1] + "</p>";
	} else {
		eventEntry += "<h4 class='calDate'>" + eventCal[i][0] + "</h4>";
		eventEntry += "<p>" + eventCal[i][1] + "<br>";
		eventEntry += "<span class='eventInfo'>" + eventCal[i][2] + "</span></p>";
	}
}
print ( eventEntry );

//Feature story slider

var $storySubhead;
var $storyHeadline;
var $storyButton = $( '<a type="button" class="btn btn-default" >Read More</a>' );
var $backgroundInfo;

$storyHeadline = $("<h2>" + featureStories[0].headline +"</h2>");
$storySubhead = $( "<p>" + featureStories[0].subheader + "</p>" );
var storyLocation = featureStories[0].storyLink;
$storyButton.attr("href", storyLocation);
var backgroundInfo = '#C8102E url' + featureStories[0].imageLink + ' no-repeat center right';
$("#slider").css("background", backgroundInfo);
$("#slider").append( $storyHeadline );
$("#slider").append( $storySubhead );
$("#slider").append( $storyButton );

console.log ( backgroundInfo );
