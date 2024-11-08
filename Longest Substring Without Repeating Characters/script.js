// Given a string s, find the length of the longest 
// substring
//  without repeating characters.

 

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 

// Constraints:

// 0 <= s.length <= 5 * 104
// s consists of English letters, digits, symbols and spaces.




/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {

    let charSet = new Set();
    let maxLength =0;
    let left = 0;

    for(let right = 0; right< s.length; right++){ //right her artırıldığında, yeni bir karakterin alt dizgimize dahil 
        while (charSet.has(s[right])){            //edilip edilemeyeceğini veya Sette zaten olup olmadığını kontrol eder 
            charSet.delete(s[left]);
            left ++;

        }
        charSet.add(s[right]);
        maxLength = Math.max(maxLength, right-left+1);
    }
    return maxLength;
};

//tekrarsız karakterleri takip etmek için charset. Set bir karakterin dizgi içinde tekrar edip etmediğini
// hızlı şekilde öğrenmeye olanak tanır.

// left ve right dizgiyi sağdan soldan gezmeye yarar. Bunu yapmamızın nedeni tekrarlı karakterleri göz önünde bulundurmak 
// ve alt dizgiyi güncellemek için 

//left alt dizginin başlangıcını temsil eden index. en başta 0 olarak başlar ve tekrarlı karakter bulduğunda sağa doğru kayar

//while (charSet.has(s[right])){        // whilw döngüsü: ekrar Eden Karakter Varsa: charSet’te s[right] karakteri varsa, 
//charSet.delete(s[left]);              //left indeksindeki karakteri charSet’ten kaldırır ve left'i bir artırırız.
// left ++;                             //Bu işlem karakterin tekrarsız olmasını sağlamak için left indeksini sağa kaydırr
       
            