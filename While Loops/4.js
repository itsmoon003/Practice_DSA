//Using continue - Loop through a block of code, but skip the value 3.

let text = "";
let i = 0;
while (i < 5){
    
    i++;
    if(i==3){ 
        continue;
    } else {
    text += i + '\n';
    }
   
}

console.log(text);

//1
//2
//4
//5



// It is not starting with i=0; I'll think to improve that!