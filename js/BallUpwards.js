// https://www.codewars.com/kata/566be96bb3174e155300001b

function maxBall(v0) {
    const v = v0 * 1000 * 10 / 3600;

    return Math.round(v / 9.81);
}