'use strict';
const ComputerScore = document.getElementById('computer-score');

const UserScore = document.getElementById('user-score');

let cScore=0;
let pScore=0;

let resultMessage='';


const gameStartContainer = document.getElementById('game-start');
const gameResultContainer = document.querySelector('.game-result');

const hands = document.querySelector('.hands');

const btnGameStart= document.getElementById('btn-game-start');

const computerChoice = document.getElementById('computer-choice');
const userChoice = document.getElementById('user-choice');
const result = document.getElementById('result');

const gameStart = function() {
    ComputerScore.innerText = cScore;
    UserScore.innerText = pScore;
    
    gameResultContainer.classList.remove('hidden');
    gameStartContainer.classList.add('hidden');
    hands.classList.remove('hidden');
};

const gameLogic= function(userSelected,computerSelected){
    if(userSelected === computerSelected){
        resultMessage = 'DRAW';
        updateDom(userSelected,computerSelected,resultMessage);
        return;
    }
    if(userSelected === 'rock' ){
        if(computerSelected === 'paper'){
            cScore++;
            resultMessage= 'YOU LOST';
            updateDom(userSelected,computerSelected,resultMessage);
            return;
        }
        else if(computerSelected === 'scissors'){
            pScore++;
            resultMessage= 'YOU WON';
            updateDom(userSelected,computerSelected,resultMessage);
            return;
        }
        else if(computerSelected === 'lizard'){
            pScore++;
            resultMessage= 'YOU WON';
            updateDom(userSelected,computerSelected,resultMessage);
            return;
        }
        else{
            cScore++;
            resultMessage= 'YOU LOST';
            updateDom(userSelected,computerSelected,resultMessage);
            return;
        }
    }
    if(userSelected === 'paper'){
        if(computerSelected === 'rock'){
            pScore++;
            resultMessage= 'YOU WON';
            updateDom(userSelected,computerSelected,resultMessage);
            return;
        }
        else if(computerSelected === 'scissors'){
            cScore++;
            resultMessage= 'YOU LOST';
            updateDom(userSelected,computerSelected,resultMessage);
            return;
        }
        else if(computerSelected === 'lizard'){
            cScore++;
            resultMessage= 'YOU LOST';
            updateDom(userSelected,computerSelected,resultMessage);
            return;
        }
        else{
            pScore++;
            resultMessage= 'YOU WON';
            updateDom(userSelected,computerSelected,resultMessage);
            return;
        }
    }
    if(userSelected === 'scissors'){
        if(computerSelected === 'rock'){
            cScore++;
            resultMessage= 'YOU LOST';
            updateDom(userSelected,computerSelected,resultMessage);
            return;
        }
        else if(computerSelected === 'paper'){
            pScore++;
            resultMessage= 'YOU WON';
            updateDom(userSelected,computerSelected,resultMessage);
            return;
        }
        else if(computerSelected === 'lizard'){
            pScore++;
            resultMessage= 'YOU WON';
            updateDom(userSelected,computerSelected,resultMessage);
            return;
        }
        else{
            cScore++;
            resultMessage= 'YOU LOST';
            updateDom(userSelected,computerSelected,resultMessage);
            return;
        }
    }
    if(userSelected === 'lizard'){
        if(computerSelected === 'rock'){
            cScore++;
            resultMessage= 'YOU LOST';
            updateDom(userSelected,computerSelected,resultMessage);
            return;
        }
        else if(computerSelected === 'paper'){
            pScore++;
            resultMessage= 'YOU WON';
            updateDom(userSelected,computerSelected,resultMessage);
            return;
        }
        else if(computerSelected === 'scissors'){
            cScore++;
            resultMessage= 'YOU LOST';
            updateDom(userSelected,computerSelected,resultMessage);
            return;
        }
        else{
            pScore++;
            resultMessage= 'YOU WON';
            updateDom(userSelected,computerSelected,resultMessage);
            return;
        }
    }
    if(userSelected === 'spock'){
        if(computerSelected === 'rock'){
            pScore++;
            resultMessage= 'YOU WON';
            updateDom(userSelected,computerSelected,resultMessage);
            return;
        }
        else if(computerSelected === 'paper'){
            cScore++;
            resultMessage= 'YOU LOST';
            updateDom(userSelected,computerSelected,resultMessage);
            return;
        }
        else if(computerSelected === 'scissors'){
            pScore++;
            resultMessage= 'YOU WON';
            updateDom(userSelected,computerSelected,resultMessage);
            return;
        }
        else{
            cScore++;
            resultMessage= 'YOU LOST';
            updateDom(userSelected,computerSelected,resultMessage);
            return;
        }
    }
}

const updateDom = function(userSelected,computerSelected,resultMessage) {
    ComputerScore.innerText = cScore;
    UserScore.innerText = pScore;
    computerChoice.innerHTML=`Computer Choose <strong>${computerSelected.toUpperCase()}</strong>`;
    userChoice.innerHTML=`User Choose <strong>${userSelected.toUpperCase()}</strong>`;
    result.innerText=resultMessage;
}

const check = function(input){
    const userSelected= input;
    const choices = ['rock','paper','scissor','lizard','spock'];
    const num= Math.trunc(Math.random() * 5 );
    const computerSelected= choices[num];
    gameLogic(userSelected,computerSelected);
}
btnGameStart.addEventListener('click', gameStart);