module.exports = function solveEquation(equation) {

  let x1;
  let x2;
  let d;

  const parsedEquation = equation.split('*');

  const a = Number(parsedEquation[0]);

  const separatorB = getSeparator(parsedEquation[1]);
  let b = Number(parsedEquation[1].split(separatorB)[1]);
  b = separatorB === '-' ? -b : b;

  const separatorC = getSeparator(parsedEquation[2])
  let c = Number(parsedEquation[2].split(separatorC)[1]);
  c = separatorC === '-' ? -c : c;

  let solutions = [];

  if (c === 0 && b !== 0 && a !== 0) {
    x1 = 0;
    x2 = -b / a;
  } else if (b === 0 && a !== 0 && c !== 0 && (-c / a > 0)) {
    x1 = Math.sqrt(-c / a);
    x2 = -x1;
  } else if (b === 0 && c === 0) {
    x1 = 0;
    x2 = 0;
  } else if (a !== 0 && b !== 0 && c !== 0) {
    d = Math.pow(b, 2) - 4 * a * c;
    if (d > 0) {
      x1 = (-b - Math.sqrt(d)) / (2 * a);
      x2 = (-b + Math.sqrt(d)) / (2 * a);
    } else if ((d = 0)) {
      x1 = -b / (2 * a);
      x2 = x1;
    }
  }

  solutions.push(x1);
  solutions.push(x2);

  solutions = solutions.map(solution => Math.round(solution));
  solutions.sort((a, b) => a - b);

  return solutions
};

function getSeparator(string) {
  let separator = '+';
  if (string.indexOf('-') !== -1) {
    separator = '-';
  }
  return separator;
}