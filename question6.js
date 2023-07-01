function findOriginalArray(changed) {
    if (changed.length % 2 !== 0) {
      return []; // Invalid input: changed should have an even length
    }
  
    const original = [];
    const countMap = new Map();
  
    // Count the frequency of each element in changed
    for (const num of changed) {
      countMap.set(num, (countMap.get(num) || 0) + 1);
    }
  
    // Iterate through changed and retrieve the original elements
    for (const num of changed) {
      if (countMap.get(num) === 0) {
        continue; // Skip if the current element is already used
      }
  
      const halfNum = num / 2;
  
      if (!countMap.has(halfNum) || countMap.get(halfNum) === 0) {
        return []; // Invalid input: halfNum doesn't exist or already used
      }
  
      original.push(halfNum);
      countMap.set(halfNum, countMap.get(halfNum) - 1);
      countMap.set(num, countMap.get(num) - 1);
    }
  
    return original;
  }
  
  // Example usage:
  const changed = [1, 3, 4, 2, 6, 8];
  console.log(findOriginalArray(changed));
  