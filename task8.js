//Написати функцію, що перетворює рядок в дробове або ціле число.

function stringToNumber(str){
    let num = +str;
    if(isNaN(str)) console.log(`"${str}" - not a number`)
    else console.log(`type "${str}" - ${typeof(num)}`)
}
stringToNumber("1.2");