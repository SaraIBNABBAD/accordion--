
let divs = document.getElementsByClassName("head");
let icone = document.querySelectorAll("i");


for (let i = 0; i < divs.length; i++) {
    divs[i].addEventListener("click", function () {
      let parage = document.getElementsByClassName("content");
      parage[i].classList.toggle("hide");
      if(parage[i].classList.contains("hide")){
        icone[i].classList.replace("fa-minus","fa-plus");
    }else{
        icone[i].classList.replace("fa-plus","fa-minus");
    }
    });
  }