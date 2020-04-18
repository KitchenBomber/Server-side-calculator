console.log('JS');

$(document).ready(onReady);

function onReady(){
    console.log('Jquery ready');
    getCalculationData();
    $("#valuesIn").on('click', objectPacker);
    
}

let objectToSend = {};

function appendToDom(){
    console.log('in appendToDom');
    //this function will need to take the anser: off the first item in the array and send it to #calculationOut then it will need to put the full array on the dom 
}

function getCalculationData (){
    console.log('in getCalculationData');
    $.ajax({
        type: 'GET',
        url: '/calculations',
        data: 'objectToSend'
    }).then(function (response){
        console.log(('back from server with:'), response);
        //this is where data in the array is thrown to the function that will append it to the DOM
        appendToDom();
    }).catch( function (error){
        alert('problem! check console');
        console.log(error);
    })
}


function sendCalcToServer(req){
    // I need to pack the inputs into 
    console.log(( 'in sendCalcToServer'));
    $.ajax({
        type: 'POST',
        url: "/calculations",
        data: req
    }).then(function (response){
        console.log(response);
        getCalculationData();
    }).catch(function(error){
        alert('Error from POST')
        console.log(error);
    })
}

function objectPacker(){
    console.log('in ObjectPacker');
    let el = objectToSend;
    el ={
        firstNumber: $('#firstNumber').val(),
        operator: $('#operator').val(),
        secondNumber: $('#secondNumber').val(),
        answer: ''
    };
    console.log(el);
    sendCalcToServer(el);
}
    // let operator = $("#operator").val();
    // if (operator === "+"){
    //     console.log("call the addition function");
    // this is roughly how i'll be checking which path to take in the server function 
        

    // let B = $("#secondNumber").val();
    // let answer = (`$("#firstNumber").val(), $("#operator").val(), $("#secondNumber").val()`);
    // console.log(A);
    // console.log(operator);
    // console.log(B);
    // console.log(answer);

