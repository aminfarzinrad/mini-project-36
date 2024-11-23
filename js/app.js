'use strict';

let SecretNumber = Math.trunc(Math.random()* 20 ) + 1;
// console.log(SecretNumber);
document.querySelector('.number') .textContent = SecretNumber;
let score = 20;
document.querySelector('.check') .addEventListener('click',
    function(){
        const clickValue = Number(document.querySelector('.guess') .value);
        // console.log(typeof clickValue);

        if(!clickValue){
            document.querySelector('.message') .textContent = 'No Number!';
        } else if (clickValue === SecretNumber){
            document.querySelector('.message') .textContent = 'Correct Number!'
        } else if (clickValue > SecretNumber){
            if(score > 1){
                document.querySelector('.message') .textContent = 'To High!';
                score --;
                document.querySelector('.score') .textContent = score;
            } else {
                document.querySelector('.score') .textContent = 0;
                document.querySelector('.message') .textContent = 'You lose the game!';
            }

        } else if (clickValue < SecretNumber){
            if(score > 1){
                document.querySelector('.message') .textContent = 'To Low!';
                score --;
                document.querySelector('.score') .textContent = score;
            } else {
                document.querySelector('.score') .textContent = 0;
                document.querySelector('.message') .textContent = 'You lose the game!';
            }
        }
    }
);