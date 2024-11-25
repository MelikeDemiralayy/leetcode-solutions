// You have a set of integers s, which originally contains all the numbers from 1 to n. Unfortunately, due to some error, one of the numbers in s got duplicated to another number in the set, which results in repetition of one number and loss of another number.

// You are given an integer array nums representing the data status of this set after the error.

// Find the number that occurs twice and the number that is missing and return them in the form of an array.

 

// Example 1:

// Input: nums = [1,2,2,4]
// Output: [2,3]
// Example 2:

// Input: nums = [1,1]
// Output: [1,2]
 

// Constraints:

// 2 <= nums.length <= 104
// 1 <= nums[i] <= 104



/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    nums.sort((a,b) => a-b); // bu diziyi küçükten büyüğe doğru sıralamaya yarar
    let duplicate = -1;
    let missing = 1;

    for(let i=1 ; i<nums.length; i++){
        if (nums[i] === nums[i-1]){ // il önce tekrar eden sayıyı bulmak için
            duplicate = nums[i];
        } else if(nums[i] > nums[i-1] +1){ // eksik olan sayıyı bulmak için
            missing = nums [i-1]+1;
        }
    }


    if (nums[nums.length -1] !== nums.length){ // bu kısım eksik sayı bulunmaması durumunda en büyük sayının eksik olabileceğini bulmak için
        missing = nums.length;
    }


    return [duplicate, missing];
    
};

// en başta diziyi küçükten büyüğe doğru sıralıyoruz. negatif olma durumunu da göz önünde bulunduruyoruz.(nums.sort ((a,b) => a-b))
// tekrar eden sayıyı let duplicate de tuttuk, kayıp sayıyı let missing

// daha sonra tekrar eden sayıyı bulduk.(  if (nums[i] === nums[i-1]){duplicate = nums[i];})
// eksik sayı varsa da  else if(nums[i] > nums[i-1] +1){  missing = nums [i-1]+1; }

// eksik sayı bulunmaması durumunda ; if (nums[nums.length -1] !== nums.length){ missing = nums.length;}
// en sonda da duplicate ve missingi döndürürüz.