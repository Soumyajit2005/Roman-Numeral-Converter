const number = document.getElementById("number");
const convertButton = document.getElementById("convert-btn");
const output = document.getElementById("output");

const romanNumbers = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1,
};

convertButton.addEventListener("click", () => {
  output.style.display = "inline-block";
  if (number.value === "") {
    output.innerHTML = "Please enter a valid number";
  } else {
    let num = number.value;
    if (num < 1) {
      output.innerHTML = "Please Enter a number greater than or equal to 1";
    } else if (num >= 4000) {
      output.innerHTML = "Please enter a number less than or equal to 3999";
    } else {
      let number = convertNum(romanNumbers, num);
      output.innerText = number;
    }
  }
});

const convertNum = (romanNums, num) => {
  let convertedNum = "";
  const roman = ["M",'CM', "D",'CD', "C",'XC', "L", 'XL', "X", 'IX', "V", 'IV', "I"];
  for (let i = 0; i < roman.length; i++) {
    if ((num - romanNums[roman[i]]) >= 0) {
      convertedNum += roman[i];
      num -= romanNums[roman[i]];
      i = -1;
    }
  }
  return convertedNum;
};
