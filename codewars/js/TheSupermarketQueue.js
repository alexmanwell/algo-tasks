// https://www.codewars.com/kata/57b06f90e298a7b53d000a86/train/javascript

const queueTime = (customers, n) => {
  if (n <= 0) {
    throw new Error("Number of tills should be a positive integer.");
  }

  if (customers.length === 0) {
    return 0;
  }

  const tills = new Array(n).fill(0);
  let totalTime = 0;

  for (const customerTime of customers) {
    const minTimeTill = Math.min(...tills);
    totalTime = Math.max(totalTime, minTimeTill) + customerTime;
    const index = tills.indexOf(minTimeTill);
    tills[index] += customerTime;
  }

  return Math.max(...tills);
};