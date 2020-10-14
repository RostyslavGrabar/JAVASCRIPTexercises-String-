//Створити функцію, що дозволяє вставляти (видаляти) рядок символів в (з) масив (-а) рядків.

/**  
    * This function insert or delete string in array
    * function(array, string, param) 
    * param - "insert" or "delete", insert = insert string in arrray, delete = delete string in arrray
*/
function insertDeleteString(arr, str, param){
    let result = [];
    switch(param){
        case "delete":
            result = arr.filter(item => item != str );
            break;  
        case "insert":
            result = arr.concat(str);
            break; 
    }
    console.log(`\nArray: [${arr}]\nString: ${str}\nParam: ${param}\nResult: [${result}]\n`);
}

insertDeleteString(["Lorem ipsum", "dolor sit", "dolor sit", "amet consectetur"] , "Lorem ipsum", "delete");

insertDeleteString(["Lorem ipsum", "dolor sit", "dolor sit", "amet consectetur"] , "Lorem ipsum", "insert");
