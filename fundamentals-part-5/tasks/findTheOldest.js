const people = [
    {
      name: "Carly",
      yearOfBirth: 1942,
      yearOfDeath: 1970,
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
  ]

const findTheOldest = function(arr) {
    let ages = [];

    for (let listElement in arr) {
        let age = arr[listElement];
        let livedYears = age.yearOfDeath - age.yearOfBirth;
        ages.push(livedYears);
    };
    let oldestAge = Math.max(...ages);
    console.log(oldestAge)
};

console.log(findTheOldest(arr=people));