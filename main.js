var list = ["We shall see!",
			"Yes!",
			"No!",
			"Maybe.",
			"Certainly.",
			"Ask again later.",
			"Doubtful.",
			"Signs point to no.",
			"Signs point to yes!"];

function testJs(){
	alert("test!");
}

function shake8Ball() {
	document.getElementById("8ball").src="magic8ball2.jpg";
	//alert("We shall see!");


	document.getElementById("results").innerHTML=list[2];

	//alert(list[2]);
}

