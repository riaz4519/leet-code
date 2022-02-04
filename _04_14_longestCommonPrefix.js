const longestCommonPrefix = (strs) => {
  //sort
  strs.sort((a, b) => a.length - b.length);
  //pull the first one out
  const firstElement = strs.shift();
  let indexToCheck;
  //traverse first one and match the charater with others
  for( indexToCheck = 0; indexToCheck < firstElement.length;indexToCheck++){

    const characterToCheck = firstElement[indexToCheck];

    let breakLoop = false;

    for(let stringToCheck = 0;stringToCheck < strs.length;stringToCheck++){

        if(characterToCheck !== strs[stringToCheck][indexToCheck]){
            breakLoop = true;
        }

    }

    if(breakLoop) break;


  }

  return firstElement.slice(0, indexToCheck) ? firstElement.slice(0, indexToCheck) : "";
  

};

console.log(longestCommonPrefix(["dog","racecar","car"]));
