
 
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
firstCard = [];
 openCard = [];
 

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
      card.classList.add('open','show');




    
  if (opCard.length == 2){
//matched cards 
if (opCard[0].innerHTML == opCard[1].innerHTML){
  opCard[0].classList.add('match');
  opCard[1].classList.add('match');
}
// hide if it not match 
        setTimeout(function(){
           opCard.forEach(function(card){
                card.classList.remove('open','show');
      });
          opCard = [];
    },1000);
  }
  });
});

function winGame(){
  if (openCard.length==16){
    stop();
    console.log (congrats);
  }
}

 function init(){
  // timer 
  let minutes = 0;
  let seconds =0; 
  let timer;
function startTimer (){
  setInterval(function(){
    seconds +=1;
  }, 1000);
}



 }
function countingMoves(){
    moves ++;
    counter.innerHTML = moves;
     if (move > 10){
    let star = document.querySelector('.fa fa-star"');
    star.classList.remove(star);
  }
  else if (move >15){
    let star = document.querySelector('.fa fa-star"');
    star.classList.remove(star);
  }
   }

init();

