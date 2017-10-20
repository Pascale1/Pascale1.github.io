var list = ["We shall see!",
			"Yes!",
			"No!",
			"Maybe.",
			"Certainly.",
			"Ask again later.",
			"Doubtful.",
			"Signs point to no.",
			"Signs point to yes!"];

function randomNumber() {
	return Math.floor(Math.random() * 10);
}

function testJs(){
	alert("test!");
}

function shake8Ball() {
	document.getElementById("8ball").src="magic8ball2.jpg";
	//alert("We shall see!");


	document.getElementById("results").innerHTML=list[randomNumber()];

	alert(randomNumber());
}

