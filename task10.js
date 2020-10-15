//Написати функцію, яка визначає чи є рядок паліндромом (тобто рядк, який можна читати зліва направо, і справа наліво:
// «А роза упала на лапу Азора», «Аргентина манить негра»).

function palindrom(str){
    str = str.toLowerCase();
    let arr = str.split(' ');
    arr = arr.map(item => {
        if(item.indexOf('ь') == item.length - 1){
            item = item.slice(0, item.indexOf('ь'));
        }
        return item;
    })
    arr = arr.join('');
    let arrReverse =  arr.split('').reverse().join('');
    if (arr == arrReverse) console.log(`"${str}" = palindrome`);
    else console.log(`"${str}" = not a palindrome`);
}

palindrom("Аргентина манить негра");