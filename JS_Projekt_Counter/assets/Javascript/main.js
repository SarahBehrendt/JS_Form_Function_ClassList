
const output = document.querySelector(".output");
let counter = 0;
output.innerHTML = counter;



function calc(input){
     counter += input;
     output.innerHTML = counter;
}

function reset(){
   counter = 0 ;
   output.innerHTML = counter;
}

function double(){
    counter = counter*2 ;
    output.innerHTML = counter;
}



