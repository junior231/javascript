(() => {
 // simple JS file
 console.log('fired! or loaded... whatever');

// this is a simple line comment
var choices = ["Rock", "Paper", "Scissors"];
var computer;
var player = document.querySelector("#weapon");
var trigger = document.querySelector("#play");
var status = document.querySelector(".winlose");

function playGame() {
	// debugger
	console.log("called playGame");

	// make the computer choose a random weapon
	computer = choices[Math.floor(Math.random() * choices.length)];
	var player_choice = player.value;
	console.log(computer);

	// check for a tie first
	if (computer.toLowerCase() == player_choice.toLowerCase()) {
		// it is a tie
		status.textContent == "Tie! You Live to shoot another day.";
	}

	else if ( player_choice.toLowerCase() === "rock") {
		if (computer.toLowerCase() === "scissors") {
			// win
			status.textContent = `Win! ${player_choice} beats ${computer}.`;
		} else {
			// lose
			status.textContent = `Lose! ${comuter} beats ${player_choice}`;

	}	
}

    else if ( player_choice.toLowerCase() === "paper") {
		if (computer.toLowerCase() === "rock") {
			// win
			status.textContent = `Win! ${player_choice} beats ${computer}.`;
		} else {
			// lose
			status.textContent = `Lose! ${comuter} beats ${player_choice}`;

	}	
}

    else if ( player_choice.toLowerCase() === "scissors") {
		if (computer.toLowerCase() === "paper") {
			// win
			status.textContent = `Win! ${player_choice} beats ${computer}.`;
		} else {
			// lose
			status.textContent = `Lose! ${comuter} beats ${player_choice}`;

	}	
}

    else {
    	player.value = "";
    	alert("You didn't pick a valid weapon... try again");
    }
}
  trigger.addEventListener("click", playGame);
})();