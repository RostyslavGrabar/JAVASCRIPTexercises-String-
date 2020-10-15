// Користувач вводить з клавіатури арифметичний вираз. Необхідно обчислити його значення з урахуванням пріоритетів введених математичних 
// операцій і дужок. Якщо у виразі зустрічаються інші символи, видати повідомлення, що вираз введено некоректно.

function calculate(expression){
    let wrongSymbols = ['*-','*+','/-','/+',','];
    for (let i = 0; i < wrongSymbols.length; i++) {
        if(expression.indexOf(wrongSymbols[i]) != -1) {
            console.log(`Expression: "${expression}" \nIncorrect data`);
            return false;
        };            
    }
    try{
        let result = eval(expression);
        console.log(`${expression} = ${result}`);
    } catch (e){
        console.log(`Expression: "${expression}" \nIncorrect data`);
    }
}

calculate("5-(1+2)*2");