//Ask the user for their grade.
let grade = prompt("What is your grade?")
gradeNumb = parseInt(grade)

if(gradeNumb > 90){
	console.log("A")
}
//If the grade is bigger than 90, console.log “A”

else if(gradeNumb >80){
		console.log("B")
}
//If the grade is between 80 and 90 (included), console.log “B”

else if(gradeNumb >=70){
		console.log("C")
}
//If the grade is between 70(included) and 80 (included), console.log “C”
else if(gradeNumb < 70){
		console.log("D")
}
//If the grade is lower than 70, console.log “D”
else {
	console.log("You shold write your grade. Please, refresh the page and try again.")
}