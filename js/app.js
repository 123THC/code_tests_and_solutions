// Question 1

Square every digit of a number.
For example, if we run 9119 through the function, 811181 will come out.

function squareDigits(num){
  let arr = [];
  let newNum = num.toString();

  for (i = 0; i < newNum.length; i++) {
    let x = newNum.charAt(i) * newNum.charAt(i)
    arr.push(x);
  }
  return parseInt(arr.join(''));
}
