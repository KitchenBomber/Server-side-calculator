const express = require('express');
const bodyParser = require('body-parser');

const app = express();
//Port to heroku or 5000
const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded ( {extended : true}));
app.use(express.static('server/public'));

const calculationResults = [];

function calculator (array){
    console.log('in calculator', array);
    let operator = array[0].operator;
    if (operator === "+"){
        array[0].answer = Number(array[0].firstNumber) + Number(array[0].secondNumber);
        console.log(array[0].answer);
    }
    if (operator === "-") {
        array[0].answer = Number(array[0].firstNumber) - Number(array[0].secondNumber);
        console.log(array[0].answer);
    }
    if (operator === "*") {
        array[0].answer = Number(array[0].firstNumber) * Number(array[0].secondNumber);
        console.log(array[0].answer);
    }
    if (operator === "/") {
        array[0].answer = Number(array[0].firstNumber) / Number(array[0].secondNumber);
        console.log(array[0].answer);
    }
    //this will evaluate the operator on the new data and append the calcution result to the object
    //then we will .unshift the appended item (so the newest item is on top) into the array and hand it back to the POST acceptor
    console.log(calculationResults);
    
    
}

app.get('/calculations',(req, res) =>{
    console.log('in /calculations GET', req.body);
    res.send(calculationResults);
}) //end GET calculations array

app.post ('/calculations', (req ,res) =>{
    console.log( "in the POST /calculations", req.body);
    calculationResults.unshift(req.body);
    calculator(calculationResults);
    res.send('Blimey');
    //this will be sending back an array with the new item in it.
    
})

app.listen(port, () => {
    console.log('listening on port', port)
});