
function getInputValue(){
     const output = document.querySelector(".output");

      let num = Number(document.querySelector(".num").value);

      output.innerHTML = num *2;
}