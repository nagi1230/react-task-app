// const flatArray = [2, [3, 4], [5, 5, 9, 0], 8]
// output = [2,3,4,5,5,9,0,8]

// const ans = flatArray.reduce((acc, val) => {
//     return acc.concat(val)
// }, [])

// function flatArray2(flatArray) {
//     let result = [];
//     for (const val of flatArray) {

//         if (Array.isArray(val)) {
//             result = [...result, ...val]; // spread single value
//             // result.push(...val)
//         }
//         else {
//             // result.push(val);
//             result = [...result, val]; // spread single value
//         }
//     }
//     return result
// }

// console.log(flatArray2(flatArray));


// without any inbuld method of js


// function flatten(arr) {
//     let result = [];
//     let k = 0;

//     for (let i = 0; i < arr.length; i++) {
//         let current = arr[i];

//         // Check if it's an array by typeof
//         if (typeof current === "object") {
//             console.log(current, "typeOf");

//             for (let j = 0; j < current.length; j++) {
//                 result[k] = current[j];
//                 k++;
//             }
//         }
//         else {
//             result[k] = current;
//             k++;
//         }
//     }

//     return result;
// }

// // Test


// function twoSum() {
//     const nums = [8, 7, 11, 15, 1, 9];
//     const target = 9
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = 1; j < nums.length; j++) {
//             if (nums[i] + nums[j] == target) {
//                 return [i, j]

//             }
//         }
//     }
//     return "Not Match The Result";
// }

// const result = twoSum();
// console.log(result);

//// Remove Zeroes from the given array

// const removeZeros = (array) => {

//     let updatedArr = [];
//     let index = 0;
//     for (let i = 0; i < array.length; i++) {
//         if (array[i]) {
//             const elements = array[i]
//             updatedArr[index] = elements
//             index++
//         }

//     }
//     return updatedArr;

// }

// const input = [0, 1, 0, 3, 12];
// const result = removeZeros(input);
// console.log(result);

// Find the Maximum Element

// function maximumEle(array) {
//     let maxNum = array.length;    
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] > maxNum) {        
//             maxNum = array[i];
//         }
//     }
//     return maxNum

// }

// const input = [1, 2, 3, 4, 6];
// const result = maximumEle(input);
// console.log(result); // Output: 6


// function findMaxAndSecondMax(array) {
//   let max = [0];
//   let secondMax = [0];

//   for (let i = 1; i < array.length; i++) {
//     if (array[i] > max) {
//       secondMax = max;   // purana max ab second max ban gaya
//       max = array[i];    // naya max set kar diya
//     } 
//     else if (array[i] > secondMax && array[i] < max) {
//       // agar current value max se chhoti hai par second se badi
//       secondMax = array[i];
//     }
//   }

//   return { max, secondMax };
// }

// const input = [1, 2, 3, 4, 6];
// const result = findMaxAndSecondMax(input);

// console.log(result); // 👉 { max: 6, secondMax: 4 }


// function findMinNum(array) {
//   let sum = 0;
//   for (let i = 0; i < array.length; i++) {

//   }
//   return sum
// }
// const input =[1, 2, 3, 4, 5]
// const result = findMinNum(input)
// console.log(result);

/// reverce an array

// const reverceArr = (array) => {
//     let arr = [];
//     let index = 0;
//     for (let i = array.length - 1; i >= 0; i--) {
//         let element = array[i];
//         arr[index] = element; // direct index assignment
//         index++;

//     }
//     return arr
// }

// const input = [1, 2, 3, 4, 5];

// const result = reverceArr(input)
// console.log(result, "result");


// Remove duplicates from array

// function removeDuplicates(array) {
//     let updatedArr = [];
//     let index = 0;

//     for (let i = 0; i < array.length; i++) {
//         let found = false; // assume it's not duplicate

//         // check in updatedArr;
//         for (let j = 0; j < index; j++) {
//             if (updatedArr[j] === array[i]) {
//                 console.log(array[i], "checkData");

//                 found = true; // duplicate found
//                 break;
//             }
//         }
//         // if not duplicate, add to new array!!
//         if (!found) {
//             updatedArr[index] = array[i];
//             index++;
//         }
//     }

//     return updatedArr;

// }

// let elements = [1, 2, 1, 3, 2, 4, 5, 4];
// console.log(removeDuplicates(elements));


//  Another way

// function removeDuplicates(array) {
//   let updatedArr = [];
//   let index = 0;

//   for (let i = 0; i < array.length; i++) {
//     let current = array[i];
//     for (let j = i + 1; j < array.length; j++) {
//       let next = array[j];
//       if (current === next) {
//         console.log(current, 'checkData');
//         updatedArr[index] = current;
//         index++;
//       }
//     }
//   }

//   return updatedArr;
// }

// let elements = [1, 2, 1, 3, 2, 4, 5, 4];
// console.log(removeDuplicates(elements));


// Find second largest element



// const secondLargest = (arr) => {

//     let max = -Infinity;
//     let secondMax = -Infinity;

//     for (let num of arr) {
//       if (num > max) {
//         secondMax = max;
//         max = num;
//       } else if (num > secondMax) {
//         secondMax = num;
//       }
//     }

//     return secondMax;

//   };

//   let elements = [1, 2, 3, 4, 5, 6];

//   const result = secondLargest(elements);
//   console.log(result, 'result'); // 5




// sort  to un-sorted array
function sortArr(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            console.log(array[j], "jjjjjjjjjj");

            if (array[i] > array[j]) {
                // Swap
                let temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }
    }
    return array;
}

const input = [3, 1, 2, 5, 4];
sortArr(input)
console.log(sortArr(input));


// Arrays Questions Done

// Now Practice  For Strings


// Count vowels and consonants

// function countVowels(array) {
//     let vowelsList = ['a', 'e', 'i', 'o', 'u'];
//     let vowelCount = 0;
//     let consonantCount = 0;

//     for (let i = 0; i < array.length; i++) {
//         let current = array[i];
//         let isVowel = false;
//         // Check if current is a vowel (manual check);
//         for (let j = 0; j < vowelsList.length; j++) {
//             if (current === vowelsList[j]) {
//                 isVowel = true;
//                 break;
//             }
//         }
//         if (isVowel) {
//             vowelCount++;
//         } else {
//             consonantCount++;
//         }
//     }

//     return [vowelCount, consonantCount];
// }

// let input = ["a", "b", "c", "d", "e"];
// let [vowels, consonants] = countVowels(input);

// console.log("Vowels:", vowels);       // Vowels: 2
// console.log("Consonants:", consonants); // Consonants: 3


// Palindrome Check 

// function isPalindrome(array) {
//     let reversed = [];
//     let index = 0;
//     for (let i = array.length - 1; i >= 0; i--) {
//         reversed[index] = array[i];
//         index++;
//     }
//     // Compare original and reversed
//     let isSame = true;
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] !== reversed[i]) {
//             isSame = false;
//             break;
//         }
//     }
//     return isSame;
// }
// let input = [1, 2, 1];
// let result = isPalindrome(input);
// console.log(result); // true ✅ (it is a palindrome);

//  Recursion start now

// function doSomething(n) {
//     if (n === 0) {
//         console.log("TASK COMPLETED!");
//         return
//     }
//     console.log(n, "I'm doing something.");

//     doSomething(n - 1);
//     console.log(n, "I'm doing something.");


// }
// doSomething(5);

// function factorialNum(array) {
//     let facNum = [];
//     let index = 0;

//     for (let i = 0; i < array.length; i++) {
//         let n = array[i];
//         let fact = 1;

//         for (let j = n; j >= 1; j--) {
//             fact = fact * j;
//         }

//         facNum[index] = fact;
//         index++;
//     }

//     return facNum;
// }

// console.log(factorialNum([1, 2, 3, 4, 5]));
// [1, 2, 6, 24, 120];


// function findIndex(array, target) {
//     let updatedArr = [];
//     for (let i = 0; i < array.length; i++) {

//     }
// }

// console.log(findIndex([5, 3, 7, 9, 2], 7)); // 2

