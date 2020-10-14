//Даний текст. Здійснити в цьому тексті пошук і заміну заданої фрази.

function replacePhrase(str, phrase){
    let result = str.split(phrase).join("Фразу замінено.");
    console.log(`String: "${str}"\nPhrase: "${phrase}"`);
    console.log(`\nResult: "${result}"`);
}

replacePhrase("Даний текст. Здійснити в цьому тексті пошук і заміну заданої фрази. Здійснити в цьому тексті пошук і заміну заданої фрази.", "Здійснити в цьому тексті пошук і заміну заданої фрази.")