const twoSum = (nums, target) => {
  for (let firstPostion = 0; firstPostion < nums.length; firstPostion++) {
    for (
      let secondPostion = firstPostion + 1;
      secondPostion < nums.length;
      secondPostion++
    ) {
      if (nums[firstPostion] + nums[secondPostion] == target) {
        return [firstPostion, secondPostion];
      }
    }
  }
};

twoSum([2, 7, 11, 15], 9);
