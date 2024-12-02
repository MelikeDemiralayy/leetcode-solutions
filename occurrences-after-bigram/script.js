// Given two strings first and second, consider occurrences in some text of the form "first second third", where second comes immediately after first, and third comes immediately after second.

// Return an array of all the words third for each occurrence of "first second third".

 

// Example 1:

// Input: text = "alice is a good girl she is a good student", first = "a", second = "good"
// Output: ["girl","student"]
// Example 2:

// Input: text = "we will we will rock you", first = "we", second = "will"
// Output: ["we","rock"]
 

// Constraints:

// 1 <= text.length <= 1000
// text consists of lowercase English letters and spaces.
// All the words in text are separated by a single space.
// 1 <= first.length, second.length <= 10
// first and second consist of lowercase English letters.
// text will not have any leading or trailing spaces.









/**
 * @param {string} text
 * @param {string} first
 * @param {string} second
 * @return {string[]}
 */
var findOcurrences = function(text, first, second) {
    let words = text.split(" "); // her kelimeyi karaktere göre bölmek için -split methdodu-
    console.log(words);

    let  result = []; // listeleyeceğimiz kelimeleri tutacağımız array
    for (let i = 0; i<words.length-2; i++){ // 3 kelime oluşltururken hata almamak adına dongude words.lenght-2 yapıyoruz
         if (words[i] === first && words[i + 1] === second){ // i ve i+1 indekslerindeki kelimeler first ve soconsd ile eşeleşiyor mıu kontrolu
            result.push (words[i+2]); // i+2 3. kelimeyi temsil eder. ve diziye bunu ekler

        }
    } console.log(result);
    return result ; // dögü tamamlandığında sonucu döndürür.
    
};