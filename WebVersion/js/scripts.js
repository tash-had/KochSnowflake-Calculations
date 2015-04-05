
var square = null;
var triangle = null;
var  perimeter = null;
var area = null;
var iterationAmount;
var title;
var lastValue;

function shapeHandler(shape){
	if(shape === ("square")){
		square = true;
		triangle = false;
		document.getElementById('triangleButton').disabled=true;
		selected("squareButton", "shapeH");
	}
	else if(shape === ("triangle")){
		triangle = true;
		square = false;
		selected("triangleButton", "shapeH");
	}
}

function actionHandler(action){
	if(action === ("perimeter")){
		perimeter = true;
		area = false;
		selected("perimeterButton", "actionH");
	}

	else if(action === ("area")){
		area = true;
		perimeter = false;
		selected("areaButton", "actionH");
	}
}

function selected(id, type){

	var originColor = "#1976D2";
	var selectedColor = "#FF5722";

	var stateCheck = (document.getElementById(id).style.backgroundColor);

	var otherIdOne = null;
	var otherIdTwo = null;

	switch(id){
		case "squareButton":
		otherIdOne = "triangleButton";
		break;

		case "triangleButton":
		otherIdOne = "squareButton";
		break;

		case "perimeterButton":
		otherIdTwo = "areaButton";
		break;

		case "areaButton":
		otherIdTwo = "perimeterButton";
		break;
	}

	if(type === "shapeH"){
		document.getElementById(id).style.backgroundColor = selectedColor;
		document.getElementById(otherIdOne).disabled = true;
	}

	else if(type === "actionH"){
		document.getElementById(id).style.backgroundColor = "#FF5722";
		document.getElementById(otherIdTwo).disabled = true;
	}
}

function topGo(){
	window.location.replace("index.html#mainHeader");
	document.getElementById("downArrow").src = "images/arrow3.png";
}

function process(){
	lastValue = parseInt(document.getElementById('iterationInput').value);
	iterationAmount = parseInt(document.getElementById('rangeInput').value);
	var travelDown = true; 

	if((perimeter || area) === null || (square || triangle) === null){
		travelDown = false;  
		if(window.confirm("You need to select Square Fractal/Triangle Fractal and Perimeter/Area")){
			location.reload();
		}
	}

	if(travelDown == true){
		window.location.replace("index.html#answerFrame");
	}

	if(iterationAmount>249 && iterationAmount<1001){
		alert(iterationAmount + " is a pretty big amount of iterations. Give me like 10 seconds."); 
	}

	else if(iterationAmount>1000 && iterationAmount<5000){
		alert(iterationAmount + "?!!?!?! that's so many iterations! Okay whatever, I'll calculate it anyways but I need like 30 seconds"); 
	}

	else if(iterationAmount>5000){
		alert(iterationAmount + "?!!?!?! Okay now that is just absurd. I seriously need some time to calculate this. How about while I sort this out, you go do something nice instead of pushing around a poor calculator. If this ends up taking too long, just close the page and if you really are interested in those numbers, then you can run my Java version, which is much faster. Simply go here : goo.gl/KKi01Q, then at the top, you press Compile, then you press Execute right after. Then, click on the green section of the site, and you will be able to enter your values and see faster calculations!"); 
	}

	switch(perimeter || area && square || triangle){

		case (perimeter && triangle):
		title = "Perimeters for a Triangle Fractal." + "\n" + "\n" + "\n" + "Inital Perimeter = " + lastValue;
		setTitle(title);
		perimeterProcess("triangle");
		break;

		case (perimeter && square):
		title = "Perimeters for a Square Fractal." + "\n" + "\n" + "\n" + "Inital Perimeter = " + lastValue;
		setTitle(title);
		perimeterProcess("square");
		break;

		case (area && triangle):
		title = "Areas for a Triangle Fractal." + "\n" + "\n" + "\n" + "Inital Area = " + lastValue;
		setTitle(title);
		areaProcess("triangle");
		break;

		case (area && square):
		title = "Areas for a Square Fractal." +  "\n" + "\n" + "\n" + "Inital Area = " + lastValue;
		setTitle(title);
		areaProcess("square");
		break;
	}
}

function perimeterProcess(gShape){
	var answer;
	var currentTerm = 1;
	var cRatioNum = 1.3333;

	if(gShape === "square"){
		cRatioNum = 1.6666;
	}

	while(currentTerm<iterationAmount){
		answer = cRatioNum*lastValue;
		document.getElementById('answerFrame').innerHTML = document.getElementById('answerFrame').innerHTML + "Iteration " + currentTerm + " = " + answer + "\n" + "\n" + "\n"; 
		lastValue = answer;
		currentTerm++;			
	}

}

function areaProcess(gShape){
	var currentTerm = 0;
	var num = 0;
	var deNum = 0;
	var mFactor = 0; 
	var baseNum = 0; 
	var area; 
	var areaSum = 0; 

	if(gShape === "triangle"){
		mFactor = 1/3;
		baseNum = 4/9; 
	}

	else if(gShape === "square"){
		mFactor = 1/4;
		baseNum = 5/9; 
	}

	while(currentTerm<iterationAmount){
		area = lastValue + mFactor*(Math.pow(baseNum,currentTerm)+ areaSum); 
		areaSum = areaSum + Math.pow(baseNum, currentTerm);
		var count = currentTerm + 2; 
		document.getElementById('answerFrame').innerHTML = document.getElementById('answerFrame').innerHTML + "Iteration " + count + " = " + area + "\n" + "\n" + "\n"; 
		currentTerm++; 
	}
}

function setTitle(mainTitle){
	document.getElementById('answerFrame').innerHTML = mainTitle + "\n" + "\n" + "\n" + "\n" + "\n";
}