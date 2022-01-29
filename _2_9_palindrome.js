const isPalindrome = (x) => {
  x = x + "";
  if (x.split("").reverse().join("") == x) {
    return true;
  } else {
    return false;
  }
};

console.log(isPalindrome(121));
