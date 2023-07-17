// https://www.codewars.com/kata/567c26df18e9b1083a000049

const lastManStanding = (n) => {
    let arr = [];
    for (let i = 0; i < n; i++) {
        arr.push(i + 1);
    }

    while (arr.length > 1) {
        let temp = [];
        for (let i = 1; i < arr.length; i += 2) {
            temp.push(arr[i]);
        }
        arr = temp.reverse();
    }

    return arr[0];
};