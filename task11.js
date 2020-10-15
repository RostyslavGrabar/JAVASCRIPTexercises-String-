//Скільки разів в рядку, введеним користувачем, зустрічається вказане слово?

function repeatWordInString(str, word){
    let arr = str.split(' ');
    let result = arr.filter(item => {
        return item == word;
    })
    console.log(result.length);
}

repeatWordInString("Lorem ipsum dolor sit amet consectetur amet adipisicing elit. Impedit consectetur perferendis quas tempore iure quam eius suscipit", "amet");