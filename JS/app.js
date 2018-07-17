
 
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
 moves =0
scorePanel = []
 openCard = [];
 

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
}
  
 init();
let aCards = document.querySelectorAll('.card');
let opCard = [];
aCards.forEach(function(card){
  card.addEventListener('click', function(e){
//opened card
if (!card.classList.contains('open') && !card.classList.contains('show') && !card.classList.contains('match'));
      opCard.push(card);
      card.classList.add('open','show', 'disabled');
    
  if (opCard.length == 2){
   adMoves();
//matched cards 
if (opCard[0].innerHTML == opCard[1].innerHTML){
  opCard[0].classList.add('match');
  opCard[1].classList.add('match');
}
// hide if it not match 
        setTimeout(function(){
           opCard.forEach(function(card){
                card.classList.remove('open','show', 'disabled');
      });
          opCard = [];
    },1000);
  }
  });
});

//count moves
countMoves= document.querySelector('.moves');
moves = 0;
function addMove(){
moves++;
 countMoves.innerHTML = moves;

}
     
init();
  
function startTimer (){
let vTimer = setInterval(countTimer, 1000);
   let seconds = 0;
   let minutes = 0;
   let time = document.querySelector('.timer');
   function countTimer(){
    let s = time
    ++s
    let hour = Math.floor(s/3600);
    let Minute = Math.floor((s -hour*3600)/60);
    let Seconds =s-(hour*3600 + minutes*60);
    document.querySelector('.timer').innerHTML = hour + ":" + minutes + ":" + seconds;
   }

   }
   function stopTimer(){
  clearInterval(timer);
}
let restartButton = document.querySelector('.restart');
restartButton.addEventListener('click', function(e){
  let cards = "";
  const shuffleCard = shuffle(dIcons);
  countMoves.innerHTML ="";
  let opCard = [];
  init();


});

