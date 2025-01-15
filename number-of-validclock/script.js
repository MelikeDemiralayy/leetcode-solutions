// You are given a string of length 5 called time, representing the current time on a digital clock in the format "hh:mm". The earliest possible time is "00:00" and the latest possible time is "23:59".

// In the string time, the digits represented by the ? symbol are unknown, and must be replaced with a digit from 0 to 9.

// Return an integer answer, the number of valid clock times that can be created by replacing every ? with a digit from 0 to 9.

 

// Example 1:

// Input: time = "?5:00"
// Output: 2
// Explanation: We can replace the ? with either a 0 or 1, producing "05:00" or "15:00". Note that we cannot replace it with a 2, since the time "25:00" is invalid. In total, we have two choices.
// Example 2:

// Input: time = "0?:0?"
// Output: 100
// Explanation: Each ? can be replaced by any digit from 0 to 9, so we have 100 total choices.
// Example 3:

// Input: time = "??:??"
// Output: 1440
// Explanation: There are 24 possible choices for the hours, and 60 possible choices for the minutes. In total, we have 24 * 60 = 1440 choices.
 

// Constraints:

// time is a valid string of length 5 in the format "hh:mm".
// "00" <= hh <= "23"
// "00" <= mm <= "59"
// Some of the digits might be replaced with '?' and need to be replaced with digits from 0 to 9.



/**
 * @param {string} time
 * @return {number}
 */
var countTime = function(time) {
    let [hh , mm] = time.split(":");

    //saat kısmı için olası kombinasyonlar:
    let hourComb = 0;
    if(hh[0] === '?'){
        hourComb = 24;  // 00 -23 arasında 24 kombinasyon yapılabilir olmasından dolayı
    }else if(hh[0] === '?'){
        hourComb = hh[1] <='3' ? 3:2; //ilk karakter 2 ye kadar olabilir
    }else if(hh[1] === '?'){
        hourComb= hh[0] ==='2' ? 4:10; // 20 - 24  arası 4 tane kombinasyon var, eğer ilk karakter 0-1 ise 0-9 arası 10 kombinasyon var
    }else{
        hourComb = 1; // hiç ? yoksa sadece 1 kombinasyon
    }

    let minuteComb = 0;
    if(mm[0] === '?'){
        minuteComb =60; // tüm dakikalar mümkün
    }else if(mm[0] === '?'){
        minuteComb =6 ; // ilk karakter 0-5 arasıda olucağı için 6 kombinasyon
    }else if (mm[1] === '?') {
        minuteComb = 10; // İkinci karakter 0-9 arasında
    } else {
        minuteComb = 1; // Hiç ? yoksa, sadece 1 kombinasyon
    }
  return hourComb*minuteComb;
    
};