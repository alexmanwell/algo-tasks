// https://www.codewars.com/kata/55ec55323c89fc5fbd000019

const AMOUNT_LATIN_LETTER = 26;
const CHAR_CODE_UPPERCASE_LETTER_A = 65;
const CHAR_CODE_UPPERCASE_LETTER_Z = 90;
const CHAR_CODE_LOWERCASE_LETTER_A = 97;
const CHAR_CODE_LOWERCASE_LETTER_Z = 122;

function encryptor (key, message) {
    if (message.length === 0) {
        return "";
    }
    if (key === 0) {
        return message;
    }

    let encrypted = [];
    for (let i = 0; i < message.length; i++) {
        let symbol = message[i];
        if (symbol === " ") {
            encrypted.push(symbol);
        } else if ((/[A-Z]/).test(symbol)) {
            const charCode = validateUpperCase(message.charCodeAt(i) + key % AMOUNT_LATIN_LETTER);
            encrypted.push(String.fromCharCode(charCode));
        } else if ((/[a-z]/).test(symbol)) {
            const charCode = validateLowerCase(message.charCodeAt(i) + key % AMOUNT_LATIN_LETTER);
            encrypted.push(String.fromCharCode(charCode));
        } else {
            encrypted.push(symbol);
        }
    }

    return encrypted.join("");
}

const validateUpperCase = (charCode) => {
    if (charCode < CHAR_CODE_UPPERCASE_LETTER_A) {
        return charCode + AMOUNT_LATIN_LETTER;
    }
    if (charCode > CHAR_CODE_UPPERCASE_LETTER_Z) {
        return charCode - AMOUNT_LATIN_LETTER;
    }

    return charCode;
};

const validateLowerCase = (charCode) => {
    if (charCode < CHAR_CODE_LOWERCASE_LETTER_A) {
        return charCode + AMOUNT_LATIN_LETTER;
    }
    if (charCode > CHAR_CODE_LOWERCASE_LETTER_Z) {
        return charCode - AMOUNT_LATIN_LETTER;
    }

    return charCode;
};