// https://www.codewars.com/kata/52449b062fb80683ec000024

const generateHashtag = (str) => {
    if (isEmpty(str) || isValidSize(str)) {
        return false;
    }

    let list = str.split(' ');
    let result = '';
    for (key of list) {
        result += toUpperCaseFirstChar(key);
    }
    return '#' + result;
};

const isEmpty = (str) => {
    str = str.replace(/ /g, "");
    return str.length === 0;
};

const isValidSize = (str) => {
    str = str.replace(/ +/g," ");
    console.log(str);
    return str.length >= 140;
};

const toUpperCaseFirstChar = (str) => {
    return str.substring(0, 1).toUpperCase() + str.substring(1, str.length);
};