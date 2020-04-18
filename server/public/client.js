console.log('JS');

$(document).ready(onReady);

function onReady(){
    console.log('Jquery ready');
    getCalculationData();
    $("#valuesIn").on('click', sendCalcToServer);
    
}

function getCalculationData (){
    console.log('in getCalculationData');
    $.ajax({
        type: 'GET',
        url: '/calculations',
        data: 'array'
    }).then(function (response){
        console.log(('back from server with:'), response);
        //using the array data happens here
    }).catch( function (err){
        alert('problem! check console');
        console.log(err);
    })
}


function sendCalcToServer(){
    // let A = $("#firstNumber").val();
    console.log(( 'in sendCalcToServer'));
    $.ajax({
        type
    })
    
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
