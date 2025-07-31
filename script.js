const letterValues = {
    'A': 1, 'B': 2, 'C': 3, 'D': 4, 'E': 5,
    'F': 8, 'G': 3, 'H': 5, 'I': 1, 'J': 1,
    'K': 2, 'L': 3, 'M': 4, 'N': 5, 'O': 7,
    'P': 8, 'Q': 1, 'R': 2, 'S': 3, 'T': 4,
    'U': 6, 'V': 6, 'W': 6, 'X': 5, 'Y': 1,
    'Z': 7
  };
  
  function digitalRoot(n) {
    while (n >= 10) {
      n = n.toString().split('').reduce((sum, digit) => sum + parseInt(digit), 0);
    }
    return n;
  }
  
  function calculateValue() {
    const input = document.getElementById("nameInput").value.toUpperCase();
    let total = 0;
  
    for (let char of input) {
      if (char === ' ') continue;
      total += letterValues[char] || 0;
    }
  
    const result = digitalRoot(total);
    document.getElementById("output").textContent = `Your name's value is: ${result}`;
    document.getElementById("outputBox").style.display = "block";
  }
  
  function resetForm() {
    document.getElementById("nameInput").value = "";
    document.getElementById("output").textContent = "";
    document.getElementById("outputBox").style.display = "none";
  }
  
