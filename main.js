function testJs(){
	alert("test!");
}

function shake8Ball() {
	document.getElementById("8ball").src="magic8ball2.jpg";
	alert("We shall see!");
}
 
/*
	Below the code is for tic tac toe

*/

//hold X or O
var character = "O";

//handeles X and O turns
function turn(location){
	//if no X or O, then draw
	if(document.getElementById(location).innerHTML == "") {
		//switch between X and O
		if(character == "X"){
			character = "O";
		}
		else{
			character = "X"
		}
		
		document.getElementById(location).innerHTML = character;
	}

	cheakWinner();
}
//class X's and O's
function clearAll(){

	document.getElementById("r1c1").innerHTML = "";
	document.getElementById("r1c2").innerHTML = "";
	document.getElementById("r1c3").innerHTML = "";
	document.getElementById("r2c1").innerHTML = "";
	document.getElementById("r2c2").innerHTML = "";
	document.getElementById("r2c3").innerHTML = "";
	document.getElementById("r3c1").innerHTML = "";
	document.getElementById("r3c2").innerHTML = "";
	document.getElementById("r3c3").innerHTML = "";


}

function cheakWinner() {

	var r1c1 = document.getElementById("r1c1").innerHTML;
	var r1c2 = document.getElementById("r1c2").innerHTML;
	var r1c3 = document.getElementById("r1c3").innerHTML;
	var r2c1 = document.getElementById("r2c1").innerHTML;
	var r2c2 = document.getElementById("r2c2").innerHTML;
	var r2c3 = document.getElementById("r2c3").innerHTML;
	var r3c1 = document.getElementById("r3c1").innerHTML;
	var r3c2 = document.getElementById("r3c2").innerHTML;
	var r3c3 = document.getElementById("r3c3").innerHTML;

	if(r1c1 == r1c2 && r1c1 == r1c3 && r1c1 != ""){

		alert("Winner!");
	}
}


