//Створити функцію для перевірки коректності розстановки дужок у виразі.

function correctBrackets(str){
    let expressionArray = str.split('');
    let bracketsArray = expressionArray.filter(item => item == '(' || item == ')' );
    let count = 0 ;
    bracketsArray.forEach( item => {
        if(item == '(') count++;
        else if(item == ')') count--;
        if(count < 0) return false;
    });
    console.log(`Expression = "${str}"` )
    if(count == 0) console.log(true)
    else  console.log(false);
}

correctBrackets(')(1+5)())');