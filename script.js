// Mathematical operations

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
        
        // console.log(num[i].getAttribute('data-number'));

        var operation=document.querySelector('.operation');
        
        var alreadyThere=operation.textContent;

        operation.textContent=alreadyThere+num[i].getAttribute('data-number');
    })
}

//Input operators

var operator = document.querySelectorAll('.buttonCol[data-value]');

for(let i=0;i<6;i++){

        operator[i].addEventListener('click',()=>{
        
        // console.log(operator[i].getAttribute('data-value'));

        var operation=document.querySelector('.operation')
        
        var alreadyThere=operation.textContent;

        operation.textContent=alreadyThere+operator[i].getAttribute('data-value');
    })
}

//Clear button

function clearIt(){

    var operation=document.querySelector('.operation');

    operation.textContent='';

    var result= document.querySelector('.result');

    result.textContent='';

}


//Backspace

function backSpace(){

    var operation=document.querySelector('.operation');

    var content=operation.textContent.substring(0,operation.textContent.length-1);

    operation.textContent=content;
}


//Perform operation

var eq= document.getElementById('equals');

eq.addEventListener('click',operate);

function operate(){

    var exp=document.querySelector('.operation').textContent;

    var opcode = exp.split(RegExp("(?<=[-+*/%])|(?=[-+*/%])"));

    var num=[];//Array of operands

    var op=[];//Array of operators

    for(let i=0;i<opcode.length;i++){

        if(isNaN(opcode[i]))
        op.push(opcode[i]);

        else
        num.push(opcode[i]);
    }

    var finalRes=0;

    for(let i=0;i<opcode.length-1;i++){

        //If no previous operations were done

        if(finalRes==0)
        {
            if(op[i]=='+'){
                finalRes=sum(Number(num[i]),Number(num[i+1]));
                // console.log(finalRes,'add');
            }
            else if(op[i]=='-'){
                finalRes=sub(Number(num[i]),Number(num[i+1]));
                // console.log(finalRes,'sub');
            }
            else if(op[i]=='*'){
                finalRes=mul(Number(num[i]),Number(num[i+1]));
                // console.log(finalRes,'mul');
            }
            else if(op[i]=='/'){
                finalRes=div(Number(num[i]),Number(num[i+1]));
                // console.log(finalRes,'div');
            }
            else if(op[i]=='%'){
                finalRes=mod(Number(num[i]),Number(num[i+1]));
                // console.log(finalRes,'mod');
            }
        }
        
        //If there is a result of previous operation 

        else{
            if(op[i]=='+'){
                finalRes=sum(Number(finalRes),Number(num[i+1]));
                // console.log(finalRes,'add');
            }
            else if(op[i]=='-'){
                finalRes=sub(Number(finalRes),Number(num[i+1]));
                // console.log(finalRes,'sub');
            }
            else if(op[i]=='*'){
                finalRes=mul(Number(finalRes),Number(num[i+1]));
                // console.log(finalRes,'mul');
            }
            else if(op[i]=='/'){
                finalRes=div(Number(finalRes),Number(num[i+1]));
                // console.log(finalRes,'div');
            }
            else if(op[i]=='%'){
                finalRes=mod(Number(finalRes),Number(num[i+1]));
                // console.log(finalRes,'mod');
            }
        }

    }
    
    //Update the result

    if(finalRes<100000000000000){

        document.querySelector('.result').textContent=finalRes.toFixed(7);
        document.querySelector('.operation').textContent=finalRes.toFixed(7);
    }
    else if(isNaN(finalRes)){

        document.querySelector('.result').textContent='Invalid';
    }
    else{
        document.querySelector('.result').textContent='Out of Range';
    }
}

//Audio on click

var buttons=document.querySelectorAll('.buttonCol');

for(let i=0;i<buttons.length;i++){
    
    var audio=document.querySelector('audio');

    buttons[i].addEventListener('click',()=>{

        audio.play();
        audio.currentTime=0;

    })
}
//Adding key listeners

document.addEventListener('keydown',e=>{

    console.log(e.key);

    e.preventDefault(); // Firefox has a default listener to '/'

    var reg= new RegExp('[0-9]');

    if(e.key==='Shift' ){

        document.querySelector('.operation').textContent+='';
    }
    else if(e.key=='+'||e.key=='-'||e.key=='/'||e.key=='%'||e.key=='*'||e.key=='.')
    {
        document.querySelector('.operation').textContent+=e.key;
    }
    else if(e.key=='Enter'){

        operate();
    }
    else if(e.key=='Escape'){
        clearIt();
    }
    else if(e.key=='Backspace')
    {
        backSpace();
    }
    else if(e.key.match(reg)){

        document.querySelector('.operation').textContent+=Number(e.key);
    }
    else{
        document.querySelector('.operation').textContent+='';
    }
})