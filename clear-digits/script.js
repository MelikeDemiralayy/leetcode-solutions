// You are given a string s.

// Your task is to remove all digits by doing this operation repeatedly:

// Delete the first digit and the closest non-digit character to its left.
// Return the resulting string after removing all digits.

 

// Example 1:

// Input: s = "abc"

// Output: "abc"

// Explanation:

// There is no digit in the string.

// Example 2:

// Input: s = "cb34"

// Output: ""

// Explanation:

// First, we apply the operation on s[2], and s becomes "c4".

// Then we apply the operation on s[1], and s becomes "".

 

// Constraints:

// 1 <= s.length <= 100
// s consists only of lowercase English letters and digits.
// The input is generated such that it is possible to delete all digits.


/**
 * @param {string} s
 * @return {string}
 */
var clearDigits = function(s) {
    let arr = s.split(''); // elemanlarda silme işlemini daha klay yapabilmek içim stringi bir array e
                           // çeviriyoruz.
  
    for ( let i =0; i< arr.length; i++){
       if (!isNaN(arr[i]) && arr[i] !== ' ') { // rakam var mı yok  mu kontrolu yapıyoruz.Eğer rakam varsa;
          arr.splice(i,1); // rakamı siliyoruz
          arr.splice(i-1,1); // rakama en yakın soluncaki elemanı da siliyoruz
          i -= 2;
    }
  };
  return arr.join(''); // diziyi tekrar stringe çeviriyoruz ve de sonucu döndürüyoruz.
  };
  
  
  // başka bir cözüm yöntemi
  function removeDigits(s) {
      let stack = [];
  
      for (let char of s) {
          if (!isNaN(char) && char !== ' ') { // Eğer rakam ise
              if (stack.length > 0) stack.pop(); // Yığından en son harfi çıkar
          } else {
              stack.push(char); // Harfleri yığına ekle
          }
      }
  
      return stack.join(''); // Yığındaki kalan harfleri string olarak döndür
  }
  
