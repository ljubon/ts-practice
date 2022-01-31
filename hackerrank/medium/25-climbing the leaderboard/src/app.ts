function climbingLeaderboard(ranked: number[], player: number[]): number[] {

    if (ranked.length < 1 || ranked.length > (2 * Math.pow(10, 5))) {
        return [];
    }
    if (player.length < 1 || player.length > (2 * Math.pow(10, 5))) {
        return [];
    }

    let scores = Array.from(new Set(ranked));
    const player_ranks = [];
    for (const score of player) {
        while (scores && score >= scores[scores.length - 1]) {
            scores.pop();
        }
        player_ranks.push(scores.length + 1);
    }

    return player_ranks;
}

let ranked1 = [100, 90, 90, 80];
let player1 = [70, 80, 105];
console.log(climbingLeaderboard(ranked1, player1));

let ranked2 = [1];
let player2 = [1, 1];
console.log(climbingLeaderboard(ranked2, player2));