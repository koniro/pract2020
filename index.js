const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

app.get('/', function (request, response) {
    response.send('This is my JS calculator')
  })

app.post("/first", function(request, response) {
    const { arg1, arg2, op } = request.body;
    if ( Number.isFinite(arg1) && Number.isFinite(arg2)){
        
        switch (op) {
            case '+':
                response.status(200).json(arg1 + arg2);
                break;
            case '-':
                response.status(200).json(arg1 - arg2);
                break;
            case '*':
                response.status(200).json(arg1 * arg2);
                break;
            case '/':
                response.status(200).json(arg1 / arg2);
                break;
            case '**':
                response.status(200).json(Math.pow(arg1 , arg2));
                break;
            case '%':
                response.status(200).json(arg1 + ' % от ' + arg2 + ' = ' + arg1 * (arg2/100));
                break;
            default: 
                response.status(400).json('Ошибка'); 
                break;
            
        }
    }else{
        response.status(400).json('Ошибка: введите числа');
    }
   
    });

app.post("/second", function(request, response){
        const {arg,oper} = request.body;
        
       
        switch (oper){
            case 'v':
                response.status(200).json(Math.sqrt(arg));
            break;
            case 'sin':
                response.status(200).json(Math.sin(arg));
            break;
            case'cos':
                response.status(200).json(Math.cos(arg));
            break;
            case 'tg':
                response.status(200).json(Math.tan(arg));
            case 'ctg':
                response.status(200).json(1/Math.tan(arg));
            break;
        default: 
            response.status(400).json('Ошибка'); 
            break;
        }});


app.listen(2121);