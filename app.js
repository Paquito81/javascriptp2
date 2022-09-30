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

function filterOutFalsy(arr) {
    let truthyArr = [];
    for (let i = 0; i < arr.length; ++i) {
        console.log(arr[i])
        if (!!arr[i] === true) {
            truthyArr.push(arr[i]);
        }
    }
}

console.log(filterOutFalsy(['', NaN, 500, null, false, 0]));