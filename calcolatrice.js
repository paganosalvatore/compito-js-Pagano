const prompt = require("prompt-sync")();

function calc(a,b,op){
    return op(a,b);
}
function add(a,b){
    return a+b;
}
function sub(a,b){
    return a-b;
}
function mol(a,b){
    return a*b;
}
function div(a,b){
    return a/b;
}
let user_num1= prompt("inserire primo numero ");
let user_num2= prompt("inserire secondo numero ");
let user_command = prompt(`
Scegli un operazione:
1) Addizione
2) Sottrazione
3) Moltilpicazione
4) Divisione
5) Cronologia
`)

user_num1= Number(user_num1); //si transforma in num perche lo prende sopra come char
user_num2= Number(user_num2);
user_command= Number(user_command);
let history=[];
let i=1;
//while(i>0)
{
switch(user_command){
    case 1:
        ris=calc(user_num1,user_num2,add);
        console.log(`${user_num1} + ${user_num2} = ${ris}`);
        history.push(`${user_num1} + ${user_num2} = ${ris}`);
        console.log(history);
        break;
    case 2:
        ris=calc(user_num1,user_num2,sub);
        console.log(`${user_num1} - ${user_num2} = ${ris}`);
        history.push(`${user_num1} - ${user_num2} = ${ris}`);
        break;
    case 3:
        ris=calc(user_num1,user_num2,mol);
        console.lo+g(`${user_num1} * ${user_num2} = ${ris}`);
        history.push(`${user_num1} * ${user_num2} = ${ris}`);
        break;
    case 4:
        ris=calc(user_num1,user_num2,div);
        console.log(`${user_num1} / ${user_num2} = ${ris}`);
        history.push(`${user_num1} / ${user_num2} = ${ris}`);
        break;
    case 5:
        
        console.log(history);
}
}