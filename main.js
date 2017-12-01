function testJs(){
	alert("test!");
}

function shake8Ball() {
	document.getElementById("magic8ball").src="magic8ball2.jpg";
	alert("We shall see!");
}
 
/*
	Below the code is for tic tac toe

*/

//hold XD or O
var character = "O";

//handeles X and O turns
function turn(location){

	//switch between X and O
	if(character == "X"){
		character = "O";
	}
	else{
		character = "X"
	}
	
		document.getElementById(location).innerHTML = character;
}

//class X's and O'ss
function clearAll(){
	document.getElementById("r1r1").innerHTML = "";
	document.getElementById("r1r2").innerHTML = "";
	document.getElementById("r1r3").innerHTML = "";
	document.getElementById("r2r1").innerHTML = "";
	document.getElementById("r2r2").innerHTML = "";
	document.getElementById("r2r3").innerHTML = "";
	document.getElementById("r3r1").innerHTML = "";
	document.getElementById("r3r2").innerHTML = "";
	document.getElementById("r3r3").innerHTML = "";


}