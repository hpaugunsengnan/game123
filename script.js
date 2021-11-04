/**
 * Game Rules:
 * The game has 2 players, playing in rounds
 * In each turn, a player rolls a dice as many time as he wishes.Each result get added to his round score
 * But, if the player rolls a 1, all his round score gets lost.After that, it's the next player's turn
 * the play can choose to 'Hold', which mean that his round score gets added to his GLABL score.After that, it's the next player's turn
 * The first player to reach 100 points on GLOBAL score wins the game
 */
let scores,roundScore,activePlayer,gamePlaying;

init();

document.querySelector('.btn--roll').addEventListener('click',function(){
    if(gamePlaying){
        let dice = Math.floor(Math.random()*6+1);

        const doudice = document.querySelector('.dice');
        doudice.src = "dice-"+dice+".png";
        document.querySelector('.dice').style.display = "block";
    
        if(dice !== 1){
            roundScore += dice;
            document.getElementById('current--'+activePlayer).textContent = roundScore;
        }else{
            switchPlayer();
        }
    }
})

document.querySelector('.btn--hold').addEventListener('click',function(){
    if(gamePlaying){
        scores[activePlayer] += roundScore;
        document.getElementById('score--'+activePlayer).textContent = scores[activePlayer];
    
        if (scores[activePlayer] >= 50)
        {
            document.getElementById(`name--${activePlayer}`).textContent = "Winner";
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector('.dice').style.display = "none";
            gamePlaying = false;
        }else{
            switchPlayer();
        }
    } 

})

document.querySelector('.btn--new').addEventListener('click',function(){
    init();
})

function init(){
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;

    gamePlaying = true;

    document.getElementById('score--0').textContent = "0";
    document.getElementById('score--1').textContent = "0";

    document.querySelector('#current--0').textContent = "0";
    document.querySelector('#current--1').textContent = "0";

    document.querySelector('.dice').style.display = "none";

    document.querySelector('.player--0').classList.remove('player--winner');
    document.querySelector('.player--1').classList.remove('player--winner');
    document.getElementById('name--0').textContent = "player 1";
    document.getElementById('name--1').textContent = "player 2";
    document.querySelector('.player--0').classList.remove('player--active');
    document.querySelector('.player--1').classList.remove('player--active');
    document.querySelector('.player--0').classList.add('player--active');
}

function switchPlayer(){
    activePlayer === 0 ? activePlayer = 1: activePlayer = 0;
    roundScore = 0;

    document.querySelector('#current--0').textContent = "0";
    document.querySelector('#current--1').textContent = "0";

    document.querySelector('.player--0').classList.toggle('player--active');
    document.querySelector('.player--1').classList.toggle('player--active');
        
    document.querySelector('.dice').style.display = "none";
}
