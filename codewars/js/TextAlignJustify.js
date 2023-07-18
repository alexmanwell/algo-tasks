// https://www.codewars.com/kata/537e18b6147aa838f600001b

const separate = (words, width) => {
    let lines = [];
    let line = [];
    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        let length = line.join("").length;
        if (length + word.length + 1 < width) {
            line.push(word + " ");
        } else if ((length + word.length + 1 === width) || (length + word.length === width))  {
            line.push(word.trim());
            lines.push(line);
            line = [];
        } else if ((length + word.length + 1 > width) || length + word.length > width) {
            const lastWord = line.pop();
            line.push(lastWord.trim());
            lines.push(line);
            line = [word + " "];
        }
        if (i === words.length - 1 && line.length !== 0) {
            const lastWord = line.pop();
            line.push(lastWord.trim());
            lines.push(line);
        }
    }

    return lines;
};

const justifyText = (list, width) => {
    let text = "";
    for (let row = 0; row < list.length - 1; row++) {
        const words = list[row];
        let length = words.join("").length;
        while (words.length !== 1 && length < width) {
            for (let i = 0; i < words.length - 1; i++) {
                words[i] = words[i] + " ";
                length = words.join("").length;
                if (length === width) {
                    break;
                }
            }
        }
        text += words.join("") + "\n";
    }
    text += list[list.length - 1].join("");

    return text;
};

function justify(text, width) {
    const words = text.split(" ");
    if (words.length === 1 || words.length === 0) {
        return text;
    }

    return justifyText(separate(words, width), width);
}