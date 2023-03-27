/** 
 * Question 1. Falsy or Truthy?
 * Given two values, return the first one if it is falsy, otherwise return the second one.
 * filterOutFalsy(0, 500) -> 0
 * filterOutFalsy(false, 100) -> False
 * filterOutFalsy([true, 'Dog']) -> 'Dog'
*/

// function falsyOrTruthy(elem1, elem2) {
//     if (/* falsy */) {
//         // return the element
//     }
//     else {
//         // return element 2
//     }
// }

// function falsyOrTruthy(elem1, elem2) {
//     return (!elem1) ? elem1 : elem2;
// }
// console.log(falsyOrTruthy(10, 5));

/** 
 * Question 2. Return the length of any given array
 * Given an array, return its length.
 * 
 * arrLength([1, 2, 3]) -> 3
 * arrLength([5, 0, -4, 1]) -> 4
 * arrLength([]) -> 0 
*/

// function arrLength(arr) {
//     return arr.length;
// }

// console.log(arrLength([1, 2, 3,]));
// console.log(arrLength([5, 0, -4, 1]));
// console.log(arrLength([]));

/**
 * Question 3. Get the last element in an array
 * Given an array, return the first element.
 * 
 * lastElem([3, 2, 0, 6, 2]) -> 2
 * lastElem(['dog', 'cat', 'ball']) -> 'ball'
 * lastElem([null, 5, false]) -> false
 */

// function arrLength(arr) {
//     return arr[arr.length -1];
// }
// console.log(arrLength([3, 2, 0, 6, 2]))
// console.log(arrLength(['dog', 'cat', 'ball']));
// console.log(arrLength([null, 5, false]));

// console.log(arrLength([0, 1, 2, 3]));

/**
 * Question 4. Find the sum of an array
 * Given the array, return the sum of every element.
 * 
 * arrSum([2, 2, 2]) -> 6
 * arrSum([100, 200, 500]) -> 800
 * arrSum([0, -5, -10]) -> -15
 */

// function arrSum(arr) {
//     for (let i = 0; i < arr.length; ++i) {
//         //This is how you loop theough every element in an array
        
//         console.log(i);
//     }
//     console.log('for loop broke')
// }

// console.log(arrSum([100, 200, 500]));
// console.log(arrSum([2, 2, 2])); 
// console.log(arrSum([1, 2, 3, 4, 5, 6]));

// function arrSum(arr) {
//     let sum = 0
//     for (let i = 0; i < arr.length; ++i) {
//         //This is how you loop theough every element in an array
//         sum = sum + arr[i];
//     }
//     return sum;
// }

// console.log(arrSum([100, 200, 500]));
// console.log(arrSum([2, 2, 2])); 
// console.log(arrSum([1, 2, 3, 4, 5, 6]));

/**
 * Question 5. Add up numbers from a single number
 * Given a number, add up all the numbers from one to the number that is given. 
 * E.g. An input of 4 will give you 1 + 2 + 3 + 4, which equals 10.
 * progressiveSum(3) -> 6
 * progressiveSum(4) -> 10
 * progressiveSum(600) -> 180300
 */



// function progressiveSum(num) {
//     let sum = 0; 
//     for(let i = 1; i <= num; ++i) {
//         sum = sum + i;
//     }
//     return sum;
// }

// console.log(progressiveSum(3));
// console.log(progressiveSum(4));
// console.log(progressiveSum(600));

/**
 * Question 6. Calculate the time
 * Given the number in seconds, return this number in mm:ss format.
 *  
 * calcTime(66) -> '01:06'
 * calcTime(50) -> '00:50'
 * calcTime(300) -> '05:00'
 * 
 */

// function calcTime(seconds) {
//    let timerMinutes =  Math.floor(seconds / 60);
//    let timerSeconds = seconds % 60;

//    if (timerMinutes.toString().length === 1) {
//       timerMinutes = '0' + timerMinutes;
//    }

//    return timerMinutes + ':' + timerSeconds;
// }

// console.log(calcTime(66));
// console.log(calcTime(50));
// console.log(calcTime(500));

/**
 * Question 7. Find the largest number
 * Given an array of numbers, return the largest number of that array 
 * 
 * getMax([5, 100, 0]) -> 100
 * getMax([12, 10, -20]) -> 12
 * getMax([-300, -100, -200]) -> -100
 */


// function getMax(arr) {
//     for (let i = 0; i < arr.length; ++i) {
//         console.log(arr[i]);
//     }
// }

// console.log(getMax([-100, -200, -300]));
function getMax(arr) {
    let max = arr[0];
    for (let i = 0; i < arr.length; ++i) {
        if (arr[i] > max) {
            max = arr[i]
        }
    }
    return max;
}

console.log(getMax([5, 100, 0]));
console.log(getMax([12, 10, -20]));
console.log(getMax([-100, -200, -300]));
// function reverseString(str) {
//     let reversedString = '';
//     for (let i = 0; i < str.length; ++i) {
//         //This is how you loop through every character in a string
//         reversedString = str[i] + reversedString;
//     }

//     return reversedString;
// }

// console.log(reverseString('Hector'));

// function reverseString(str) {
//     return str.split('').reverse().join('');
// }

// console.log(reverseString('Hector '));

// function convertToZeros(arr) {
//     return new Array(arr.length).fill(0);
// }


// console.log(convertToZeros([1, 2, 3]));

// function convertToZeros(arr) {
//     return arr.map(elem => {
//         return 0
//     })
// }

// console.log(convertToZeros([1, 2, 3, 4,5]));
// 

// function removeApples(arr) {
//     return arr.filter(elem => elem === 'Apple')
   
// }

// console.log(removeApples(['Banana', 'Apple', 'Orange', 'Apple']));

// function filterOutFalsy(arr) {
//     let truthyArr = [];
//     for (let i = 0; i < arr.length; ++i) {
//         console.log(arr[i])
//         if (!!arr[i] === true) {
//             truthyArr.push(arr[i]);
//         }
//     }
// }

// console.log(filterOutFalsy(['', NaN, 500, null, false, 0]));