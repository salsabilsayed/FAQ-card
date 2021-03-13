let par = document.querySelectorAll('.question p:last-of-type');
let dropImg =  document.querySelectorAll('.question img');
let question = document.querySelectorAll('span');


dropImg[0].addEventListener('click', function(){
    this.classList.toggle("drop-img");
    par[0].classList.toggle("appear");
    question[0].classList.toggle('bold-span');
});
dropImg[1].addEventListener('click', function(){
    this.classList.toggle("drop-img");
    par[1].classList.toggle("appear");
    question[1].classList.toggle('bold-span');
});
dropImg[2].addEventListener('click', function(){
    this.classList.toggle("drop-img");
    par[2].classList.toggle("appear");
    question[2].classList.toggle('bold-span');
});
dropImg[3].addEventListener('click', function(){
    this.classList.toggle("drop-img");
    par[3].classList.toggle("appear");
    question[3].classList.toggle('bold-span');
});
dropImg[4].addEventListener('click', function(){
    this.classList.toggle("drop-img");
    par[4].classList.toggle("appear");
    question[4].classList.toggle('bold-span');
});


