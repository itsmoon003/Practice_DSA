//Using continue - Loop through a block of code, but skip the value 3.

let text = "";
let i = 0;
while (i < 5){
    
   
    if(i==3){ 
        i++;
        continue;
    } else {
    text += i + '\n';
    i++;
    }
    
}

console.log(text);

//0
//1
//2
//4




