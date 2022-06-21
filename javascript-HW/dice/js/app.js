

function diceRoll(){
    
    random1 = Math.ceil(Math.random()*6)
    random2 = Math.ceil(Math.random()*6)
    
    firstDice = document.getElementById('first-die');
    firstDice.classList.remove("dice-2");
    firstDice.classList.add(`dice-${random1}`);

    secondDice = document.getElementById('second-die');
    secondDice.classList.remove("dice-3");
    secondDice.classList.add(`dice-${random2}`);
    
    
}

