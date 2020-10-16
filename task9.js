//З клавіатури вводиться ціле число в діапазоні від 0 до 1000000. Необхідно вивести його прописний стрічковий еквівалент.

function numberInWords(str){
  if(isNaN(+str)){
    return str + " - not a number"
  }else if((str[0] == 0 && str.length > 1) || (str.indexOf('.') != -1) || (+str> 1000000)){
    return str + " - Incorrect data"
  }
  str = str.padStart(6, '0');
  strReverse = str.trim().split('').reverse().join('');

  let result = '';
  let singleNumbers = ['','one','two','three','four', 'five', 'six','seven', 'eight', 'nine','ten','eleven','twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen','eighteen','nineteen'];
  let decimalumbers = ['','','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
  if(str == 0) result += 'zero';
  if(str == 1000000) result += 'million';
  
  function singleNumbersFunc(index){
    for (let i = 0; i < singleNumbers.length; i++) {
      if(+index === i){
        result += singleNumbers[i] + ' ';
      }
    }
  }

  function decimalumbersFunc(index){
    for (let i = 0; i < decimalumbers.length; i++) {
      if(+index === i){
        result += decimalumbers[i] + ' ';
      }
    }
  }

  function hundredFunc(single = 0, decimal = 1, hundred = 2,){
    if(strReverse[hundred] != 0){
      singleNumbersFunc(strReverse[hundred]);
      result += 'hundred ';
    }
    
    if((strReverse[decimal] + strReverse[single])<20){
      singleNumbersFunc(strReverse[decimal] + strReverse[single]);
    } else if((strReverse[decimal] + strReverse[single])>=20){
      decimalumbersFunc(strReverse[decimal]);
      singleNumbersFunc(strReverse[single]);
    }
  }

  if(strReverse[3] != 0 || strReverse[4] != 0 || strReverse[5] != 0){
    hundredFunc(3,4,5);
    result += 'thousand ';
  }

  hundredFunc();
  return result;
}    

console.log(numberInWords("1000000"));
console.log(numberInWords("0"));
console.log(numberInWords("a"));
console.log(numberInWords("0.2"));
console.log(numberInWords("1"));
console.log(numberInWords("10"));
console.log(numberInWords("19"));
console.log(numberInWords("29"));
console.log(numberInWords("108"));
console.log(numberInWords("1992"));
console.log(numberInWords("199002"));
console.log(numberInWords("51992"));
console.log(numberInWords("151992"));
console.log(numberInWords("1151992"));
