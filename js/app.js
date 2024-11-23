'use strict';

let SecretNumber = Math.trunc(Math.random()* 20 ) + 1;
// console.log(SecretNumber);
document.querySelector('.number') .textContent = SecretNumber;

document.querySelector('.check') .addEventListener('click',
    function(){
        const clickValue = Number(document.querySelector('.guess') .value);
        // console.log(typeof clickValue);

        if(!clickValue){
            document.querySelector('.message') .textContent = 'No Number!';
        } else if (clickValue === SecretNumber){
            document.querySelector('.message') .textContent = 'Correct Number!'
        } else if (clickValue > SecretNumber){
            document.querySelector('.message') .textContent = 'To High!';
        } else if (clickValue < SecretNumber){
            document.querySelector('.message') .textContent = 'To Low!';
        }
    }
);