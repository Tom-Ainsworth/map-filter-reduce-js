  
/**
 * To run this file in Gitpod, use the 
 * command node reduce.js in the terminal
 */


// Summing an array of numbers:
// * reduce typically takes 2 paramenters. acc = accumulator, curr = currentValue
/** acc represents the value that will ultimately be returned by the method.
 * curr represents the currennt array item that the callback function is being run on*/

const nums = [0, 1, 2, 3, 4];
let sum = nums.reduce((acc, curr) => {
  console.log(
    "Accumulator:", acc,
    "Current:", curr,
    "Total", acc + curr
    );
    return acc + curr;
});
console.log("Original Sum:", sum);
// * In this case accumulate and keep track of the sum as the callback function is executed on each array element
// * As it's a sum, acc will be an integer, but I could also be accumulating items into an array, object or something else
/** The above function goes through each iteration of the array.
 * reduce can take a second parameter after (acc, curr) which tells it which item of the array to begin with.
 * In this case that isn't used, so it begins with the first value = 0. 0 is added to 1, as the accumulator is 0
 * and the current is 1. The process then continutes. acc becomes 1, curr becomes 2, 1+2 = 3.
 * If I explicitly specify '0' as the starting point. The function will begin with both the acc and curr on 0
 * so 0 + 0 = 0, and then it continues as before.
 */

// * To simplify the function, it looks like this, rather than the big console log:
let simpleSum = nums.reduce((acc, curr) => acc + curr, 0);
console.log("Same thing but simplified code:", simpleSum)
// The result is the same as before, but without the lengthy log



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
      name: 'Tom',
      profession: 'Drummer',
      yrsExperience: 21
    }
  ];
  
  // Totaling a specific object property
  // ? Challenge: Return the sum of all years experience that all team members have. Total should be 16.

  // * Here the only change is that the current needs to access yrsExperience with dot notation. Also the starting index
  // * must be specified here, otherwise the method will start at the first array item, which is an object here.

  let totalExperience = teamMembers.reduce((acc, curr) => acc + curr.yrsExperience, 0)
  console.log("Total Experience of the team", totalExperience)
  

  // Grouping by a property, and totaling it too
  // Here's a run through of the first iteration line by line.
let experienceByProfession = teamMembers.reduce((acc, curr) => {
  let key = curr.profession; // Creates the variable that will become the object key ("Developer")
  if (!acc[key]) { // If "Developer" is not equal to the accumulator (currently an empty object)...
    acc[key] = curr.yrsExperience; // The accumulator[Developer] = current.yrsExperience (5) so it gives Developer: 5
  } else {
    acc[key] += curr.yrsExperience; // This step comes in with the 2nd iteration. key is still 'Developer', so instead of creating a new key, the value (7) gets added to the accumulator, which = 12
  }
  return acc // Return the accumulator, which is now {Developer: 5}
}, {});


console.log("Experience by Profession:", experienceByProfession)

let teamNamesAndRoles =teamMembers.reduce((acc, curr) => {
  let key = curr.profession; //Same as above
  if (!acc[key]) { 
    acc[key] = [curr.name] // Instead of yrsExp, I want to return the name of the person with the given profession
  } else {
    acc[key].push(curr.name) // If the profession exists already, push the current name to the existing profession.
  }
  return acc
}, {}) 
console.log("Roles and their team members:", teamNamesAndRoles)