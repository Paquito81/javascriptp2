// function falsyOrTruthy(elem1, elem2) {
//     return (!elem1) ? elem1 : elem2;
// }
// console.log(falsyOrTruthy(10, 5));

// function arrLength(arr) {
//     return arr.length;
// }

// console.log(arrLength([4]));

// function arrSum(arr) {
//     for (let i = 0; i < arr.length; ++i) {
//         //This is how you loop theough every element in an array
        
//         console.log(i);
//     }
//     console.log('for loop broke')
// }

// console.log(arrSum([1, 2, 3, 4, 5, 6]));

// function arrSum(arr) {
//     let sum = 0;
//     for (let i =0; i < arr.length - 1; ++i) {
//         //This is how you loop through every element in an array
//         sum = sum + arr[i];
//     }
//     return sum;
// }

// console.log(arrSum([2, 2, 2]));


// function progressiveSum(num) {
//     let sum = 0; 
//     for(let i = 1; i <= num; ++i) {
//         sum = sum + i;
//     }
//     return sum;
// }

// console.log(progressiveSum(3));

// function calcTime(seconds) {
//     let timerMinutes = Math.floor(seconds / 60);
//     let timerSeconds = seconds % 60;

//     if (timerMinutes.toString().length === 1) {
//         timerMinutes = '0' + timerMinutes
//     }

//     return  timerMinutes + ':' + timerSeconds
// }

// console.log(calcTime(500));

// function getMax(arr) {
//     let max = arr[0];
//     for (let i = 0; i < arr.length; ++i) {
//         if (arr[i] > max) {
//             max = arr[i]
//         }
//     }
//     return max;
// }

// console.log(getMax([-100, -200, 3]));