// https://www.codewars.com/kata/5898761a9c700939ee000011

function cornerCircle(r) {
    const smallRadius = (Math.sqrt(2) - 1) / (Math.sqrt(2) + 1) * r;
    return Math.round(smallRadius * 100) / 100;
}