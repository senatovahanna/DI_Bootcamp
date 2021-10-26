// Exercise 1 INFORMATION
//Part1
let infoAboutMe = {
		name: "Hana",
		age: 25 ,
		hobbies: "knitting",
		aboutMe: function() {
			console.log("Hello! My name is " + this.name + " and I'm " + this.age + "y.o. My hobby is: " + this.hobbies)
		}
}
infoAboutMe.aboutMe();

//Part2
function infoAboutPerson(name, age, color) {
		console.log("Your name is " + name + " you are " + age + ", your favourite color is " + color)
		}

infoAboutPerson("David", 45, "blue");
infoAboutPerson("John", 12, "yellow");



// Exercise 2 : Keyless Car
var userAge = number(prompt("What is your age?"));

function checkDriverAge(age) {
	if(age < 18) {
		alert(“Sorry, you are too young to drive this car.Powering off”);
	} else if (age > 18) {
		alert(“You are old enough to drive, Powering On. Enjoy the ride!”);
	} else if (age === 18) {
		alert(“Congratulations on your first year of driving. Enjoy the ride!”);
	} else () {
		alert(“Opps smth went wrong. Please try again and put data in full years”);

	}
}
checkDriverAge(age);



// Exercise 3: Odd Or Even
checkNumber = () => {
	let i = 0;

	while (i < 100, i++) {
		if (!(i%2)) {
			console.log("the number ${i} is even");
		} else {
			console.log("the number ${i} is odd");
		}
	}
}
checkNumber();


//Exercise 4 : Tips

