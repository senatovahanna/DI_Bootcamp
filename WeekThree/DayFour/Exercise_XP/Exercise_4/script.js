

let users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"];
var len = users.length; 

if (!len) {
  console.log("no one is online.");
} else if (len === 1) {
  console.log(users[0] + " is online");
} else if (len === 2) {
  console.log(users[0] + " and " + users[1] + " are online");
} else {
  console.log(users[0] + " , " + users[1] + " and two more are online.");
}