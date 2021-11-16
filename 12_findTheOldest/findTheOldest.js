const findTheOldest = function(people) {
    return people
        .map(obj => obj.hasOwnProperty('yearOfDeath') 
            ? obj 
            : {...obj, yearOfDeath : new Date().getFullYear()})
        // .forEach(obj => console.log(obj))
        .reduce((acc, cur) => acc.yearOfDeath - acc.yearOfBirth > cur.yearOfDeath - cur.yearOfBirth ? acc : cur, 0);
};

findTheOldest([
  {
    name: "Carly",
    yearOfBirth: 1066,
  },
  {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
  },
  {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
  },
]);
// Do not edit below this line
module.exports = findTheOldest;
