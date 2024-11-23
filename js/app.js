'use strict';

let SecretNumber = Math.trunc(Math.random()* 20 ) + 1;
console.log(SecretNumber);
let score = 20;
let highScore = 0;
const displayMasseage = function(message){
    document.querySelector('.message') .textContent = message;
}
document.querySelector('.check') .addEventListener('click',
    function(){
        const clickValue = Number(document.querySelector('.guess') .value);
        // console.log(typeof clickValue);


        // when there is no input
        if(!clickValue){
            // document.querySelector('.message') .textContent = 'No Number!';
            displayMasseage('No Number!')

        // when player wins
        } else if (clickValue === SecretNumber){
            document.querySelector('.number') .textContent = SecretNumber;
            displayMasseage('Correct Number!');
            document.querySelector('body') .style.backgroundColor = "#60b347"
            document.querySelector('.number') .style.width = '30rem';
            if(score > highScore){
                highScore = score;
                document.querySelector('.highscore') .textContent = highScore;
            }
        // when guess is wrong
        } else if(clickValue !== SecretNumber){
            if(score > 1){
                displayMasseage(clickValue > SecretNumber ? 'To High!' : 'To Low!');
                score --;
                document.querySelector('.score') .textContent = score;
            } else {
                document.querySelector('.score') .textContent = 0;
                displayMasseage('You lose the game!');
                document.querySelector('body') .style.backgroundColor = 'red';
                document.querySelector('.number') .textContent = '❌';
            }
        } 
        // when guess is too high    
        // else if (clickValue > SecretNumber){
        //     if(score > 1){
        //         document.querySelector('.message') .textContent = 'To High!';
        //         score --;
        //         document.querySelector('.score') .textContent = score;
        //     } else {
        //         document.querySelector('.score') .textContent = 0;
        //         document.querySelector('.message') .textContent = 'You lose the game!';
        //     }

        // when guess is too low
    //     } else if (clickValue < SecretNumber){
    //         if(score > 1){
    //             document.querySelector('.message') .textContent = 'To Low!';
    //             score --;
    //             document.querySelector('.score') .textContent = score;
    //         } else {
    //             document.querySelector('.score') .textContent = 0;
    //             document.querySelector('.message') .textContent = 'You lose the game!';
    //         }
    //     }
    }
);

document.querySelector('.again') .addEventListener('click',
    function(){
        score = 20;
        SecretNumber = Math.trunc(Math.random() * 20 ) + 1;
        console.log(SecretNumber);
        displayMasseage('Start guessing...');
        document.querySelector('.score') .textContent = score;
        document.querySelector('.number') .textContent = '?';
        document.querySelector('.guess') .value = '';
        document.querySelector('body') .style.backgroundColor = '#222';
        document.querySelector('.number') .style.width = '15rem';
    }
);