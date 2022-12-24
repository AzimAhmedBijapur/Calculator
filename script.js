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

// Input numbers

var num=document.querySelectorAll('.buttonCol[data-number]');

for(let i=0;i<=9;i++){

    num[i].addEventListener('click',()=>{
        
        console.log(num[i].getAttribute('data-number'));

        var operation=document.querySelector('.operation');
        
        var alreadyThere=operation.textContent;

        operation.textContent=alreadyThere+num[i].getAttribute('data-number');
    })
}

//Input operators

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

    var result= document.querySelector('.result');

    result.textContent='';

});

//Backspace

var bsp = document.getElementById('bsp');

bsp.addEventListener('click',()=>{

    var operation=document.querySelector('.operation');

    var content=operation.textContent.substring(0,operation.textContent.length-1);

    operation.textContent=content;

});

//Perform operation

var eq= document.getElementById('equals');

eq.addEventListener('click',operate);

function operate(){

    var exp=document.querySelector('.operation').textContent;

    var opcode = exp.split(RegExp("(?<=[-+*/%])|(?=[-+*/%])"));

    var num=[];

    var op=[];

    for(let i=0;i<opcode.length;i++){

        if(isNaN(opcode[i]))
        op.push(opcode[i]);

        else
        num.push(opcode[i]);
    }

    var finalRes=0;

    for(let i=0;i<opcode.length-1;i++){

        if(finalRes==0)
        {
            if(op[i]=='+'){
                finalRes=sum(Number(num[i]),Number(num[i+1]));
                console.log(finalRes,'add');
            }
            else if(op[i]=='-'){
                finalRes=sub(Number(num[i]),Number(num[i+1]));
                console.log(finalRes,'sub');
            }
            else if(op[i]=='*'){
                finalRes=mul(Number(num[i]),Number(num[i+1]));
                console.log(finalRes,'mul');
            }
            else if(op[i]=='/'){
                finalRes=div(Number(num[i]),Number(num[i+1]));
                console.log(finalRes,'div');
            }
            else if(op[i]=='%'){
                finalRes=mod(Number(num[i]),Number(num[i+1]));
                console.log(finalRes,'mod');
            }
        }
        
        else{
            if(op[i]=='+'){
                finalRes=sum(Number(finalRes),Number(num[i+1]));
                console.log(finalRes,'add');
            }
            else if(op[i]=='-'){
                finalRes=sub(Number(finalRes),Number(num[i+1]));
                console.log(finalRes,'sub');
            }
            else if(op[i]=='*'){
                finalRes=mul(Number(finalRes),Number(num[i+1]));
                console.log(finalRes,'mul');
            }
            else if(op[i]=='/'){
                finalRes=div(Number(finalRes),Number(num[i+1]));
                console.log(finalRes,'div');
            }
            else if(op[i]=='%'){
                finalRes=mod(Number(finalRes),Number(num[i+1]));
                console.log(finalRes,'mod');
            }
        }

    }
    
    document.querySelector('.result').textContent=finalRes;
    document.querySelector('.operation').textContent=finalRes;
}

var buttons=document.querySelectorAll('.buttonCol');

for(let i=0;i<buttons.length;i++){
    
    var audio=document.querySelector('audio');

    buttons[i].addEventListener('click',()=>{

        audio.play();
        audio.currentTime=0;

    })
}