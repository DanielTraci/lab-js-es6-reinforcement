// ***************************************************************************
// Iteration 1 - `for...of` loop
// ***************************************************************************

let usersArray = require('./data')
/*
const getFirstNames = arr => {
  const userFirstNames = [];
  for (let user of arr) {
    userFirstNames.push(user.firstName)
  }
  console.log(userFirstNames)
};

getFirstNames(usersArray);
// expected output:
// [ 'Kirby', 'Tracie', 'Kendra', 'Kinney', 'Howard', 'Rachelle', 'Lizzie' ]

// ***************************************************************************
// Iteration 2 - `for...of` loop and ES6 string literals `${}`
// ***************************************************************************

const getFullNames = arr => {
  let userFullNames = []
  for (let user of arr) {
    userFullNames.push(`${user.firstName} ${user.lastName}`)
  }
  console.log(userFullNames)

};

getFullNames(usersArray);
*/
// expected output:
// [ 'Kirby Doyle', 'Tracie May', 'Kendra Hines', 'Kinney Howard',
//   'Howard Gilmore', 'Rachelle Schneider', 'Lizzie Alford' ]

// ***************************************************************************
// Iteration 3 - ES6 destructuring , for of loop, object literal
// ***************************************************************************
/*
const getUsersCreditDetails = arr => {
  let usersCreditDetails = []

  for (let user of arr) {
    let {firstName = {firstName}, lastName = {lastName}, balance = {balance}} = user
    let score = {
      firstName,
      lastName,
      balance
    }
    usersCreditDetails.push(score)
  }
  console.log(usersCreditDetails)
};

getUsersCreditDetails(usersArray);*/
// expected output:
// [ { firstName: 'Kirby', lastName: 'Doyle', balance: '$3,570.06' },
// { firstName: 'Tracie', lastName: 'May', balance: '$1,547.73' },
// { firstName: 'Kendra', lastName: 'Hines', balance: '$12,383.08' },
// { firstName: 'Kinney', lastName: 'Howard', balance: '$3,207.06' },
// { firstName: 'Howard', lastName: 'Gilmore', balance: '$21,307.75' },
// { firstName: 'Rachelle', lastName: 'Schneider', balance: '$35,121.49' },
// { firstName: 'Lizzie', lastName: 'Alford', balance: '$4,382.94' } ]

// ***************************************************************************
// Iteration 4 - practice `.filter()` method and how to return two elements
// ***************************************************************************

const genderView = users => {
  let femaleUsers = [];
  let maleUsers = [];
  femaleUsers = users.filter(e => e.gender == 'female')
  maleUsers = users.filter(e => e.gender == 'male')
  femaleUsers = femaleUsers.map(e => `${e.firstName} ${e.lastName}`) ;
  maleUsers = maleUsers.map(e => `${e.firstName} ${e.lastName}`) ;
  let gender = {femaleUsers, maleUsers}
  return gender
  };

genderView(usersArray);
// ***************************************************************************
// Bonus - Iteration 5
// ***************************************************************************

const data = genderView(usersArray);

const genderCount = data => {
  
  const {femaleUsers, maleUsers} = data
  let femaleLength = femaleUsers.length 
  let maleLength = maleUsers.length
  console.log(`Female: ${femaleLength} - Male: ${maleLength}`)
  return `Female: ${femaleLength} - Male: ${maleLength}`
};

genderCount(data);
// expected output:
// Female: 4
// Male: 3

// ***************************************************************************
// Bonus - Iteration 6
// ***************************************************************************

const promo20 = users => {
  // Your code goes here ...
};

// expected output:
// Dear Howard, since your balance is $21,307.75, you are eligible to apply for this awesome credit card.
// Dear Rachelle, since your balance is $35,121.49, you are eligible to apply for this awesome credit card.

// ***************************************************************************
// Bonus - Iteration 7
// ***************************************************************************

const addActive = users => {
  // Your code goes here ...
};

addActive(usersArray);
// expected output:
// [
//    { firstName: 'Kirby',
//      lastName: 'Doyle',
//      id: 'b71794e5-851e-44b5-9eec-1dd4e897e3b8',
//      isActive: true,
//      balance: '$3,570.06',
//      gender: 'male'
//    },
//    {
//      // ...
//    }
// ]
