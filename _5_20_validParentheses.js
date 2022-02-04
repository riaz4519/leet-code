const isValid = (s) => {
  let temp = [];

  for (let i = 0; i < s.length; i++) {
    const currentBracket = s[i];
    switch (currentBracket) {
      case "(":
        temp.push("(");
        break;
      case "[":
        temp.push("[");
        break;
      case "{":
        temp.push("{");
        break;
      case ")":
        if (temp.pop() !== "(") {
          return false;
        }
        break;
      case "]":
        if (temp.pop() !== "[") {
          return false;
        }
        break;
      case "}":
        if (temp.pop() !== "{") {
          return false;
        }
        break;
      default:
        return false;
    }


  }

  return temp.length === 0;
};

console.log(isValid("(]"));
