// https://www.codewars.com/kata/55847fcd3e7dadc9f800005f

const checkInLeft = (a, b) => {
    if (a === null || b === null) {
        return !((a && !b) || (!a && b));
    }
    if (a.val !== b.val) {
        return false;
    }
    return checkInLeft(a.left, b.left);
};

const checkInRight = (a, b) => {
    if (a === null || b === null) {
        return !((a && !b) || (!a && b));
    }
    if (a.val !== b.val) {
        return false;
    }
    return checkInRight(a.right, b.right);
};

function compare(a, b) {
    if (a === null && b === null) {
        return true;
    }
    if (a === null || b === null) {
        return false;
    }
    if (a.val !== b.val) {
        return false;
    }

    return checkInLeft(a.left, b.left) && checkInRight(a.right, b.right);
}