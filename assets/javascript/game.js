// hangman options
var options = ["totoro", "ponyo", "chihiro", "kiki", "calcifer", "yubaba"];
// create an array for _
var blank = []
var all;
var guesses = 10;
var userGuess;
var lettersGuessed= [];
var used;
var win = 0;
var accepted = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
't', 'u', 'v', 'w', 'x', 'y', 'z'];


// press any key to begin
document.onkeyup = function(event) {


// generating random option
	var word = options[Math.floor(Math.random() * options.length)];

	// push _ for length of word 
	for (var i = 0; i < word.length; i++) {
		blank.push("_ ");
		// join array into string separated by a space
		var all = blank.join(" ");

		}
	// print blanks to page 
	document.getElementById('blanks').innerHTML = all;
	// create a function for all and then call it 

	// capturing user guess
	document.onkeyup = function(event) {
		// converting user guess to lowercase to match opt
		var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
		// continue only if userGuess is a letter
		if ((accepted.includes(userGuess)) && (lettersGuessed.includes(userGuess) == false) ) {

			// for how long the word is
			for (i=0; i<(word.length); i++) {
				// check guess against each letter of the word
				if(word[i] === userGuess){
					// if there's a match, replace that space with letter
					blank[i] = userGuess
					// turn array into string without commas
					var all = blank.join("");
					// print blanks to page 
					document.getElementById('blanks').innerHTML = all;
				};
			};	
			// after each turn decrease guesses by 1 
			guesses--;
			document.getElementById('remaining').innerHTML = "Remaining Guesses: " + guesses;
			lettersGuessed.push(userGuess);
			var used = lettersGuessed.join(" ");
			document.getElementById('used').innerHTML = used;
			// 
			if(all === word) {
				setTimeout(function(){
					alert("YOU WIN!");	
				}, 500)
				win++;
				document.getElementById('win').innerHTML = "Wins: " + win;
			} else if(guesses === 0) {
				alert("YOU LOSE! the word was:" + word);
			}

			//check endgame condition
			if(all === word || guesses === 0) {
				guesses = 10;
				document.getElementById('remaining').innerHTML = "Remaining Guesses: " + guesses;
				word = options[Math.floor(Math.random() * options.length)];
				used = null;
				document.getElementById('used').innerHTML = used;
				all = null;
				lettersGuessed = [];
				blank = [];
				for (var i = 0; i < word.length; i++) {
					blank.push("_ ");
					// join array into string separated by a space
					var all = blank.join(" ");
					setTimeout(function(){
						document.getElementById('blanks').innerHTML = all;	
					}, 500)
					

					}
			};

		}
		// else {
		// 	alert('press a letter!');

		// }
	}

}	


