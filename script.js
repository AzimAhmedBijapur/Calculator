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
function clear(){

}
function backspace(){

}

var num=document.querySelectorAll('.buttonCol[data-number]');
console.log(num);

for(let i=0;i<=9;i++){

    num[i].addEventListener('click',()=>{
        
        console.log(num[i].getAttribute('data-number'));

        var operation=document.querySelector('.operation')
        
        var alreadyThere=operation.textContent;
        operation.textContent=alreadyThere+num[i].getAttribute('data-number');
    })
}

