const romanToInt = (s) => {
  let startFrom = 0;
  let integerFormat = 0;
  let spreadRoman = [...s];

  const symbolObject = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  while (startFrom < spreadRoman.length) {
    if (
      spreadRoman.length > 1 &&
      symbolObject[spreadRoman[startFrom]] <
        symbolObject[spreadRoman[startFrom + 1]]
    ) {
      const arrayRoman = spreadRoman.slice(startFrom, startFrom + 2);
      integerFormat =
        integerFormat +
        (symbolObject[arrayRoman[1]] - symbolObject[arrayRoman[0]]);

      startFrom += 2;
    } else {
      const roman = spreadRoman[startFrom];
      integerFormat = integerFormat + symbolObject[roman];

      startFrom++;
    }
  }

  return integerFormat;
};

console.log(romanToInt("LVIII"));
