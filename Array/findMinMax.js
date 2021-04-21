function findMinMax(){
    let number = new Array(10);
    for (let i = 0; i < number.length; i++){
    let random = Math.floor(100 + Math.random() * 900 );
    number[i] = random;
    }

    let sortedNumberArray = number.sort();
    console.log("Number array "+number);
    console.log("2nd largest number : "+sortedNumberArray[sortedNumberArray.length-2]+"\n2nd smallest number : "+sortedNumberArray[1]);
    }

    findMinMax();