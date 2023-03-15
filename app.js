// MEDIUM CHALLENGES

// 1. Truthy or Falsey

    // function truthyOrFalsey (val1, val2) {
    //     return !val1 ? val1 : val2;
    // }

    // console.log(truthyOrFalsey(false,2));


// 2. Length of Array 

    // function lengthOfArray (arr) {
    //     return arr.length;
    // }

    // console.log(lengthOfArray([1,2,3]));


// 3. Last Element in an Array

    // function lastEle (arr) {
    //     return arr[arr.length-1];
    // }

    // console.log(lastEle([1,2,3]));


// 4. Sum of an Array

    // function sumOfArray (arr) {
    //     let counter=0;

    //     for (i=0; i < arr.length ; i++)
    //     {
    //         counter += arr[i];
    //     }
    //     return counter;
    // }

    // console.log(sumOfArray([1,2,3,4]));


// 5. Progressive Sum

    // function progressiveSum (num) {
    //     let counter=0;

    //     for (i=0; i<num ; i++)
    //     {
    //         counter += num - i;
    //     }

    //     return counter;
    // }

    // console.log(progressiveSum(600));


// 6. Calculate the Time

    // function calcTime (num) {
    //     let seconds = num % 60;
    //     let minutes = (num - seconds) / 60; // OR: let minutes = Math.floor(num / 60)

    //     if (minutes.toString().length === 1)
    //     {
    //         minutes = "0" + minutes;
    //     }

    //     if (seconds.toString().length === 1)
    //     {
    //         seconds = "0" + seconds;
    //     }

    //     return minutes + ":" + seconds;
    // }

    // console.log(calcTime(70));


// 7. Find the Largest Number

    // function largestNum (arr) {
    //     let largest = arr[0];

    //     for (i=1; i<arr.length; i++) {
    //         if (arr[i] > largest) {
    //             largest = arr[i];
    //         }
    //     }

    //     return largest
    // }

    // console.log(largestNum([10,6,3,0,-1,10,11]));


// 8. Reverse a String

    // function reverseString (string) {
    //     let newString = "";
        
    //     for (i=1; i<string.length + 1; i++)
    //     {
    //         newString += string[string.length-i];
    //     }

    //     return newString;
    // }

    // console.log(reverseString("hello my name is lola"));

    // //OR:

    // function reverseString1 (string) {
    //     return string.split('').reverse().join('');
    // }

    // console.log(reverseString1("hello my name is lola"))


// 9. Every Element in an Array into Zero

    // function allToZero (arr) {
    //     for (i=0; i<arr.length; i++)
    //     {
    //         arr[i] = 0;
    //     }

    //     return arr;
    // }

    // console.log(allToZero([1,4,5,6]));


    // //OR:

    // function allToZero1 (arr) {
    //     return arr.fill(0);
    // }

    // console.log(allToZero1([1,4,5,6]));


    // //OR:

    // function allToZero2 (arr) {
    //     return arr.map(element => 0)
    // }

    // console.log(allToZero2([1,4,5,6]));


// 10. Filter out 'Apple'

    // function filterWord (arr) {
    //     let newArray = new Array ();
    //     let counter=0;

    //     for (i=0; i<arr.length; i++) {
    //         if (arr[i] !== "Apple") {
    //             newArray[counter] = arr[i];
    //             counter++;
    //         }
    //     }

    //     return newArray;
    // }

    // console.log(filterWord(["Orange", "Apple", "Bannana", "Apple"]));


    // //OR

    // function filterWord1 (arr) {
    //     let newArr = arr.filter(element => element !== "Apple");

    //     return newArr;
    // }

    // console.log(filterWord1(["Orange", "Apple", "Bannana", "Apple"]));


// 11. Filter out the Falsey Values

    // function filterFalsey (arr) {
    //     let newArray = new Array ();
    //     let counter=0;

    //     for (i=0; i<arr.length; i++) {
    //         if (!!arr[i]) {
    //         newArray[counter] = arr[i];
    //         counter++;
    //         }
    //     }

    //     return newArray;
    // }

    // console.log(filterFalsey(["1", 1, "Bannana", false, 300, 0, -10, null]));


    // // OR:

    // function filterFalsey1 (arr) {
    //     let newArr = arr.filter(element => !!element)

    //     return newArr
    // }

    // console.log(filterFalsey1(["1", 1, "Bannana", false, 300, 0, -10, null]));


// 12. Truthy to True, Falsey to False

    // function convertValues (arr) {
    //     let newArr = arr.map (element => !!element)
        
    //     return newArr;
    // }

    // console.log(convertValues(["1", 1, "Bannana", false, 300, 0, -10, null]));