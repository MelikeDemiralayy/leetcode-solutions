// Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.

// You must not use any built-in exponent function or operator.

// For example, do not use pow(x, 0.5) in c++ or x ** 0.5 in python.
 

// Example 1:

// Input: x = 4
// Output: 2
// Explanation: The square root of 4 is 2, so we return 2.
// Example 2:

// Input: x = 8
// Output: 2
// Explanation: The square root of 8 is 2.82842..., and since we round it down to the nearest integer, 2 is returned.
 

// Constraints:

// 0 <= x <= 231 - 1


/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if (x<2) return x; //x 0 veya 1 se karekok direkt x olucak

    let left =1; //karekoke en yakın tam sayıyı ulmak için sol sınır
    let right = x; // sağ sınır x olarak başlar
    let result =0; 

    while(left<= right){
        let mid = Math.floor((left + right) / 2);

        if(mid*mid === x){
            return mid;
        } else if(mid* mid < x){
            left = mid+1;
          result = mid;;
        }else{
            right = mid-1;
        }
    }
    return result;
    
};
// left=1 , right = x olmasının nedernini  arama aralığını 1 ve x ten başlatmak. right büyük değ. left küçük değ. tutar
// orta değeri bulmaktaki amaç ;ikili arama yaptığımız için veriyi daha hızlı şekilde bulmaya yarar. sayıyı her aralığında yarıya indirerek hızlıca sonuç elde edebiliriz.

// karekoke en yakın değeri bulmak içinmi değerinin karesini x ile karşılaştırırz.
//mid * mid == x se mid tam karekök olur ve midi döndürürüz.
// left = mid + 1 ile sol sınırı mid + 1 olacak şekilde güncelleriz. bu daaha yüksek tahminlere geçmmeizi sağlar
//result'ı mid olarak güncelleriz. Çünkü mid o ana kadar bulduğumuz x’e en yakın tamsayı karekök değeridir.
//Eğer mid * mid > x ise, mid’in karesi x’ten büyük demektir. Bu durumda right = mid - 1 ile sağ sınırı mid - 1 yaparak daha düşük tahminlere bakarız.