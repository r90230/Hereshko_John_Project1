Ti.UI.setBackgroundColor("#000");

var firstWindow = Ti.UI.createWindow({
	title: "My First Window",
	backgroundColor: "#fff",
});

var myFirstView = Ti.UI.createView({
	backgroundColor: "#d3d3d3",
	borderColor: "#000",
	borderRadius: 5,
	top: 50,
	bottom: 120,
	left: 30,
	right: 30,
});

var myText = Ti.UI.createLabel({
	text: "template"
});

var previousButtonBack = Ti.UI.createView({
	backgroundColor: "#d3d3d3",
	borderColor: "#000",
	borderRadius: 5,
	left: 30,
	bottom: 30,
	height: 65,
	width: 120
});

var nextButtonBack = Ti.UI.createView({
	backgroundColor: "#d3d3d3",
	borderColor: "#000",
	borderRadius: 5,
	right: 30,
	bottom: 30,
	height: 65,
	width: 120
});

var previousButton = Ti.UI.createLabel({
	text: "Previous"
});

var nextButton = Ti.UI.createLabel({
	text: "Next"
});


var loadFile = require("app2");

previousButtonBack.add(previousButton);
nextButtonBack.add(nextButton);
firstWindow.add(myFirstView, previousButtonBack, nextButtonBack);
myFirstView.add(myText);
firstWindow.open();
