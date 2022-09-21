let cars = ["BMW", "Volvo", "Saab", "Ford"];

let text ="";
let i =cars.length-1;
while(i >= 0){
text += cars[i]+'\n';
i--;
}
console.log(text);