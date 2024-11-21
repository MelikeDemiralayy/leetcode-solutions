// Given an integer num, return the number of digits in num that divide num.

// An integer val divides nums if nums % val == 0.

 

// Example 1:

// Input: num = 7
// Output: 1
// Explanation: 7 divides itself, hence the answer is 1.
// Example 2:

// Input: num = 121
// Output: 2
// Explanation: 121 is divisible by 1, but not 2. Since 1 occurs twice as a digit, we return 2.
// Example 3:

// Input: num = 1248
// Output: 4
// Explanation: 1248 is divisible by all of its digits, hence the answer is 4.
 

// Constraints:

// 1 <= num <= 109
// num does not contain 0 as one of its digits.


/**
 * @param {number} num
 * @return {number}
 */
var countDigits = function(num) {
    let digits = num.toString().split(''); // sayıyı rakamlarına ayırmak için bir diziye dönüştürüyoruz. 
    console.log(digits);

    let count = 0; // sayaç

    for (let digit of digits){
        if ( num % Number (digit) === 0 ){ // rakam sayıyı bölebilir mi kontrolu yapmak için 
            console.log(`${digit} rakamı ${num} sayısını bölebilir.`);
            count ++; // sayacı arttırır
        } else {
             console.log(`${digit} rakamı ${num} sayısını bölemez.`);
        }
    }

    return count;


};