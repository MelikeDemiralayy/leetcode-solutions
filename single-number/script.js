// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// You must implement a solution with a linear runtime complexity and use only constant extra space.

 

// Example 1:

// Input: nums = [2,2,1]
// Output: 1
// Example 2:

// Input: nums = [4,1,2,1,2]
// Output: 4
// Example 3:

// Input: nums = [1]
// Output: 1
 

// Constraints:

// 1 <= nums.length <= 3 * 104
// -3 * 104 <= nums[i] <= 3 * 104
// Each element in the array appears twice except for one element which appears only once.



var singleNumber = function(nums) {
    let result = 0;

    for (let i = 0; i < nums.length; i++) {
        result ^= nums[i]; 
    }

    return result;
};


// neden XOR kullandık ?
// aynı sayı iki kez XOR'landığında sonuç 0 olur. o yüzden burada bu yöntrmi kullanmak çok basit ve uygu bir yöntem olur.
// ek olarak 0 ^ a = a olduğundan tüm sayıları sırasıyla XOR’layarak iki kez görünen sayılar birbirini yok eder ve geriye yalnızca tek başına kalan sayı kalır.

// OR İşlemi Nasıl Çalışır?
// XOR işlemi, iki bit arasındaki karşılaştırmaya göre şu kurala göre çalışır:

// Aynı bitler (0 ile 0 veya 1 ile 1) için sonuç 0 olur.
// Farklı bitler (0 ile 1 veya 1 ile 0) için sonuç 1 olur.


//cözüm-2;
function singleNumber(nums) {
    let set = new Set();
    for (let num of nums) {
        if (set.has(num)) {
            set.delete(num);
        } else {
            set.add(num);
        }
    }
    return [...set][0]; 
}
