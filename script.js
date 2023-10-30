// global variable holding an array of numbers
let arr = [1, 2, 3, 4, 5];

// calculateAverage w/ array as parameter
function calculateAverage(arr){
    let sum = 0; // variable to store sum of numbers in input array
    for(let i = 0; i < arr.length; i++){ // iterate through array
        sum = sum + arr[i]; // sum numbers in array
    }
    let avg = sum/arr.length; // divide sum by length of array
    return avg; // return average 
}

// test function by logging the returned value to console
console.log(calculateAverage(arr));