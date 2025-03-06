// Write an algorithm to determine if a number n is happy.

// A happy number is a number defined by the following process:

// Starting with any positive integer, replace the number by the sum of the squares of its digits.
// Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
// Those numbers for which this process ends in 1 are happy.
// Return true if n is a happy number, and false if not.

 

// Example 1:

// Input: n = 19
// Output: true
// Explanation:
// 12 + 92 = 82
// 82 + 22 = 68
// 62 + 82 = 100
// 12 + 02 + 02 = 1
// Example 2:

// Input: n = 2
// Output: false
 

// Constraints:

// 1 <= n <= 231 - 1



var isHappy = function(n) {
    let seen = new Set(); // Tekrar eden sayıları kontrol etmek için Set() kullanıyoruz.  
  
    while (n !== 1 && !seen.has(n)) { // Döngüyü ters yazım hatasını düzelterek düzenledik.
      seen.add(n); // Mevcut sayıyı görülen sayılar listesine ekler.
      n = sumOfSquares(n); // Sayının kareler toplamı için fonksiyon çağrılıyor.
    }
  
    return n === 1; // Sonuç 1 ise true döner, değilse false döner.
  };
  
  // Sayının basamaklarının karelerini toplama fonksiyonu
  var sumOfSquares = function(num) {
    let sum = 0;
    while (num > 0) {
      let digit = num % 10;
      sum += digit * digit;
      num = Math.floor(num / 10);
    }
    return sum;
  };
  
  