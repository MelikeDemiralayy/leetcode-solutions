// You are given two 0-indexed integer arrays player1 and player2, representing the number of pins that player 1 and player 2 hit in a bowling game, respectively.

// The bowling game consists of n turns, and the number of pins in each turn is exactly 10.

// Assume a player hits xi pins in the ith turn. The value of the ith turn for the player is:

// 2xi if the player hits 10 pins in either (i - 1)th or (i - 2)th turn.
// Otherwise, it is xi.
// The score of the player is the sum of the values of their n turns.

// Return

// 1 if the score of player 1 is more than the score of player 2,
// 2 if the score of player 2 is more than the score of player 1, and
// 0 in case of a draw.
 

// Example 1:

// Input: player1 = [5,10,3,2], player2 = [6,5,7,3]

// Output: 1

// Explanation:

// The score of player 1 is 5 + 10 + 2*3 + 2*2 = 25.

// The score of player 2 is 6 + 5 + 7 + 3 = 21.

// Example 2:

// Input: player1 = [3,5,7,6], player2 = [8,10,10,2]

// Output: 2

// Explanation:

// The score of player 1 is 3 + 5 + 7 + 6 = 21.

// The score of player 2 is 8 + 10 + 2*10 + 2*2 = 42.

// Example 3:

// Input: player1 = [2,3], player2 = [4,1]

// Output: 0

// Explanation:

// The score of player1 is 2 + 3 = 5.

// The score of player2 is 4 + 1 = 5.

// Example 4:

// Input: player1 = [1,1,1,10,10,10,10], player2 = [10,10,10,10,1,1,1]

// Output: 2

// Explanation:

// The score of player1 is 1 + 1 + 1 + 10 + 2*10 + 2*10 + 2*10 = 73.

// The score of player2 is 10 + 2*10 + 2*10 + 2*10 + 2*1 + 2*1 + 1 = 75.

 

// Constraints:

// n == player1.length == player2.length
// 1 <= n <= 1000
// 0 <= player1[i], player2[i] <= 10



/**
 * @param {number[]} player1
 * @param {number[]} player2
 * @return {number}
 */
var isWinner = function(player1, player2) {
    // her iki oyuncunun da puanını hesaplamaya yarayan fonksiyon 
    const calculateScore = (player) => {
        let totalScore = 0;
        let n = player.length;

        for (let i = 0; i < n; i++) {
            // son 2 turda 10 puan devrilmişse puan*2
            if ((i > 0 && player[i - 1] === 10) || (i > 1 && player[i - 2] === 10)) {
                totalScore += 2 * player[i];
            } else {
                // eğer 10 puan devrilmediyse puanı normal hali ile ekle
                totalScore += player[i];
            }
        }

        return totalScore; 
    };

    // her 2 oyuncunun da puanlarınn hesaplanması 
    const score1 = calculateScore(player1);
    const score2 = calculateScore(player2);

    // puanları karşılaştır ve sonucu belirle
    if (score1 > score2) {
        return 1; 
    } else if (score2 > score1) {
        return 2;
    } else {
        return 0; // beraberlik durumu
    }
};
