/**
 * To run this file in Gitpod, use the 
 * command node map.js in the terminal
 */

// A callback function is simply a function we pass as a parameter to the method
// to be called on every element of the array, that the method is operating on.

// Using a for loop
let nums = [1, 2, 3, 4, 5]
let results = []
for (let num of nums) {
    results.push(num * 2);
}
console.log(results)


// Same thing but Using map()
const multiplyByTwo = function (num) {
    return num * 2;
}

const mapResults = nums.map(multiplyByTwo);
console.log(mapResults);


// Simplified w/ map()
// Same as above but the return expression is placed inside the map method ()
const simplified = nums.map(function (num) {
    return num * 2
});
console.log("Simplified sum:", simplified)

// Simplfied w/ map() + arrow function
// Achieving the same thing but with an arrow function. As it's only a simple expression, the {} aren't needed.
// It's basically saying 'for each num, return num * 2' and iterating through and push the results to a new array.
const arrow = nums.map(num => num * 2)
console.log(arrow)

// With objects:
const students = [{
        id: 1,
        name: 'Mark',
        profession: 'Developer',
        skill: 'JavaScript'
    },
    {
        id: 2,
        name: 'Ariel',
        profession: 'Developer',
        skill: 'HTML'
    },
    {
        id: 3,
        name: 'Jason',
        profession: 'Designer',
        skill: 'CSS'
    },
];

// Challenge:
// With the above array. Iterate through each object, and return an array that includes the student's name and their id' using the map method
// Result - 'const variableName = arrayToMap.map(index => [index.name, index.id]);
const studentsWithIds = students.map(student => [student.name, student.id]);

// for (let itm of students) {
//     studentsWithIds.push([itm.name, itm.id]);
// }
console.log(studentsWithIds)