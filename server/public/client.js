console.log('JS');

$(document).ready(onReady);

function onReady() {
    console.log('Jquery ready');
    getCalculationData();
    $("#valuesIn").on('click', objectPacker);
    $('#clearValues').on('click', thePurge);
    //may need to create a clearTheDom function to run at start

}

// let objectToSend = {};

function appendToDom(array) {
    // if (array[0] != undefined) {
        console.log('running appendToDom');
        // $('#calculationOut').empty();
        // console.log(array[0].answer);
        // $('#calculationOut').append(array[0].answer);
        // if i can mvoe this to the end of the .then of the getCalculationData i won't have the DOM displaying an old answer after a refresh.
        let el = $('#prevCalcs')
        el.empty();
        for (let i = 0; i <array.length; i++) {
            let objectProperty = array[i];
            el.append(`<li> ${objectProperty.firstNumber} ${objectProperty.operator} ${objectProperty.secondNumber} = ${objectProperty.answer} </li>`)

            
        }

        // for (const objectProperty of array) {

    // } else {
    //     console.log('no data yet');
    //     $('#calculationOut').empty();
    // }

}
//     if (array[0].answer = true){
//     console.log('in appendToDom', array);
//     $('#calculationOut').empty();
//     console.log(array[0].answer);
//     $('#calculationOut').append(array[0].answer);
//         let el = $("#prevCalcs");
//         let calculation = array[0];
//         el.empty();
//         el.append(`<li> ${calculation.firstNumber} ${calculation.operator} ${calculation.secondNumber} ${calculation.answer}</li>`)
// } else {console.log('no data yet');
// }

//this function will need to take the anser: off the first item in the array and send it to #calculationOut then it will need to put the full array on the dom 


function getCalculationData() {
    console.log('in getCalculationData');
    $.ajax({
        type: 'GET',
        url: '/calculations',
        data: 'objectToSend'
    }).then(function (response) {
        console.log(('back from server with:'), response);
        $('#calculationOut').empty();
        if (response[0] != undefined){
        console.log(response[0].answer);
        $('#calculationOut').append(response[0].answer);
        }
        //this is where data in the array is thrown to the function that will append it to the DOM
        appendToDom(response);
    }).catch(function (error) {
        alert('problem! check console');
        console.log(error);
    })
}


function sendCalcToServer() {
    // I need to pack the inputs into 
    console.log(('in sendCalcToServer'));
    $.ajax({
        type: 'POST',
        url: "/calculations",
        data: objectToSend
    }).then(function (response) {
        console.log(response);
        getCalculationData();
    }).catch(function (error) {
        alert('Error from POST')
        console.log(error);
    })
}

function objectPacker() {


    console.log('in ObjectPacker');
    objectToSend = {
        firstNumber: $('#firstNumber').val(),
        operator: $('#operator').val(),
        secondNumber: $('#secondNumber').val(),
        answer: ''
    };
    console.log(objectToSend);
    sendCalcToServer(objectToSend);
}

function thePurge(){
    console.log('in thePurge');
    $('#firstNumber').val('');
    $('#operator').val("+");
    $('#secondNumber').val('')
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

