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
    return (count == 0) ? true : false;
}

console.log(correctBrackets(')(1+5)())'));