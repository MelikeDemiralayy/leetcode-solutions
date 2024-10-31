// Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

 

// Example 1:

// Input: haystack = "sadbutsad", needle = "sad"
// Output: 0
// Explanation: "sad" occurs at index 0 and 6.
// The first occurrence is at index 0, so we return 0.
// Example 2:

// Input: haystack = "leetcode", needle = "leeto"
// Output: -1
// Explanation: "leeto" did not occur in "leetcode", so we return -1.
 

// Constraints:

// 1 <= haystack.length, needle.length <= 104
// haystack and needle consist of only lowercase English characters.






/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if(needle === "") return 0;

    for(let i=0; i<= haystack.length-needle.length; i++){ //needle uzunluğuna göre bir döngü oluştururuz
        let substring = haystack.slice(i,i+needle.length); // haystackten needle uzunluğunda bir alt diizi

        if (substring === needle){ //alt dizi needle e eşitse i yi döndür.
           return i;
        }
       
    }
    return -1;
};

// function strStr(haystack, needle) {
//     return haystack.indexOf(needle);
// }
//indeOf diziyi kendi kontrol ettiği için ekstra bir işlem yapmadan kolayca  çözer .
//indexOf() metodu, JavaScript'te bir dizi veya dize içinde belirli bir öğenin veya alt dizenin (substring) ilk bulunduğu indeksin konumunu döndürür. Eğer belirtilen öğe veya alt dize bulunamazsa, -1 değerini döndürür.