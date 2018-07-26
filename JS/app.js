
 
 
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

scorePanel = []
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
if (!card.classList.contains('open') && !card.classList.contains('show') && !card.classList.contains('match'));
      opCard.push(card);
      card.classList.add('open','show', 'disabled');
    
  if (opCard.length == 2){
    //start counts moves 
     addMove();
     changeStars();
     startTimer();

//matched cards 
if (opCard[0].innerHTML == opCard[1].innerHTML){
  opCard[0].classList.add('match');
  opCard[1].classList.add('match');
matchedCard.push(opCard[0],opCard[1]);

}


// all cards matched
gameOver();
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
  //change stars
 let rates= document.querySelector('.stars')
 // let listStarts = document.querySelectorAll('.fa fa-star')
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

// timer 
let hours =0;
  let minutes =0;
  let seconds =0;
 function startTimer(){
  let initialClick = false;
  let time = document.querySelector('.timer')
   let timer = setInterval(countTimer, 1000);
  
function countTimer(){
   seconds++;
   if(seconds == 60){
    minutes++;
    seconds =0;
   }
    document.querySelector('.timer').innerHTML = hours + ":" + minutes + ":" + seconds;
   }

 }

// stop timer
 function stopTimer(){
let time = document.querySelector('.timer')
  clearInterval(time);    

   } 
   // check if game is over
function gameOver(){
  if (matchedCard.length === dIcons.length){

 swal({
  title: "Congratulations!",
  text: ' You Won, do you want to play again ' + ' it took you ' + moves + ' moves ' + 'and the time it took you is  ' + hours + ":" + minutes + ":" + seconds + rates,
  icon: "success",
});
 stopTimer();
}

//
 let initialClick = false
    if(initialClick=== false){
  initialClick = true;
  }

}

}
  
let restartButton = document.querySelector('.restart');
restartButton.addEventListener('click', function(e){

  location.reload()
  init();


});

init();

