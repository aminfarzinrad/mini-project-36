'use strict';

document.querySelector('.check') .addEventListener('click',
    function(){
        const clickValue = document.querySelector('.guess') .value;
        // console.log(clickValue);

        if(!clickValue){
            document.querySelector('.message') .textContent = 'No Number!'
        }
    }
);