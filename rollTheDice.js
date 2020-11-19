const rollTheDice = () => {
    die1 = Math.floor(Math.random() * 6 + 1 );
     die2 = Math.floor(Math.random() * 6 + 1 );
    return die1 + die2;
};
console.log(rollTheDice());
