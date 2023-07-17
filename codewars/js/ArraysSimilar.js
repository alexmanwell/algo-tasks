// https://www.codewars.com/kata/51e704f2d8dbace389000279

function arraysSimilar(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }

    const _arr1 = arr1.sort();
    const _arr2 = arr2.sort();
    for (let i = 0; i < _arr1.length; i++) {
        if (_arr1[i] !== _arr2[i]) {
            return false;
        }
    }

    return true;
}