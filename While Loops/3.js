
//Using break - Loop through a block of code, but exit the loop when i == 3.

let text = "";
let i = 0;
while (i < 5) {
  text += i + '\n';
  i++;
  if (i == 3) break;
}
console.log(text);