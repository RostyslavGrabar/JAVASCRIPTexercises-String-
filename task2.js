// Користувач вводить рядок і символ. У рядку знайти всі входження цього символу і перевести його в верхній регістр,
// а також видалити частину рядка, починаючи з останнього входження цього символу і до кінця.

function countCharsInString(str, char){
    let arrayLowerChars = str.split("").map(item => {
        if(item == char) item = item.toUpperCase();
        return item;
    })
    let resultStr = arrayLowerChars.join('');
    let lastCharIndex = resultStr.lastIndexOf(char.toUpperCase());
    resultStr = resultStr.substr(0,lastCharIndex);

    console.log(`String: "${str}" \nChar: "${char}" \n\nResult: ${resultStr}`);
}

countCharsInString("Користувач вводить рядок і символ. У рядку знайти всі входження цього символу і перевести його в верхній регістр, а також видалити частину рядка, починаючи з останнього входження цього символу і до кінця." , 'і')