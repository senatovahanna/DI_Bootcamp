// Exercise 1 : Your Favorite Colors

let colors = ["green", "blue", "white"];
for (let i=0; i < colors.length; i++) {
	console.log("My #" + (i+1) + " choise is " + (colors[i]) );
}




// Exercise 2 : List Of People

let people = ["Greg", "Mary", "Devon", "James"];
people.shift();
console.log(people);
people.splice(2,1, "Jason");
console.log(people);
people.push("Hana");
console.log(people);
// Using a loop, iterate through the people array and console.log each person.
	for (let i of people) {
		console.log(i);
	}
// Using a loop, iterate through the people array and after you console.log “Jason” exit the loop. Hint: take a look at the break statement in the lesson.
	for (let i = 0; i < people.length; i++) {
		console.log(people[i]);
		if (i == 2 ) break;
}

console.log(people.slice(1, 3)); 
console.log(people.indexOf("Mary"));
console.log(people.indexOf("Foo")); // "Foo" does not exist in the array, that's why it turned -1
let last = people[people.length - 1];
console.log(last);




// Exercise 3 : Repeat The Question

let num = prompt("Give me any number pls")
	do {
		prompt("Give me any number pls")
		num++;
	}
	while (num < 10);



// Exercise 4 : Building Management

let building = {
    numberOfFloors : 4,
    numberOfAptByFloor : {
        firstFloor : 3,
        secondFloor : 4,
        thirdFloor : 9,
        fourthFloor : 2,
    },
    nameOfTenants : ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan :  [4, 1000],
        david : [1, 500],
    },
}
console.log(building.numberOfFloors);
console.log(building.numberOfAptByFloor.firstFloor + ", " + building.numberOfAptByFloor.thirdFloor); 
console.log(building.nameOfTenants[1] + ", " + building.numberOfRoomsAndRent.dan[0]);
	if (building.numberOfRoomsAndRent.sarah[1] + building.numberOfRoomsAndRent.david[1] > building.numberOfRoomsAndRent.dan[1]) {
     building.numberOfRoomsAndRent.dan[1] = 1200;
}
	console.log(building.numberOfRoomsAndRent.dan[1]);


// Exercise 6 

let details = {
  my: 'name',
  is: 'Rudolf',
  the: 'raindeer'
}
// Given the object above, console.log “my name is Rudolf the raindeer”
for (let x in details) {
	console.log(x);
}
for (let [x, value] of Object.entries(details)) {
	console.log(`${value}`);
}



// Exercise 7 : Secret Group

let names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"]
names.sort();

for (let i = 0; i < names.length; i++) {
	let element = names[i];
	if ((element = element.slice(0, 1))) {
	}
	console.log(element);
}
