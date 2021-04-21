function repeatedNumbers() {
    for (let i = 1; i <= 100; i++) {
        if (i % 11 === 0) {
            array[count] = i;
            count++;
        }
    }
}

let count = 0;
let array = new Array();
repeatedNumbers();
console.log(array);