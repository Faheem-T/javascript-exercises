const findTheOldest = function(people) {
    // year of death - year of bith = age
    // if year of death not defined, use currentyear
    const currentYear = new Date().getFullYear();
    const oldest = people.reduce((oldest, person) => {
        const oldAge = getAge(
            oldest.yearOfBirth,
            oldest.yearOfDeath
        );
        const currentAge = getAge(
            person.yearOfBirth,
            person.yearOfDeath
        );

        return currentAge > oldAge ? person : oldest;
    });
    return oldest;
};

function getAge(birth, death) {
    if (!death) {
        death = new Date().getFullYear();
    }
    return death - birth;
}
// Do not edit below this line
module.exports = findTheOldest;
