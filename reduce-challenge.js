let students = [
    {
        name: 'John',
        subjects: ['maths', 'english', 'cad'],
        teacher: {maths: 'Harry', english: 'Joan', cad: 'Paul'},
        results: {maths: 90, english: 75, cad: 87},
    },
    {
        name: 'Emily',
        subjects: ['science', 'english', 'art'],
        teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
        results: {science: 93, english: 73, art: 95},
    },
    {
        name: 'Adam',
        subjects: ['science', 'maths', 'art'],
        teacher: {science: 'Iris', maths: 'Harry', art: 'Simon'},
        results: {science: 93, english: 88, maths: 97, art: 95},
    },
    {
        name: 'Fran',
        subjects: ['science', 'english', 'art'],
        teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
        results: {science: 93, english: 87, art: 95},
    }
];


const biggest = students.reduce((acc, cur) => {
    acc = acc.max > cur.results.english ? acc : {name:cur.name, max:cur.results.english};
    return acc;
    }, {name: '', max: 0});
console.log(biggest);

/** the accumulator is set to start with {name: '', max: 0}, so a key/value of "'name: ''" and 
 * a key/value of "max: 0".
 * line 30 is saying  // * "if the value of 'max' in the accumulator is greater than the current english result, return the accumulator (true statement)'
 * if it not (or in other words if its FALSE), the the accumulator becomes {name: current name, max: current english result}
 * the accumulator is then returned, and it iterates through the next item.
 */
/* Using destructuring 
const biggest = students.reduce(({max, name}, {name, results:{english}}) => {
    if(max < english) {
        acc = {name:name, max: english};
    }
    return acc;
    }, {name: '', max: 0});
    
console.log(biggest);
*/
