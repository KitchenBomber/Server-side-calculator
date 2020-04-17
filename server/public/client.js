console.log('JS');

$(document).ready(onReady);

function onReady(){
    console.log('Jquery ready');
    $("#valuesIn").on('click', sendCalcToServer);
    
}

function sendCalcToServer(){
    // let A = $("#firstNumber").val();
    let operator = $("#operator").val();
    if (operator === "+"){
        console.log("call the addition function");
        
    }
    // let B = $("#secondNumber").val();
    // let answer = (`$("#firstNumber").val(), $("#operator").val(), $("#secondNumber").val()`);
    // console.log(A);
    // console.log(operator);
    // console.log(B);
    // console.log(answer);
    
}