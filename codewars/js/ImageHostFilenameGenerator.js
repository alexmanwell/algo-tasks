// https://www.codewars.com/kata/586a933fc66d187b6e00031a

const generateName = () => {
  let fileName = '      ';
  while (photoManager.nameExists(fileName)) {
    fileName = '';
    for (let i = 0; i < 6; i++) {
      const randomNumber = Math.floor(Math.random() * (90 - 65 + 1)) + 65;
      fileName += String.fromCharCode(randomNumber);
    }
  }

  return fileName;
};