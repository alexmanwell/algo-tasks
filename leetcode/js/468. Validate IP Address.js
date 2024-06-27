// https://leetcode.com/problems/validate-ip-address

const isIPv4 = (partials) => {
  for (const partial of partials) {
    if (Number(partial[0]) === 0) {
      if (partial.split("").length > 1) {
        return "Neither";
      }
    }
    const number = +partial.split("").map(Number).join("");
    if (Number.isNaN(number) || number > 255) {
      return "Neither";
    }
  }
  return "IPv4"
};

const isIPv6 = (partials) => {
  for (const partial of partials) {
    if (partial.length > 4) {
      return "Neither";
    }
    for (const c of partial) {
      if (!(new RegExp(/[0-9a-fA-F]/)).test(c)) {
        return "Neither";
      }
    }
  }

  return "IPv6";
};

/**
 * @param {string} queryIP
 * @return {string}
 */
const validIPAddress = (queryIP) => {
  const partials = queryIP.split(new RegExp(/[.:]/gi));
  if (partials.length !== partials.filter(p => p).length) {
    return "Neither";
  }
  
  return (
    partials.length === 4
      ? isIPv4(partials)
      : partials.length === 8
        ? isIPv6(partials)
        : "Neither"
  );
};