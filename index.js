// 1. Always Hungry
console.log("Question 1");
function alwaysHungry(arr) {
    var foodCount = 0
    for (var i=0; i<arr.length; i++){
        if (arr[i] == "food"){
            foodCount+= 1
            console.log("yummy");
        }
    }
    if (foodCount == 0){
        console.log("I'm hungry");
    }
}
alwaysHungry([3.14, "food", "pie", true, "food"]);
// this should console log "yummy", "yummy"
alwaysHungry([4, 1, 5, 7, 2]);
// this should console log "I'm hungry"

// 2. High Pas Filter
console.log("");
console.log("Question 2");
function highPass(arr, cutoff) {
    var filteredArr = [];
    for (var i=0; i<arr.length; i++){
        if (arr[i] > cutoff){
            filteredArr+= arr[i];
        }
    }
    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); // we expect back [6, 8, 10, 9]

// 3. Better than Average
console.log("");
console.log("Question 3");
function betterThanAverage(arr) {
    var sum = 0;
    var average = 0;
    for (var i=0; i<arr.length; i++){
        sum+= arr[i];
    }
    average = sum/arr.length;
    var count = 0;
    for (var x=0; x<arr.length; x++){
        if (arr[x]> average){
            count+= 1;
        }
    }
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // we expect back 4

// 4. Array Reverse
console.log("");
console.log("Question 4");
function reverse(arr) {
    var arrReverse = [];
    for (var i=arr.length - 1; i>=0; i--){
        arrReverse+= arr[i];
    }
    return arrReverse;
}
var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // we expect back ["e", "d", "c", "b", "a"]

// 5. Fibonacci Array
console.log("");
console.log("Question 5");
function fibonacciArray(n) {
    // the [0, 1] are the starting values of the array to calculate the rest from
    var fibArr = [0, 1];
    for (var i=0; i<n - 2; i++){
        fibArr.push(fibArr[i]+fibArr[i+1]);
    }
    return fibArr;
}
var result = fibonacciArray(10);
console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
