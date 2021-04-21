let readline = require('readline-sync');
function primeFactor(number){
    if (number <= 1) {
        console.log("Not allowed!"); 
        exit;
    }
    
    for (let i=2; i <= number; i++){ 
        if ((number % i) === 0){ 
        let factor = i; 
            for (let j=2; j < factor; j++ ){  
                    if ((factor % j) === 0){ 
                        flag=1 
                        break;
                    }
                }
                if (flag === 0){
                array[k] = factor; 
                k++;
                count = 1;
                }
            }
        }
        return array;
    }
    let count = 0; 
    let flag = 0;
    let k=0; 
    let array = new Array();
    let number = parseInt(readline.question("Enter the number to find the prime factor of the number\n")); 
    let newArray = primeFactor(number);
    
    if (count === 0) 
        console.log("No prime factors found except 1 and $input"); 
    else 
        console.log("Prime factors of the number : "+newArray);