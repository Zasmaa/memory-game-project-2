// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

dIcons = ["fa-diamond","fa-diamond",
"fa-paper-plane-o","fa-paper-plane-o",
 "fa-bolt","fa-bolt",
 "fa-leaf", "fa-leaf",                 
 "fa-bicycle","fa-bicycle",
 "fa-bomb",  "fa-bomb", 
 "fa-anchor","fa-anchor", 
 "fa-cube","fa-cube",];

matchedCard = [];
 opCard = [];
moves = 0;

 function init(){
   // shuffle cards
 const shuffleCard = shuffle(dIcons);
  //make cards 
  let cards = "";
 for (let card of dIcons){
let deck = document.querySelector('.deck');
cards += `<li class ='card'><i class= 'fa ${card}'></i></li>`;
deck.innerHTML = cards;
}
let aCards = document.querySelectorAll('.card');
let opCard = [];
aCards.forEach(function(card){
  card.addEventListener('click', function(e){
//opened card
if (!card.classList.contains('open') && !card.classList.contains('show') && !card.classList.contains('match') && !opCard.length < 2) {
opCard.push(card);
      card.classList.add('open','show', 'disabled');
      if (opCard.length == 2) {
        //start counts moves 
           addMove();
           //matched cards 
      if (opCard[0].innerHTML == opCard[1].innerHTML) {
       opCard[0].classList.add('match');
       opCard[1].classList.add('match');
       matchedCard.push(opCard[0],opCard[1]); 
      }
             // all cards matched
      if (matchedCard.length==dIcons.length) {
          gameOver();
      }
      // hide if it not match 
        else{
          setTimeout(function(){
          opCard.forEach(function(card){
            card.classList.remove('open','show', 'disabled');
          });
          opCard =[];
        },500)
        }
      }
}
  });
});

}
// count moves 
countMoves= document.querySelector('.moves');
moves=0
function addMove(){
  moves++;
  countMoves.innerHTML = moves;
  if( moves==1){
  hours=0;
  minutes=0;
  seconds=0;
startTimer(); 
}
changeStars();
}
//change stars 
let stars= document.querySelector('.stars');
  function changeStars(){
    if (moves > 4 && moves < 10){  
    document.getElementById('one').style.display = 'none'; 

    } 

   else if (moves > 11 && moves < 20){
     document.getElementById('two').style.display = 'none'; 
    }
    else if ( moves > 35){
       document.getElementById('last').style.display = 'none'; 
    }
  } 
//timer
let hours =0;
let minutes=0;
let seconds =0;
let vtimer;

function startTimer() {
    vtimer = setInterval(countTimer, 1000);
}
function countTimer() {
  seconds++;
   if(seconds == 60){
    minutes++;
    seconds =0;
   }
    document.querySelector('.timer').innerHTML = hours + ":" + minutes + ":" + seconds;  
}
// stop timer
function stopTimer(){
  clearInterval(vtimer);
}  
// game over
function gameOver(){

 //adding moves
 let allMoves = document.getElementById('modal-moves');
     allMoves.innerHTML =moves
 // adding time
 let allhours = document.getElementById('modal-hours');
 let allminutes = document.getElementById('modal-minutes');
 let allseconds = document.getElementById('modal-seconds');
 allhours.innerHTML = hours
 allminutes.innerHTML = minutes
 allseconds.innerHTML = seconds
 // adding stars
 let allStars = document.getElementById('modal-stars');

 allStars.innerHTML = stars.innerHTML
 // stoping time
 stopTimer();
// displaying modal
popupModal.style.display = 'block';
// Play again button
let playAgain = document.querySelector('.modal-btn-playAgain');
playAgain.addEventListener('click', function(e){
  location.reload()
  init();
});
//cancel
let Cancel =document.querySelector('.modal-btn-cancel');
Cancel.addEventListener('click', function(e){
  popupModal.style.display='none'
})
}
//restart Button
let restartButton = document.querySelector('.restart');
restartButton.addEventListener('click', function(e){

  location.reload()
  init();

});
// First stat of the game 
init();
