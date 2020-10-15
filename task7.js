// Написати функцію, що перетворює дробове або ціле число в рядок.

function numToString(num){
    let str = num.toString();
    console.log(`type ${num} = ${typeof(str)}`);
}
numToString(1.5)