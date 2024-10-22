// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

// Return the head of the merged linked list.

 

// Example 1:


// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]
// Example 2:

// Input: list1 = [], list2 = []
// Output: []
// Example 3:

// Input: list1 = [], list2 = [0]
// Output: [0]
 

// Constraints:

// The number of nodes in both lists is in the range [0, 50].
// -100 <= Node.val <= 100
// Both list1 and list2 are sorted in non-decreasing order.



/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
function mergeTwoLists(list1, list2) {
    // Boş durumları kontrol et
    if (!list1) return list2;
    if (!list2) return list1;
    
    // İlk düğümleri karşılaştır ve en küçük olanı seç
    if (list1.val < list2.val) {
        list1.next = mergeTwoLists(list1.next, list2); 
        return list1;
    } else {
        list2.next = mergeTwoLists(list1, list2.next); 
        return list2
    }
}

// ilk adımda list1.val ve list2.val karşılaştırılır (1 ve 1). Eşit oldukları için, list2nin ilk düğümü (1) seçilir ve list2.next ile list1 birleştirilir.  
// list2.next = mergeTwoLists([1, 2, 4], [3, 4])

// Şimdi list1 = [1, 2, 4] ve list2 = [3, 4]:
// list1.val daha küçük olduğu için (1 < 3), list1in ilk düğümü (1) seçilir ve list1.next ile list2 birleştirilir.
// list1.next = mergeTwoLists([2, 4], [3, 4])

// list1 = [2, 4] ve list2 = [3, 4]:
// list1.val yine daha küçük olduğu için (2 < 3), list1in düğümü (2) seçilir ve list1.next ile list2 birleştirilir.
// list1.next = mergeTwoLists([4], [3, 4])

// list1 = [4] ve list2 = [3, 4]:
// Şimdi list2.val daha küçük (3 < 4), bu yüzden list2nin düğümü (3) seçilir ve list2.next ile list1 birleştirilir.
// list2.next = mergeTwoLists([4], [4])

// list1 = [4] ve list2 = [4]:
// Her iki düğüm eşit olduğu için list2nin düğümü seçilir ve list2.next ile list1 birleştirilir.
// list2.next = mergeTwoLists([4], [])

// Son adımda list2 boş olduğunda, list1in geri kalanı döndürülür.