  
/**
 * To run this file in Gitpod, use the 
 * command node filter.js in the terminal
 */

// * Filter uses a callback function that MUST return true or false

// Simple Filtering
const people = [
    {
      name: 'Michael',
      age: 23,
    },
    {
      name: 'Lianna',
      age: 16,
    },
    {
      name: 'Paul',
      age: 18,
    },
  ];
  
// * Filerting works in a similar fashion to the map() method.
/** Below is an example of how to filter a simple result. 
 * const 'variableName' = 'array'.filter(itemName => itemName.key 'is greater than or equal to' '21)
*/
const overAge = people.filter(person => person.age >= 21);
console.log(overAge);

// TODO: Filter the array to get just the object with "Paul" in it

const justPaul = people.filter(person => person.name == "Paul")
console.log(justPaul)

// * The filter method with ALWAYS return an array, even if there is only 1 element




  // Complex Filtering
  const students = [
    {
      id: 1,
      name: 'Mark',
      profession: 'Developer',
      skills: [
        { name: 'javascript', yrsExperience: 1 },
        { name: 'html', yrsExperience: 5 },
        { name: 'css', yrsExperience: 3 },
      ]
    },
    {
      id: 2,
      name: 'Ariel',
      profession: 'Developer',
      skills: [
        { name: 'javascript', yrsExperience: 0 },
        { name: 'html', yrsExperience: 4 },
        { name: 'css', yrsExperience: 2 },
      ]
    },
    {
      id: 3,
      name: 'Jason',
      profession: 'Designer',
      skills: [
        { name: 'javascript', yrsExperience: 1 },
        { name: 'html', yrsExperience: 1 },
        { name: 'css', yrsExperience: 5 },
      ]
    },
  ];

//   * Here I'm filtering the students by their 'yrsExperience'. If they have 5 or more years,
// * they are added to the 'strongSkills' variable
// * I then return the variable only if it has at least 1 element

  const candidates1 = students.filter(student => {
      let strongSkills = student.skills.filter(skill => skill.yrsExperience >= 5)
      return strongSkills.length > 0
  })

  console.log(candidates1)
  // This returns only the candidates that have a skill with 5+ years experience, but doesn't say which skill

  // * The above is quite complicated, as it has the nested filter. This is how it looks having a seperate filter
  // * for the strongSkills, and then just being able to call that as and when I like

  // * This variable is useless on its own, but will check an array for whether someone has a strong skill.
  const hasStrongSkills1 = student => {
    let strongSkills = student.skills.filter(skill => skill.yrsExperience >= 5);
    return strongSkills.length > 0;
};

/** I can then use the candidates variable to filter out only students with a strong skill.
 * But then later could filter for other parameters */

let candidates2 = students.filter(hasStrongSkills1);
console.log(candidates2)

/** I could go a step further and have another variable called 'has5YearsExp' 
 * that does the 5+ years check seperately, and then pass that into the hasStrongSkills variable.
 * This allows me to remove the 'strongSkills variable, and the return statement within 'hasStrongSkills */

const has5YearsExp = skill => skill.yrsExperience >= 5;
const hasStrongSkills2 = student => student.skills.filter(has5YearsExp).length > 0;
const candidates3 = students.filter(hasStrongSkills2);
console.log(candidates3)

// * The point of this is to keep code readable and clear. By isolating each filter,
// * I can clearly see what variable is responsible for what. With this in mind, I could
// * also filter potentially by the exact skill. Using the 'has5YearsExp, I could pass the 
// * student.name == "css" and find out all of the candidates that specifically have 5+ years
// * exp in css

// ! The result of all of these shows every skill the candidate has, here is how to just show the 
// ! name of the candidate from the info gathered

const candidateNames = candidates3.map(p => p.name);
console.log(candidateNames)