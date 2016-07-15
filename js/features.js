/*********************
Feature Story Slides
*********************/
var featureStories = [
	{
		"active": true,
		"headline": "Headline One Goes Here.",
		"subhead": "The subhead will go here. Something catchy. Something that will get people to click through and read the rest of the story.",
		"storyLink":"http://www.google.com",
		"storyImage":"img/student_image.jpg"
	},
	{
		"active": true,
		"headline": "Headline Number Two.",
		"subhead": "The subhead will go here. Something catchy. Something that will get people to click through and read the rest of the story.",
		"storyLink":"http://www.yahoo.com",
		"storyImage":"img/student_image_2.jpg"
	},
	{
		"active": false,
		"headline": "Headline, The Third.",
		"subhead": "The subhead will go here. Something catchy. Something that will get people to click through and read the rest of the story.",
		"storyLink":"http://www.cnn.com",
		"storyImage":"img/student_image_3.jpg"
	},
	{
		"active": true,
		"headline": "The Fourth and Final.",
		"subhead": "Blah. Blah. Blah. Here are some words and such. This doesn't have to be fancy.",
		"storyLink":"http://www.amazon.com",
		"storyImage":"img/campus_image.jpg"
	}
];
var slideshowStories = [];

function getStories() {
	for (var i = 0; i < featureStories.length; i += 1) {
		if (featureStories[i].active) {
			slideshowStories.push( featureStories[i] );
		}
	}
	return slideshowStories;
}

getStories()


var slideList = "";

for (var i = 0; i < slideshowStories.length; i += 1) {
    var currentStory = slideshowStories[i];
    var slideDiv = "<div class='slide'>";
    slideDiv += "<div class='slideCopy col-xs-6'>";
    slideDiv += "<h2>" + currentStory.headline + "</h2>";
    slideDiv += "<div class='subCopy col-xs-10 col-xs-push-2'>";
    slideDiv += "<p>" + currentStory.subhead + "</p>";
    slideDiv += "<a href='" + currentStory.storyLink + "'>Learn More</a>";
    slideDiv += "</div></div>";
    slideDiv += "<img src='" + currentStory.storyImage + "' alt='' />";
    slideDiv += "</div>"
    slideList += slideDiv;
}

$(".slideshow").append(slideList);
