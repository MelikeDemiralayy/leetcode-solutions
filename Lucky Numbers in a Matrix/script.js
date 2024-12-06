// Given an m x n matrix of distinct numbers, return all lucky numbers in the matrix in any order.

// A lucky number is an element of the matrix such that it is the minimum element in its row and maximum in its column.

 

// Example 1:

// Input: matrix = [[3,7,8],[9,11,13],[15,16,17]]
// Output: [15]
// Explanation: 15 is the only lucky number since it is the minimum in its row and the maximum in its column.
// Example 2:

// Input: matrix = [[1,10,4,2],[9,3,8,7],[15,16,17,12]]
// Output: [12]
// Explanation: 12 is the only lucky number since it is the minimum in its row and the maximum in its column.
// Example 3:

// Input: matrix = [[7,8],[1,2]]
// Output: [7]
// Explanation: 7 is the only lucky number since it is the minimum in its row and the maximum in its column.
 

// Constraints:

// m == mat.length
// n == mat[i].length
// 1 <= n, m <= 50
// 1 <= matrix[i][j] <= 105.
// All elements in the matrix are distinct.



/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers = function(matrix) {
    let rowMins = matrix.map(row => Math.min(...row)); // Her satırdaki minimum değerler matrix.map() kullanarak matristeki her bir row üzerinde işlem yapar
    console.log(rowMins);

    // sütunlardaki maksimum değerleri bulmak için 
    let colMaxs = [];
    for (let col = 0; col < matrix[0].length; col++) {
        let max = -Infinity; // başlangıçta max değeri -ınfinity olarak belirledik
        for (let row = 0; row < matrix.length; row++) {
            max = Math.max(max, matrix[row][col]); // Her sütundaki maksimum değeri bulmak için
        }
        colMaxs.push(max);
    }
    console.log(colMaxs);

    // Şanslı sayıları bulmak için
    let luckyNumbers = [];
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[0].length; col++) {
            // Eğer eleman hem satırın minimumu hem de sütunun maksimumuysa
            if (matrix[row][col] === rowMins[row] && matrix[row][col] === colMaxs[col]) {
                luckyNumbers.push(matrix[row][col]); // Şanslı sayıyı ekle
            }
        }
    }
    return luckyNumbers;
};

// her satırda min değerleri ve her sütunda max değerleri bulmalıyız öcelikle
// bunları bulduktan sonra matrix kısmına bakılmalı ve şanslı sayılar bulunmalı 