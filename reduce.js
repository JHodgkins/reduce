  
/**
 * To run this file in Gitpod, use the 
 * command node reduce.js in the terminal
 */


// Summing an array of numbers:
const nums = [0, 1, 2, 3, 4];
// let sum = nums.reduce((acc, curr) => acc + curr);
// console.log(sum); // result is 10

// How we got 10
let sum = nums.reduce((acc, curr) => {
  console.log(
    "accumalator:", acc,
    "current value:", curr,
    "total:", acc + curr
  );
  return acc + curr;
}, 0); // 0 is the initial value
console.log(sum);

// simplified condensed version
let sum2 = nums.reduce((acc, curr) => acc + curr, 0); // 0 is the initial value
console.log("sum2", sum2);




const teamMembers = [
  {
    name: 'Andrew',
    profession: 'Developer',
    yrsExperience: 5
  },
  {
    name: 'Ariel',
    profession: 'Developer',
    yrsExperience: 7
  },
  {
    name: 'Michael',
    profession: 'Designer',
    yrsExperience: 1
  },
  {
    name: 'Kelly',
    profession: 'Designer',
    yrsExperience: 3
  },
  {
    name: 'James',
    profession: 'TechLead',
    yrsExperience: 5
  }
];

// Totaling a specific object property
let totalExperiance = teamMembers.reduce((acc, curr) => acc + curr.yrsExperience, 0);
console.log("Total Years Experiance:", totalExperiance);

// Grouping by a property, and totaling it too
// get profession and total years experiance between the people

let experianceByProfession = teamMembers.reduce((acc, curr) => {
  let theKey = curr.profession;
  
  if (!acc[theKey]) {
    acc[theKey] = curr.yrsExperience;
  } else {
    acc[theKey] += curr.yrsExperience;
  }
  return acc;
}, []);

console.log(experianceByProfession);

/**
 * adding a new profession to the object list will
 * automatically update
 * {
    name: 'James',
    profession: 'TechLead',
    yrsExperience: 5
  } */