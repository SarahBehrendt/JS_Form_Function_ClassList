

function getInputValue(){
    const output = document.querySelector(".output");

    const alter1 = Number(document.querySelector(".alter1").value);
    const alter2 = Number(document.querySelector(".alter2").value);
    

    output.innerHTML = alter1 - alter2;
    

}