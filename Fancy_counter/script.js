const counterEl = document.querySelector('.counter');
const increaseButtonEl = document.querySelector('.counter__button--increase');
const decreaseButtonEl = document.querySelector('.counter__button--decrease');
const counterValueEl = document.querySelector('.counter__value');
const resetButtonEl = document.querySelector('.counter__reset-button');
const counterTitleEl = document.querySelector('.counter__tittle');

resetButtonEl.addEventListener('click', function() {
    // reset counter value to 0
    counterValueEl.textContent = 0;

    // reset background color
    counterEl.classList.remove('counter--limit');

    // reset counter title
    counterTitleEl.textContent = 'Fancy Counter';

    // enable increase ad decrease buttons
    increaseButtonEl.disabled = false;
    decreaseButtonEl.disabled = false;
});

decreaseButtonEl.addEventListener('click', function() {
    // get current value of counter
    const currentValue = counterValueEl.textContent;
    
    // convert value to number type
    const currentValueAsNumber = +currentValue;

    // decrement by 1
    let newValue = currentValueAsNumber - 1;

    // check if new value is less than 0
    if (newValue < 0){
        newValue = 0;
    }

    // set counter value with new value
    counterValueEl.textContent = newValue;
});

function incrementCounter(){
     // get current value of counter
     const currentValue = counterValueEl.textContent;

     // convert value to number type
     const currentValueAsNumber = +currentValue;
     
     // increment by 1
     let newValue = currentValueAsNumber + 1;
     
     //  check if new value is greater than 5
     if (newValue > 5){
         // if it is, force it to be 5 instead
         newValue = 5;

        //  give visual indicator that limit has been reached
        counterEl.classList.add('counter--limit');

        // update counter title to say limit has been reached
        counterTitleEl.innerHTML = 'Limit! Buy <b>Pro</b> for > 5';

        // update increase and decrease buttons
        increaseButtonEl.disabled = true;
        decreaseButtonEl.disabled = true;
     }

     // set counter element with new value
     counterValueEl.textContent = newValue;
}

increaseButtonEl.addEventListener('click', incrementCounter);

document.addEventListener('keydown', incrementCounter);