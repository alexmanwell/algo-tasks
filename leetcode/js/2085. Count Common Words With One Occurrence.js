// https://leetcode.com/problems/count-common-words-with-one-occurrence/description/

const countWordsMap = (words) => {
  const map = new Map();
  for (let word of words) {
    const value = map.has(word) ? map.get(word) : 0;
    map.set(word, value + 1);
  }

  return map;
};

/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {number}
 */
const countWords = (words1, words2) => {
  const map1 = countWordsMap(words1);
  const map2 = countWordsMap(words2);

  let result = 0;
  const maxLengthMap = map1.size > map2.size ? map1 : map2;
  for (let key of maxLengthMap.keys()) {
    if (map2.get(key) === map1.get(key)) {
      result++;
    }
  }

  return result;
};

console.log(countWords(
  ["leetcode", "is", "amazing", "as", "is"],
  ["amazing", "leetcode", "is"])
);
console.log(countWords(
  ["a", "ab"],
  ["a", "a", "a", "ab"])
);
console.log(countWords(
  ["bjxzvssdoq", "oom", "lxrrvf", "aoeselhvrnw", "awnornqyztqlza", "bjxqkapuvaw", "wibxruerngdzgjd", "rezrwdzvllpbjpnikhzraz", "pswmnrsepudx", "nlicjldpeia", "glg", "nllxfcjjitmsuugmr", "cl", "pysmpgjakkjnusfopphb", "zxlwcdjpn", "xktsfnchwrdesnf", "qptnoxxgrjmvr", "exlfwjfsbsirbbkyqjtinrrwuhh", "rqbnghajxygilgdjejopyuwyjqrx", "vrjkqsicuqoalqyaxkaaogxbf", "ixnlltqbpygmpjuspom", "izajsxotcbhzdnkujwgdzo", "b", "lighabre", "i", "ljqqbfddipvcooh", "hboedpepeeunx", "bkhzhiefammwqkhvampokd", "ptlozguwmyyp", "loeshsjgazzwvs", "kyrltbdzlymjxtvwiiq", "fk", "mbjpgwsahkgkehlcoqbhunqchxj", "nfyuvlrmiturheb", "cyqwsiysmoirurj", "sciqruywy", "podsrhmsozan", "nlyadkrxhdbup", "gdugldwghzt", "wpjm", "gjobdekmjisjgadkwwemnmco", "dkjdtimdghvlhuetxyaklk", "iwqylhdwqbwaqdouowoodhs", "mn"],
  ["eeormvovhzslwsqgzthlgntgzc", "zfwownznh", "suxrkdbjdjjtbkjucsbyk", "u", "y", "lbjooktoctgwbbptiffytquha", "dcsxrghgpultkatbecjadbespvww", "vwduylshcpaiu", "rtcxwctvquaiuwkgvdx", "a", "szearxmdqcismljmihbtkcirztdnrc", "htgmuxtxdunsvfizb", "hybe", "nsegkgwcvopncmfpaahhhjeuqjosv", "jtarnnpppxtzmopixeijqqahkd", "hazcgrrnpourkyoeanodejiptne", "kurhokvhixihe", "ljwycewmecfqdhtxiokjn", "qgjzzvpyvwetlsvcsw", "aunns", "nwcnfrzzvxafkfjfnczummtubikji", "nipiygnvlfntgpxfedj", "mgnt", "xvjehufvaqouhztnmts", "sjtbrfjwtqxakqktxjaljrbwfoxvz", "dfeujeikfrtrpiafrgxvjlkpxtog", "u", "ggbcxoasodaqaazulrxjleecexey", "inedrgssajhpygfvozigohis", "pevxwgfzxebybfe", "cgy", "fnhvlx", "vxfybaebkoq", "xvhx", "mxbqjtanctljewwjjlbpkgbtsm", "mlwagamcikbcpuexhikmizp", "qeiomipvsoqlsnhylulirrcwtqga", "bwemqcgyusuauwlpbjjru", "iimcbidtndh", "lpjejlkmxtlbyvnscy", "dlspriicnyykdsyvswlgktavwloq", "dib", "qoptbduulgqwquvhdvmwdz", "xrtxghrbfrhpzduxeljnctgg", "schmbsaupayqnpchn", "kah", "itotymryqufqpozrwmvsl", "gurb", "xsyocxcmwvqmnmxthfemmu", "pkfdutm", "hkbwxwjxyuld", "ukdqszfjckdunnhpevw", "kqfwytdvnvjrchiwprcqkfntqticsc", "zjmsfwjddgjiypsmagdrujb", "gn", "ebncbjvhpbjecbrizdpv", "nbfehcktwswih", "sttmqcdmobdgtgkyxydyovahknjbsn", "sryyufrtocf", "eiicpwknxrzqylqpybhfd", "pey", "njimttradeoa", "wcogjdfr", "prva", "tyxdmxgw", "wluzocppg", "kzm", "wbyyperlkflaoxyxftzwxvmemof", "snzpclbulddnmmjmpdurcybo", "mowxgpmzojtmympmt", "uvtnojjahrovzmlukf", "sykhtgejlmbzshhneoyqr", "ib", "haqkkizidifykwijm", "csjtexnr", "yvgr", "vzcxbtlthrynnawxnkxdptp", "yvxrmscsckv"])
);


