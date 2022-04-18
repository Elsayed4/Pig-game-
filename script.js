'use strict';
let player0Ele = document.querySelector('.player--0');
let player1Ele = document.querySelector('.player--1');
let score0Ele = document.getElementById('score--0');
let score1Ele = document.getElementById('score--1');
let diceEle = document.querySelector('.dice');
let newBtn =  document.querySelector('.btn--new');
let rollBtn =  document.querySelector('.btn--roll');
let holdBtn =  document.querySelector('.btn--hold');
let current0Ele = document.getElementById('current--0');
let current1Ele = document.getElementById('current--1');
let currentScore = 0;
let activeplayer = 0;
let scores = [0,1];

score0Ele.textContent = 0;
score1Ele.textContent = 0;

let playing = true;

const swithPlayer = function(){
    document.getElementById(`current--${activeplayer}`).textContent = 0;
    currentScore = 0;
    activeplayer = activeplayer === 0 ? 1 : 0;
    player0Ele.classList.toggle('player--active');
    player1Ele.classList.toggle('player--active');
}

diceEle.classList.add('hidden')


rollBtn.addEventListener('click',function(){
  if(playing){
    let dice = Math.trunc((Math.random() * 6) + 1);
    diceEle.classList.remove('hidden');
    diceEle.src = `dice-${dice}.png`;

    if(dice !== 1){
        currentScore += dice;
        document.getElementById(`current--${activeplayer}`).textContent = currentScore;
    }
    else{
        swithPlayer()
    }

  }
});

holdBtn.addEventListener('click',function(){

    if(playing){
        scores[activeplayer] += currentScore;
        document.getElementById(`score--${activeplayer}`).textContent = scores[activeplayer] ;
    
        if(scores[activeplayer] >= 20){
            playing = false;
            diceEle.classList.add('hidden')
           document.querySelector(`.player--${activeplayer}`).classList.add('player--winner');
           document.querySelector(`.player--${activeplayer}`).classList.remove('player--active');
        }else{
            swithPlayer();
        }
    
    }
    
});


//  Rest the game 

newBtn.addEventListener('click',function(){
    diceEle.classList.remove('hidden')
    document.querySelector(`.player--${activeplayer}`).classList.remove('player--winner');
    score0Ele.textContent = 0;
    score1Ele.textContent = 0;
    current0Ele.textContent = 0;
    current1Ele.textContent = 0;
    currentScore = 0;
    activeplayer = 0;
    scores = [0,1];
     playing = true;
     document.querySelector(`.player--${activeplayer}`).classList.add('player--active');
})