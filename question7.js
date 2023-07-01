function generateMatrix(n) {
    // Initialize the matrix with zeros
    const matrix = new Array(n).fill(0).map(() => new Array(n).fill(0));
  
    let num = 1; // Current number to fill in the matrix
    let top = 0; // Top boundary
    let bottom = n - 1; // Bottom boundary
    let left = 0; // Left boundary
    let right = n - 1; // Right boundary
  
    while (num <= n * n) {
      // Fill the top row from left to right
      for (let i = left; i <= right; i++) {
        matrix[top][i] = num++;
      }
      top++;
  
      // Fill the right column from top to bottom
      for (let i = top; i <= bottom; i++) {
        matrix[i][right] = num++;
      }
      right--;
  
      // Fill the bottom row from right to left
      for (let i = right; i >= left; i--) {
        matrix[bottom][i] = num++;
      }
      bottom--;
  
      // Fill the left column from bottom to top
      for (let i = bottom; i >= top; i--) {
        matrix[i][left] = num++;
      }
      left++;
    }
  
    return matrix;
  }
  
  // Example usage:
  const n = 3;
  console.log(generateMatrix(n));
  