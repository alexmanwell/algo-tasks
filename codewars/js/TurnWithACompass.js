// https://www.codewars.com/kata/61a8c3a9e5a7b9004a48ccc2

const directions = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
const DEGREE_MULTIPLIER = 45;

const direction = (facing, turn) => {
    let position = parseInt(directions.indexOf(facing) + turn / DEGREE_MULTIPLIER);
    let length = directions.length;
    position = (position < 0) ? position % length + length : position;
    return directions[position % length];
};