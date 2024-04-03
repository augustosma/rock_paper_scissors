game();

function getComputerChoice () {
	n = 3*Math.random()
	if(n>2){return "Rock";}
	else if (n>1) {return "Paper";}
	else {return "Scissors";}
}

function playRound ( playerSelection, computerSelection) {
	if (playerSelection.toLowerCase() == "rock") {
		if (computerSelection.toLowerCase() == "paper"){return "You Lose! Paper beats Rock";}
		else if (computerSelection.toLowerCase() == "scissors"){return "You Win! Rock beats Scissors";}
	}
	else if(playerSelection.toLowerCase() == "paper" ){
		if (computerSelection.toLowerCase() == "scissors"){return "You Lose! Scissors beats Paper";}
		else if (computerSelection.toLowerCase() == "rock"){return "You Win! Paper beats Rock";}
	}
	else if(playerSelection.toLowerCase() == "scissors" ){
		if (computerSelection.toLowerCase() == "rock"){return "You Lose! Rock beats Scissors";}
		else if (computerSelection.toLowerCase() == "paper"){return "You Win! Scissors beats Paper";}
	}
	else if (playerSelection.toLowerCase() == computerSelection.toLowerCase()) {return "TIE";}
	return "Error: wrong parameter(s) given to function"; 
}

function game () {
	let round = 1;
	let playerScore = 0;
	let computerScore = 0;
	let userChoice = null;
	
	//const btns = document.querySelector('.buttons');
	const btns = document.querySelectorAll('button');
	const display = document.querySelector('.result');
	const roundResult = document.createElement('p');
	const score = document.createElement('p');
	display.appendChild(roundResult);
	display.appendChild(score);
	
	let btnsFunc = function(event) {
		switch (event.target.id) {
			case 'btn_rock':
				userChoice = 'Rock';
				break;
			case 'btn_paper':
				userChoice = 'Paper';
				break;
			case 'btn_scissors':
				userChoice = 'Scissors';
				break;
			default://if not button
				userChoice = null; 
				break; 
		}		
			
		let result = playRound(userChoice, getComputerChoice());
		if (result.includes("Win")){
			playerScore++;
			roundResult.textContent = ("You Won Round " + round + "!"); 	
		}
		else if (result.includes("Lose")){
			computerScore++;
			roundResult.textContent = ("You Lost Round " + round + "!");			
		}
		else {
			roundResult.textContent = ("Round " + round + " was a Tie!");
		}
		
		score.textContent = `YOU ${playerScore} - ${computerScore} COMPUTER`;
		
		if (playerScore === 5 || computerScore == 5) {
			if (playerScore > computerScore){
				score.textContent += " " + ("You Won the Game!");
			}
			else if (computerScore > playerScore){
				score.textContent += " " + ("You Lost the Game!");
			}
			else{
				score.textContent += " " + ("The Game was a Tie!");
			}
			
			btns.forEach((button) => {
				button.removeEventListener('click', btnsFunc);
			});
			
		}
		round++;
	};
	
	//btns.addEventListener('click', btnsFunc);
	btns.forEach((button) => {
		button.addEventListener('click', btnsFunc);
	});
	
}

function getUserChoice() {
	let choice = prompt("What is your choice: Rock, Paper or Scissors? ");
	while (choice.toLowerCase() != "rock" && choice.toLowerCase() != "paper" && choice.toLowerCase() != "scissors"){ choice = prompt("Invalid input, please choose again Rock, Paper or Scissors? "); }
	return choice;
}
