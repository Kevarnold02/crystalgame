var randomNum;   //random num
var ourScore = 0;
var wins = 0;
var losses = 0;
var restartGame;


//random number generator
function numGenerator(n) {
    
    return Math.floor((Math.random() * n) + 1);
 };  	
//event where a random number gets passed into the div with the id='randomNum'
function replaceNum() {
	randomNum = numGenerator(121);
		$("#randomNum").text(randomNum);
}
//this function attaches a random number to each image.
function addNumToCrystal(crystal) {
	// debugger;
	$(crystal).attr("data-num", numGenerator(11));
}

//calling the above functions and passing in the generated data  
replaceNum();
//pushes a number to each crystal image
addNumToCrystal("#crystalOne");
addNumToCrystal("#crystalTwo");
addNumToCrystal("#crystalThree");
addNumToCrystal("#crystalFour");

//when an image is clicked, it alerts the number that has been passed to that image
$("#crystalOne, #crystalTwo, #crystalThree, #crystalFour").on("click", function() {
	ourScore+=parseInt($(this).attr("data-num"));
	$('#currentTotal').text(ourScore);
		if (ourScore == randomNum) {
			wins++;
			$('.wins').text("Wins " + wins);
			restartGame();
		}else if(ourScore>randomNum) {
			losses++;
			$('.losses').text("Losses " + losses);
			restartGame();
		}

});



//restart

function restartGame() {
	
	ourScore = 0;
 		$('#currentTotal').text(ourScore);
	replaceNum();
	addNumToCrystal("#crystalOne");
	addNumToCrystal("#crystalTwo");
	addNumToCrystal("#crystalThree");
	addNumToCrystal("#crystalFour");
};
// function restart() {









// $("#crystalOne, #crystalTwo, #crystalThree, #crystalFour").on("click", function() {
// 	ourScore+=parseInt($(this).attr("data-num"));
// 	$('#currentTotal').text(ourScore);
// 		if (ourScore == randomNum) {
// 			wins++;
// 			$('.wins').text("Wins " + wins);
// 			restart();
// 		}else if(ourScore>randomNum) {
// 			losses++;
// 			$('.losses').text("Losses " + losses);
// 			restart();		
// 		}
// 	})
// };


//want


// $( document ).ready(function() {
// 	function randomNum () { 
// 		//selecting via class
// 		var randomNum = $( ".randomNum" );

// 	}
// 		//jQuery selects the div puts into an array as an object
// 		console.log(randomNum);
// 	});
	




// function r
// Math.floor((Math.random(test) * 100) + 1);

// alert("Hello");

// <p>Click the button to display a random number between 1 and 100.</p>

// <button onclick="myFunction()">Try it</button>

// <p id="demo"></p>

// <script>
// function myFunction() {
//     var x = document.getElementById("demo")
//     x.innerHTML = Math.floor((Math.random() * 100) + 1);
// }