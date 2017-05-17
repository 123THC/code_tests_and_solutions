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

// this is someone else's answer - way better!

function filter_list(l) {
  return l.filter(function(v) {return typeof v == 'number'})
}


// Question 4

// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.
//
// Implement a function likes :: [String] -> String, which must take in input array, containing the names of people who like an item. It must return the display text as shown in the examples:
//
// likes [] // must be "no one likes this"
// likes ["Peter"] // must be "Peter likes this"
// likes ["Jacob", "Alex"] // must be "Jacob and Alex like this"
// likes ["Max", "John", "Mark"] // must be "Max, John and Mark like this"
// likes ["Alex", "Jacob", "Mark", "Max"] // must be "Alex, Jacob and 2 others like this"

function likes(names) {
  let people = names.length;
  if (people === 0) {
    return 'no one likes this'
  } else if (people === 1) {
    return (names + ' ' + 'likes this');
  } else if (people === 2) {
    return (names[0] + ' and ' + names[1] + ' like this');
  } else if (people === 3) {
    return (names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this');
  } else if (people > 3) {
    let remaining = people - 2;
    return (names[0] + ', ' + names[1] + ' and ' + remaining + ' others like this');
  }
}
