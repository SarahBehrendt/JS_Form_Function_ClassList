

function getInputValue(){
    const output = document.querySelector(".output");

    const age = Number(document.querySelector(".bDay").value);
    

    output.innerHTML = 2023 - age;
    

}