let length = 6;
let string = "";
for (let i = 0; i < length; i++) {
  for (let x = 0; x <= i; x++) {
    string += "* ";
  }
  string += "<br>";
}
document.write(string);