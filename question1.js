function reconstructPermutation(s) {
    const n = s.length;
    const perm = new Array(n + 1);
    let start = 0, end = n;
  
    for (let i = 0; i < n; i++) {
      if (s[i] === 'I') {
        perm[i] = start;
        start++;
      } else if (s[i] === 'D') {
        perm[i] = end;
        end--;
      }
    }
  
    perm[n] = start;
  
    return perm;
  }
  
  // Example usage:
  const s = "IDID";
  console.log(reconstructPermutation(s));
  