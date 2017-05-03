// Question 1 - Javascript

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



// Question 2

An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

function isIsogram(str){
  const x = str.toLowerCase();
  for(var i = 0; i <= x.length; i++) {
    for(var y = i+1; y <= x.length; y++) {
      if(x[y] == x[i]) {
        return false;
      }
    }
  }
  return true;
}

// Question 3

create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

function filter_list(l) {
  var arr = l;
  var result = arr.filter(
    function (elem) {
      return (typeof elem === 'number');
    }
  );
  return result;
}
