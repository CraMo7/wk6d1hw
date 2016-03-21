//Section 1

//what types are these? Write your answer in a comment beside it.

1; //Number
"cat"; //String
true; //Boolean
[]; //Object (Array)
{}; // Object (Hash)
1.1; // Number
undefined; //undefined type? Object??

//Section 2

// what is the truthy/falsiness values of the following
// write your answer in a comment beside it
// you can use an if to test this...
1; //true
"cat"; //true
true; //true
NaN; //false
[]; //true
{}; //true
undefined; //false
""; //false
0; //false


//Section 3

//Using examples that are different from above...

//3.1 Assign a variable that is a number
var numberNumberOne = 1;

//3.2 Assign a variable that is a string
var whatNiceStringsYouHave = "hi, I am a string";

//3.3 Assign a variable that is a boolean
var isIt = true;

//3.4 Assign a variable that is an object
var jsObjectsAreMagic = new Object();

//Section 4
//4.1 Write a statement that writes "hello" to the console if it's true and "bye" if it is false
var helloGoodbye = function(varToTest) {

  if (varToTest) {
    console.log("hello");
  }
  else if (!varToTest) {
    console.log("bye");
  }
}

//Section 5
var animals = ["raccoon","hedgehog","mouse","gerbil"];

//5.1. Assign the first element to a variable
var firstElement = animals[0];

//5.2. Assign the last element to a variable
var lastElement = animals[animals.length - 1];

//5.3. Assign the length of an array to a variable
var arrayLength = animals.length;

//5.4. Add an item to the end of the array
animals.push("this is an item");

//5.5. Add an item to the start of the array
animals.unshift("This will be added as the first item");

//5.6. Assign the index of hedgehog to a variable
var whereTheHedgehogIs = animals.indexOf("hedgehog");

//Section 6

//6.1 Create an array of 5 vegetables
var veggies = ["carrot", "leek", "broccoli", "parsnip", "turnip"]

//6.2 Loop over the array and write to the console using a "while"
var counter = 0
while (counter < veggies.length) {
  console.log(veggies[counter]);
  counter++
}

//6.3 Loop again using a "for" with a counter
for (veggie of veggies) {
  console.log(veggie);
}

//6.4 Loop again using a "for in"
for (index in veggies) {
  console.log(veggies[index]);
}

//Section 7
var accounts = [
  { name: 'jay',
    amount: 125.50,
    type: 'personal'
  },
  { name: 'val',
    amount: 55125.10,
    type: 'business'
  },
  { name: 'marc',
    amount: 400.00,
    type: 'personal'
  },
  { name: 'keith',
    amount: 220.25,
    type: 'business'
  },
  { name: 'rick',
    amount: 1.00,
    type: 'personal'
  },
]
//7.1 Calculate the total cash in accounts
var calcTotal = function() {
  var total = 0;
  for (account of accounts) {
    total += account.amount;
  }
  return total;
}
console.log(calcTotal());

//7.2 Find the name of the account with the largest balance

var getRichestAccountOwner = function() {
  var largestBalanceAccount = {amount: 0};

  for (account of accounts) {
    if (account["amount"] > largestBalanceAccount["amount"]) {
      largestBalanceAccount = account;
    }
  }
  return largestBalanceAccount["name"];
}

console.log(getRichestAccountOwner());

//7.3 Find the name of the account with the smallest balance
var getPoorestAccountOwner = function() {
  var smallestBalanceAccount = {amount: 9999999999999999999};

  for (account of accounts) {
    if (account["amount"] < smallestBalanceAccount["amount"]) {
      smallestBalanceAccount = account;
    }
  }
  return smallestBalanceAccount["name"];
}
console.log(getPoorestAccountOwner());

//7.4 Calculate the average bank account value
var calcAverageValue = function() {
  var total = 0;
  var count = 0;
  for (account of accounts) {
    total += account.amount;
    count++;
  }
  return total/count;
}
console.log(calcAverageValue());

//7.5 Find the value of marcs bank account
var findValueOfThisGuy = function(name) {
  for (account of accounts) {
    if (account["name"] === name) {
      return account.amount;
    }
  }
}

console.log(findValueOfThisGuy("marc"));

//7.6 Find the holder of the largest bank account
var question = {isThisDifferentFrom: "7.2 Find the name of the account with the largest balance"
}

//7.7 Calculate the total cash in business accounts
var findBusinessTotalCash = function() {
  var total = 0
  for (account of accounts) {
    if (account["type"] === "business") {
      total += account["amount"];
    }
  }
  return total;
}
console.log(findBusinessTotalCash());

//7.8 Find the largest personal account owner
// copy paste 7.2 - add type checking logic from 7.7

var getRichestAccountOwner = function() {
  var largestBalanceAccount = {amount: 0};

  for (account of accounts) {
    if (account["type"] === "personal")
      if (account["amount"] > largestBalanceAccount["amount"]) {
        largestBalanceAccount = account;
      }

  }
  return largestBalanceAccount["name"];
}

console.log(getRichestAccountOwner());


//Section 8
//Assign a variable myPerson to a hash, giving them a name, height favourite food
var myPerson = {};
myPerson["name"] = "Craig";
myPerson["height"] = "tall";
myPerson.favFood = "pizza";

console.log(myPerson.name);
console.log(myPerson.height);
console.log(myPerson.favFood);
