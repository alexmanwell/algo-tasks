// https://www.codewars.com/kata/525f47c79f2f25a4db000025/train/javascript

const validPhoneNumber = (phoneNumber) => {
  let format = "(xxx) xxx-xxxx";
  const digits = phoneNumber.split("").filter(item => parseInt(item) >= 0);
  for (let i = 0; i < digits.length; i++) {
    format = format.replace("x", digits[i]);
  }

  return format === phoneNumber;
};