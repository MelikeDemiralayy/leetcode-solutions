// You are climbing a staircase. It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

 

// Example 1:

// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps
// Example 2:

// Input: n = 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step
 

// Constraints:

// 1 <= n <= 45



/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if (n<=2) return n; // yalnızca 1 veya 2basamak varsa çözüm direkt n olur.

    let first = 1;
    let second= 2;

    for (let i =3; i<=n; i++){
        let current = first + second ;
        first = second;
        second= current;

    }
 return second;
};

//notlar:
//    let current = first + second ;
//         first = second;
//         second= current;

//currentte first ve second toplamını tututarız.
// first = second ve second = current  adımlarında first ve seconndu güncelleriz.
//first artık second olur. kendinden önceki basamağın yollarını tutar.
// second ise current olur. bu da güncel n basamağının yollarını tutar.

// en son return second döner çünkü en güncel sonucu seconda atamıştık.