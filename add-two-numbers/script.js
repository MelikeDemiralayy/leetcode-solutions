// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

 

// Example 1:


// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.
// Example 2:

// Input: l1 = [0], l2 = [0]
// Output: [0]
// Example 3:

// Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// Output: [8,9,9,9,0,0,0,1]
 

// Constraints:

// The number of nodes in each linked list is in the range [1, 100].
// 0 <= Node.val <= 9
// It is guaranteed that the list represents a number that does not have leading zeros.




/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let dummyHead = new ListNode(0); // sonuç listesine düğüm ekleyebilmek için oluştururuz.
    let current = dummyHead; // sonuç listesinin şu anki düğümü
    let carry = 0; // eldeli değer oldğunda her toplamda bir sonraki basamağa taşınacak değeri tutar

    while (l1 !== null || l2 !== null) {
        let val1 = (l1 !== null) ? l1.val : 0;
        let val2 = (l2 !== null) ? l2.val : 0; // l1 ve l2 nin uzunluğu boyunca döner ve null olduğu zaman durur.
        let sum = val1 + val2 + carry; // val1+val2+ artı elde kalan (carry değerini toplarız)

        carry = Math.floor(sum / 10); // carry değerini alırken büyük bas alırız örneğn toplam 12 ise 1 i alırız
        current.next = new ListNode(sum % 10); // eldeli olunca birler basamağı alınır.
        
        current = current.next; // current bir sonraki düğüme taşınır 

        if (l1 !== null) l1 = l1.next;
        if (l2 !== null) l2 = l2.next; // l1 ve l2 bir sonraki düğümle işlem yapabilmek için ilerletriz.
    }

    if (carry > 0) {
        current.next = new ListNode(carry); // döngü sonunda son bir kontrol yaparız. taşma olan değer olup olmadığına
                                            // dair. Eğer varsa yeni bir basamak eklenir.
    }

    return dummyHead.next; // sahte düğümü atlayarak sonucu döndürürüz
};
