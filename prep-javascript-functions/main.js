function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

var sum = addTwoNumbers(2, 2);
console.log('addTwoNumbers Exercise:', sum);

function convertHoursToMinutes(hours) {
  return hours * 60;
}

var minutes = convertHoursToMinutes(2);
console.log('convertHoursToMinutes Exercise:', minutes);

function getGreeting(name) {
  return '"Hello ' + name + '!"';
}

var world = getGreeting('World');
console.log('getGreeting Exercise:', world);

function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}

var multipleOf5 = addAndMultiplyBy5(10, 5);
console.log('addAndMultiplyBy5 Exercise:', multipleOf5);

function multiplyAndDivideBy5(num1, num2) {
  return (num1 * num2) / 5;
}

var divisionOf5 = multiplyAndDivideBy5(35, 10);
console.log('multiplyAndDivideBy5 Exercise:', divisionOf5);

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}

var subtraction = subtractTwoNumbers(22, 7);
console.log('subtractTwoNumbers Exercise:', subtraction);

function getCircleCircumference(radius) {
  return 2 * Math.PI * radius;
}

var circleCircumference = getCircleCircumference(5);
console.log('getCircleCircumference Exercise:', circleCircumference);

function getFullName(firstName, lastName) {
  return '"' + firstName + ' ' + lastName + '"';
}

var fullName = getFullName('Matthew', 'Chau');
console.log('getFullName Exercise:', fullName);

function cube(number) {
  return number * number * number;
}

var cubedPower = cube(5);
console.log('cube Exercise:', cubedPower);
