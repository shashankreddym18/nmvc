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

// Base table derived from real reports; the Driver Number itself and its
// complement (9 - driver, or 9 itself for driver 9) shift into Neutral.
const BASE_LUCKY = [1, 3, 5, 6, 7];
const BASE_BAD = [2, 4, 8];
const BASE_NEUTRAL = [9];

function getNumberCompatibility(driverNumber) {
  const lucky = new Set(BASE_LUCKY);
  const bad = new Set(BASE_BAD);
  const neutral = new Set(BASE_NEUTRAL);

  const complement = driverNumber === 9 ? 9 : 9 - driverNumber;

  [driverNumber, complement].forEach(num => {
    lucky.delete(num);
    bad.delete(num);
    neutral.add(num);
  });

  return {
    lucky: [...lucky].sort((a, b) => a - b),
    bad: [...bad].sort((a, b) => a - b),
    neutral: [...neutral].sort((a, b) => a - b)
  };
}

function getDatesForNumbers(numbers) {
  const dates = [];
  for (let date = 1; date <= 31; date++) {
    if (numbers.includes(digitalRoot(date))) dates.push(date);
  }
  return dates;
}

function ordinal(n) {
  const suffixes = ['th', 'st', 'nd', 'rd'];
  const v = n % 100;
  return n + (suffixes[(v - 20) % 10] || suffixes[v] || suffixes[0]);
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

  return counts;
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

  const chartCounts = renderBirthChart(day, month, year, driverNumber, conductorNumber, kuaNumber);
  renderDriverProfile(driverNumber);
  renderNameCompatibility(driverNumber, nameNumber);
  renderDriverConductorCombo(driverNumber, conductorNumber);
  renderRepeatingNumbers(chartCounts);
  renderMissingNumbers(chartCounts);
  renderPersonalYears(day, month);
  renderKuaDirections(kuaNumber);

  document.getElementById('outputBox').style.display = 'block';
});

function renderDriverProfile(driverNumber) {
  const data = DRIVER_DATA[driverNumber];

  document.getElementById('driverPlanet').textContent = data.planet;

  const strengthsList = document.getElementById('driverStrengths');
  strengthsList.innerHTML = '';
  data.strengths.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    strengthsList.appendChild(li);
  });

  const weaknessesList = document.getElementById('driverWeaknesses');
  weaknessesList.innerHTML = '';
  data.weaknesses.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    weaknessesList.appendChild(li);
  });

  document.getElementById('driverParenting').textContent = data.parenting;

  const compatibility = getNumberCompatibility(driverNumber);
  document.getElementById('luckyNumbers').textContent = compatibility.lucky.join(', ') || 'None';
  document.getElementById('neutralNumbers').textContent = compatibility.neutral.join(', ') || 'None';
  document.getElementById('badNumbers').textContent = compatibility.bad.join(', ') || 'None';

  document.getElementById('luckyColors').textContent = data.luckyColors.join(', ') || 'None';
  document.getElementById('badColors').textContent = data.badColors.join(', ') || 'None';

  document.getElementById('luckyDates').textContent =
    getDatesForNumbers(compatibility.lucky).map(ordinal).join(', ') || 'None';
  document.getElementById('neutralDates').textContent =
    getDatesForNumbers(compatibility.neutral).map(ordinal).join(', ') || 'None';
  document.getElementById('badDates').textContent =
    getDatesForNumbers(compatibility.bad).map(ordinal).join(', ') || 'None';
}

function renderNameCompatibility(driverNumber, nameNumber) {
  const compatibility = getNumberCompatibility(driverNumber);
  let message;

  if (compatibility.lucky.includes(nameNumber)) {
    message = `Your Name Number is ${nameNumber}, which is highly compatible with your Driver Number ${driverNumber}. This is a great alignment for your personality and goals.`;
  } else if (compatibility.bad.includes(nameNumber)) {
    message = `Your Name Number is ${nameNumber}, which is not very compatible with your Driver Number ${driverNumber}. You may want to consider a name correction to better align with numbers ${compatibility.lucky.join(', ')}.`;
  } else {
    message = `Your Name Number is ${nameNumber}, which is neutral with your Driver Number ${driverNumber}. For better alignment, you could consider numbers ${compatibility.lucky.join(', ')}.`;
  }

  document.getElementById('nameCompatibility').textContent = message;
}

function renderDriverConductorCombo(driverNumber, conductorNumber) {
  const driver = DRIVER_DATA[driverNumber];
  const conductor = CONDUCTOR_DATA[conductorNumber];

  const message = `Your Driver Number ${driverNumber} is ruled by ${driver.planet}, while your Conductor Number ${conductorNumber} is ruled by ${conductor.planet}. ` +
    `Conductor Number ${conductorNumber} ${conductor.influence}`;

  document.getElementById('driverConductorCombo').textContent = message;
}

function renderRepeatingNumbers(chartCounts) {
  const container = document.getElementById('repeatingNumbers');
  container.innerHTML = '';

  const repeating = Object.keys(chartCounts)
    .map(Number)
    .filter(num => chartCounts[num] > 1)
    .sort((a, b) => a - b);

  if (repeating.length === 0) {
    container.innerHTML = '<p>No number appears more than once in your birth chart.</p>';
    return;
  }

  repeating.forEach(num => {
    const p = document.createElement('p');
    p.innerHTML = `<strong>Number ${num}</strong> (appears ${chartCounts[num]} times): ${REPEATING_NUMBER_DATA[num]}`;
    container.appendChild(p);
  });
}

function renderMissingNumbers(chartCounts) {
  const container = document.getElementById('missingNumbers');
  container.innerHTML = '';

  const missing = [];
  for (let num = 1; num <= 9; num++) {
    if (!chartCounts[num]) missing.push(num);
  }

  if (missing.length === 0) {
    container.innerHTML = '<p>Every number from 1-9 is present in your birth chart. No numbers are missing.</p>';
    return;
  }

  missing.forEach(num => {
    const data = MISSING_NUMBER_DATA[num];
    const block = document.createElement('div');
    block.innerHTML = `<p><strong>Missing Number ${num}:</strong> ${data.meaning}</p><p><strong>Remedy:</strong> ${data.remedy}</p>`;
    container.appendChild(block);
  });
}

function renderPersonalYears(day, month) {
  const container = document.getElementById('personalYears');
  container.innerHTML = '';

  const currentYear = new Date().getFullYear();

  for (let i = 0; i < 5; i++) {
    const targetYear = currentYear + i;
    const personalYear = digitalRoot(sumDigits(`${day}${month}${targetYear}`));

    const block = document.createElement('div');
    block.innerHTML = `<p><strong>${targetYear} (Personal Year ${personalYear}):</strong> ${PERSONAL_YEAR_DATA[personalYear]}</p>`;
    container.appendChild(block);
  }
}

function renderKuaDirections(kuaNumber) {
  const data = KUA_DATA[kuaNumber];
  const directionList = document.getElementById('kuaDirections');
  directionList.innerHTML = '';

  document.getElementById('kuaGroup').innerHTML =
    `Your Kua Number ${kuaNumber} belongs to the <strong>${data.group} Group</strong>. ` +
    `Facing or sleeping with your head towards these directions is considered favorable for you, ` +
    `while West Group directions are best avoided if you are an East Group person (and vice versa).`;

  const labels = {
    success: "Success / Wealth (Sheng Chi)",
    health: "Health (Tien Yi)",
    relationships: "Relationships / Love (Nien Yen)",
    stability: "Personal Growth / Stability (Fu Wei)"
  };

  Object.keys(labels).forEach(key => {
    const li = document.createElement('li');
    li.innerHTML = `<strong>${labels[key]}:</strong> ${data.directions[key]}`;
    directionList.appendChild(li);
  });
}

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
