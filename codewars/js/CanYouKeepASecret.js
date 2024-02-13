// https://www.codewars.com/kata/5351b35ebaeb67f9110012d2

const createSecretHolder = (secret) => {
  return {
    setSecret: (s) => secret = s,
    getSecret: () => secret
  }
};