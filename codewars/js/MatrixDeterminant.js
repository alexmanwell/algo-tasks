// https://www.codewars.com/kata/52a382ee44408cea2500074c

const minorMatrix = (arr, index) => {
    let minor = [];
    for (let row = 1; row < arr.length; row++) {
        let line = [];
        for (let col = 0; col < arr.length; col++) {
            if (col !== index) {
                line.push(arr[row][col]);
            }
        }
        minor.push(line);
    }
    return minor;
};

const determinant = (m) => {
    if (m.length === 0) {
        return 0;
    }
    if (m.length === 1) {
        return m[0][0];
    }
    if (m.length === 2) {
        return m[0][0] * m[1][1] - m[0][1] * m[1][0];
    }

    return m.reduce((total, el, index) => {
        return total + (index % 2 === 0 ? 1 : -1) * m[0][index] * determinant(minorMatrix(m, index));
    }, 0);
};