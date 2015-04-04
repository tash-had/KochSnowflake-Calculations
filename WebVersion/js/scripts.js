
var square = null; 
var triangle = null;
var  perimeter = null; 
var area = null; 


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


function setColor(btn,color){

	var property=document.getElementById(btn);
	if (window.getComputedStyle(property).backgroundColor == 'rgb(244, 113, 33)') {
		property.style.backgroundColor=color;
	}
	else {
		property.style.backgroundColor = "#f47121";
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
	//	if(stateCheck === originColor){
		document.getElementById(id).style.backgroundColor = selectedColor; 
		document.getElementById(otherIdOne).disabled = true; 
	//	}

	}

	else if(type === "actionH"){
	//	if(stateCheck === originColor){
		document.getElementById(id).style.backgroundColor = "#FF5722"; 
		document.getElementById(otherIdTwo).disabled = true; 
	//	}
	}
}