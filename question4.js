function findMaxLength(nums) {
    const map = new Map();
    map.set(0, -1); // Initialize the map with an initial sum of 0 at index -1
    let maxLength = 0;
    let count = 0;
  
    for (let i = 0; i < nums.length; i++) {
      count += nums[i] === 0 ? -1 : 1;
  
      if (map.has(count)) {
        maxLength = Math.max(maxLength, i - map.get(count));
      } else {
        map.set(count, i);
      }
    }
  
    return maxLength;
  }
  
  // Example usage:
  const nums = [0, 1];
  console.log(findMaxLength(nums));
  