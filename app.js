import bodyParser from 'body-parser';
import logger from 'morgan';
import express from 'express';
const app = express();
const PORT = process.env.PORT || 3100;
#testtest
app.use(logger('dev'));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (req, res) => {
    res.send('This is a short tutorial on USSD app')
});

app.post('*',(req,res) => {

    let {sessionId, servveCode, phoneNumber, text} = req.body;

    // first level response
    if( text === ""){
        let response = `
        CON Welcome to my simple loan USSD App. Select optionns from below
        1. Take a loan
        2. Loan Balance
        3. Check Eligility
        `;
    res.send(response);

    } else if( text === '1') {
        // buz logic for first level
       let response = `
       CON Choose from the options below
       1. KSH 1000
       2. KSH 3000
       3. KSH 5000
       4. KSH 7000
       `;
       res.send(response);

    } else if(text === '2'){
        let balance = '5000';
        let response = `END Your loan balance is -${balance}
        Please pay up in time.
        `
        res.send(response);

    } else if(text === '3'){
        let response = `END You are currently eligible for loan`
        res.send(response);

    } else if(text === '1*1'){
        let balance = 1000;
        let response = `END Your accout balance has been credited with KSH ${balance}`
        res.send(response);

    } else if(text === '1*2'){
        let balance = 3000;
        let response = `END Your accout balance has been credited with KSH  ${balance}`
        res.send(response);
    
    } else if(text === '1*3'){
        let balance = 5000;
        let response = `END Your accout balance has been credited with KSH ${balance}`
        res.send(response);
    
    } else if(text === '1*4'){
        let balance = 4000;
        let response = `END Your accout balance has been credited with KSH ${balance}`
        res.send(response);

    } else {
        res.status(400).send('Bad request');
    }
});

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
})

