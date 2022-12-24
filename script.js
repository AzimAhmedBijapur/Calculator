function sum(a,b){
    return a+b;
}
function sub(a,b){
    return a-b;
}
function mul(a,b){
    return a*b;
}
function div(a,b){
    return a/b;
}
function mod(a,b){
    return a%b;
}

var num=document.querySelectorAll('.buttonCol[data-number]');

for(let i=0;i<=9;i++){

    num[i].addEventListener('click',()=>{
        
        console.log(num[i].getAttribute('data-number'));

        var operation=document.querySelector('.operation');
        
        var alreadyThere=operation.textContent;

        operation.textContent=alreadyThere+num[i].getAttribute('data-number');
    })
}

var operator = document.querySelectorAll('.buttonCol[data-value]');

for(let i=0;i<6;i++){

        operator[i].addEventListener('click',()=>{
        
        console.log(operator[i].getAttribute('data-value'));

        var operation=document.querySelector('.operation')
        
        var alreadyThere=operation.textContent;

        operation.textContent=alreadyThere+operator[i].getAttribute('data-value');
    })
}

//Clear button

var clr = document.getElementById('clr');

clr.addEventListener('click',()=>{

    var operation=document.querySelector('.operation');

    operation.textContent='';


});

//Backspace

var bsp = document.getElementById('bsp');

bsp.addEventListener('click',()=>{

    var operation=document.querySelector('.operation');

    var content=operation.textContent.substring(0,operation.textContent.length-1);

    operation.textContent=content;


});
