function findTriplet(array) {
    for (let i = 0; i < array.length - 2; i++) {
        for (let j = i + 1; j < array.length - 1; j++) {
            for (let k = j + 1; k < array.length; k++) {
                if (array[i] + array[j] + array[k] === triplet) {
                    console.log("Triplets(" + array[i] + "," + array[j] + "," + array[k] + ")");
                }
            }
        }
    }
}
let triplet = 0;
let array = new Array(0, -1, 2, -3, 1);
findTriplet(array);
