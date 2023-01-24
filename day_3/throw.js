console.log(isPositive(1));
console.log(isPositive(2));
console.log(isPositive(-3));


function isPositive(a) {
  if (a < 0) {
    throw { message: 'Negative Error' };
  } else if (a === 0) {
    throw { message: 'Zero Error' };
  }

  return "YES";
}