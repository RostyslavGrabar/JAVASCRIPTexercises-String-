// Створити метод який приймає, введену користувачем стрічку і виводить на екран статистику по цій стрічці. Статистика повинна включати загальну
// кількість символів, кількість букв (і скільки букв в верхньому регістрі і нижньому), кількість цифр, символів пунктуації та кількість символів
// пробілів.

function stringStatistic(str) {
    let obj = {
        "totalCharacters" : str,
        "upperCase" : str.match(/[A-Z,А-Я]/g),
        "lowerCase" : str.match(/[a-z,а-я]/g),
        "nums" : str.match(/[0-9]/g),
        "spaces" : str.match(/[ ]/g),
        "punctuationChars" : str.match(/[^A-Z,А-Я,a-z,а-я,0-9, ]/g),
    };

    console.log(`Statistik of string: ${str}`);
    for (const res in obj) {
        if(obj[res]){
            obj[res] = obj[res].length;
        } else {
            obj[res] = 0;
        }
    }
    console.log(obj);
}

stringStatistic(" Ї QW 1211../!@#");