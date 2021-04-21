function findMinMax(){
    for (let i = 0; i < number.length; i++){
    let random = Math.floor(100 + Math.random() * 900 );
    number [i] = random;
    }
    
    max=number[0]; 
    min=number[0]; 
    for (let j = 0; j < number.length; j++) {
        if (number[j] > max){
            max = number[j];
        }
        if  (number[j] < min){
            min = number[j];
        }
    }
    }
    
    let max =0;
    let min = 0;
    let temp = 0;
    let number = new Array(10);
    findMinMax();
    console.log("maximum : "+max+" minumum : "+min);