const findTheOldest = function(people) {
    return people.sort(function(a, b) {
        const lastPersonAge = (a.yearOfDeath || new Date().getFullYear()) - a.yearOfBirth;
        const nextPersonAge = (b.yearOfDeath || new Date().getFullYear()) - b.yearOfBirth;
        return nextPersonAge - lastPersonAge; // Ordered from oldest to younger
    })[0]; // Take the first one, the oldest person
};


// Do not edit below this line
module.exports = findTheOldest;
