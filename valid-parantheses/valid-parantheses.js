// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.
 

// Example 1:

// Input: s = "()"

// Output: true

// Example 2:

// Input: s = "()[]{}"

// Output: true

// Example 3:

// Input: s = "(]"

// Output: false

// Example 4:

// Input: s = "([])"

// Output: true

 

// Constraints:

// 1 <= s.length <= 104
// s consists of parentheses only '()[]{}'.




/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const map = {
        '(': ')',
        '{': '}',
        '[': ']'
    };

    const stack = []; // Yığın tanımlandı

    for (let char of s) {
        if (char in map) {
            // Açılış parantezi ise, yığından eşleşme kontrol edilir.
            stack.push(map[char]); // Kapanış parantezini yığına ekliyoruz
        } else {
            // Kapanış parantezi ise yığından eşleşme kontrol edilir
            let topElement = stack.length ? stack.pop() : ''; // Yığın boşsa ''
            if (char !== topElement) {
                return false;
            }
        }
    }

    // Yığının tamamen boş olması, ifadenin geçerli olduğunu gösterir
    return stack.length === 0; // length doğru yazıldı
};