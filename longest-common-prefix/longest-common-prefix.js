// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

 

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
 

// Constraints:

// 1 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] consists of only lowercase English letters.


/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    
    if (strs.length === 0) return "";

    // En kısa stringi bulalım reduce yöntemi ile
    let shortestStr = strs.reduce((a, b) => a.length <= b.length ? a : b);

    for (let i = 0; i < shortestStr.length; i++) {
        for (let str of strs) {
            if (str[i] !== shortestStr[i]) {
                return shortestStr.slice(0, i);// eşleşme olana kadar kontrol 
            }
        }
    }
    return shortestStr;
};

// reduce yöntemi nedir?
// dizideki belirli bir işlevi sırayla uygulayarak tek bir değere indirgeme işlemi.toplama çıkarma büyük küçük öğeyi bulma işlemlerini gerçekleştirir.
//array.reduce(callback, initialValue);
//