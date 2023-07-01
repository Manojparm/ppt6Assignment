function validMountainArray(arr) {
    const n = arr.length;
    
    if (n < 3) {
      return false;
    }
  
    let i = 0;
  
    // Ascending phase
    while (i < n - 1 && arr[i] < arr[i + 1]) {
      i++;
    }
  
    // Peak should not be the first or last element
    if (i === 0 || i === n - 1) {
      return false;
    }
  
    // Descending phase
    while (i < n - 1 && arr[i] > arr[i + 1]) {
      i++;
    }
  
    return i === n - 1;
  }
  
  // Example usage:
  const arr = [2, 1];
  console.log(validMountainArray(arr));
  