// https://www.codewars.com/kata/546f922b54af40e1e90001da

const alphabetPosition = (text) => {
    const positions = [];
    for (let i = 0; i < text.length; i++) {
        const c = text.charAt(i).toLowerCase();
        if ((/[a-z]/).test(c)) {
            positions.push(c.charCodeAt(0) - 96);
        }
    }
    return positions.join(" ");
};