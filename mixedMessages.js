const sortingHat = { //creates an object called sortingHat
 houses: ['Gryffindor' , 'Hufflepuff', 'Ravenclaw', 'Slytherin'], // creates house property initialised to an array of four houses
 bloodStatuses: ['Muggle Born' , 'Half-Blood' , 'Pure Blood'], // creates a blood status property initiliased to an array of three options
 favouriteSubjects: ['Herbology' , 'Potions' , 'Charms', 'Care of Magical Creatures' , 'Transifugration' , 'Defence Against the Dark Arts' , 'Divination'], // creates subject property initialised to an array of seven subjects
 
 get houses () {
     return this.houses;
 },
 get bloodStatuses () {
    return this.bloodStatuses;
},
get favouriteSubjects () {
    return this.favouriteSubjects;
},
 
 generateRandomValueFromKey (_parameter) {
     let randomValue = _parameter;
     let randomNumber = Math.floor(Math.random() * randomValue.length);
     return randomValue[randomNumber];
 },

 generateRandomMessage () {
     const house = this.generateRandomValueFromKey ('houses');
     const bloodStaus = this.generateRandomValueFromKey ('bloodStatuses');
     const favouriteSubject = this.generateRandomValueFromKey ('favouriteSubjects');
        return `Your house is ${house}, your blood status is ${bloodStaus}, and your favourite subject is ${favouriteSubject}.`;
 }
}

console.log(sortingHat.generateRandomMessage());