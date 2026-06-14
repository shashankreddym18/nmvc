const letterValues = {
  'A': 1, 'B': 2, 'C': 3, 'D': 4, 'E': 5,
  'F': 8, 'G': 3, 'H': 5, 'I': 1, 'J': 1,
  'K': 2, 'L': 3, 'M': 4, 'N': 5, 'O': 7,
  'P': 8, 'Q': 1, 'R': 2, 'S': 3, 'T': 4,
  'U': 6, 'V': 6, 'W': 6, 'X': 5, 'Y': 1,
  'Z': 7
};

const LO_SHU_ORDER = [4, 9, 2, 3, 5, 7, 8, 1, 6];

function digitalRoot(n) {
  n = Math.abs(n);
  while (n > 9) {
    n = String(n).split('').reduce((sum, digit) => sum + parseInt(digit), 0);
  }
  return n;
}

function sumDigits(str) {
  return str.split('').filter(ch => /\d/.test(ch))
            .reduce((sum, digit) => sum + parseInt(digit), 0);
}

function calculateNameNumber(name) {
  let total = 0;
  for (let char of name.toUpperCase()) {
    total += letterValues[char] || 0;
  }
  return digitalRoot(total);
}

function calculateKuaNumber(year, gender) {
  const yearRoot = digitalRoot(sumDigits(String(year)));
  let kua = gender === 'male' ? 11 - yearRoot : yearRoot + 4;
  kua = digitalRoot(kua);

  // Kua number 5 does not exist; it is replaced based on gender
  if (kua === 5) {
    kua = gender === 'male' ? 2 : 8;
  }
  return kua;
}

function renderBirthChart(day, month, year, driverNumber, conductorNumber, kuaNumber) {
  const digitsStr = `${day}${month}${year}`;
  const counts = {};

  for (let ch of digitsStr) {
    const digit = parseInt(ch);
    if (digit === 0) continue;
    counts[digit] = (counts[digit] || 0) + 1;
  }

  // Driver, Conductor and Kua numbers are also plotted on the grid
  [driverNumber, conductorNumber, kuaNumber].forEach(num => {
    counts[num] = (counts[num] || 0) + 1;
  });

  const grid = document.getElementById('birthChart');
  grid.innerHTML = '';

  LO_SHU_ORDER.forEach(num => {
    const cell = document.createElement('div');
    cell.className = 'lo-shu-cell';
    cell.textContent = counts[num] ? String(num).repeat(counts[num]) : '';
    grid.appendChild(cell);
  });
}

document.getElementById('numerologyForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('nameInput').value;
  const day = parseInt(document.getElementById('dobDay').value);
  const month = parseInt(document.getElementById('dobMonth').value);
  const year = parseInt(document.getElementById('dobYear').value);
  const gender = document.getElementById('genderInput').value;

  const driverNumber = digitalRoot(sumDigits(String(day)));
  const conductorNumber = digitalRoot(sumDigits(`${day}${month}${year}`));
  const kuaNumber = calculateKuaNumber(year, gender);
  const nameNumber = calculateNameNumber(name);

  document.getElementById('driverNumber').textContent = driverNumber;
  document.getElementById('conductorNumber').textContent = conductorNumber;
  document.getElementById('kuaNumber').textContent = kuaNumber;
  document.getElementById('nameNumber').textContent = nameNumber;

  renderBirthChart(day, month, year, driverNumber, conductorNumber, kuaNumber);

  document.getElementById('outputBox').style.display = 'block';
});

function resetForm() {
  document.getElementById('numerologyForm').reset();
  document.getElementById('outputBox').style.display = 'none';
}

// Auto-advance between DOB fields (DD -> MM -> YYYY -> Gender)
const dobDay = document.getElementById('dobDay');
const dobMonth = document.getElementById('dobMonth');
const dobYear = document.getElementById('dobYear');
const genderInput = document.getElementById('genderInput');

function autoAdvance(field, maxLength, firstDigitLimit, next) {
  field.addEventListener('input', () => {
    let value = field.value.replace(/[^0-9]/g, '');
    if (value.length > maxLength) value = value.slice(0, maxLength);
    field.value = value;

    const shouldAdvance =
      value.length === maxLength ||
      (value.length === 1 && parseInt(value, 10) > firstDigitLimit);

    if (shouldAdvance && next) {
      next.focus();
      if (next.select) next.select();
    }
  });

  field.addEventListener('keydown', (e) => {
    if (e.key === 'Backspace' && field.value === '' && field.previousField) {
      field.previousField.focus();
    }
  });
}

dobMonth.previousField = dobDay;
dobYear.previousField = dobMonth;

autoAdvance(dobDay, 2, 3, dobMonth);   // days 4-9 can't have a second digit
autoAdvance(dobMonth, 2, 1, dobYear);  // months 2-9 can't have a second digit
autoAdvance(dobYear, 4, 9, genderInput);

// Highlight the active field with a lively glow effect
[dobDay, dobMonth, dobYear].forEach(field => {
  field.addEventListener('focus', () => field.parentElement.classList.add('dob-group-active'));
  field.addEventListener('blur', () => field.parentElement.classList.remove('dob-group-active'));
});
