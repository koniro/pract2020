const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

app.get('/', function (request, response) {
    response.send('This is my JS calculator')
  })

app.post("/first", (request, response) => {
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
                response.status(400).json('Ошибка: неверная команда. + сложение, - вычитание, * умножение, / деление, ** возведение в степень, % взятие процента.'); 
                break;
        }
    } else {
        response.status(400).json('Ошибка: введите числа');
    } 
});

app.post("/second", (request, response) => {
    const {arg,oper} = request.body;
    if ( Number.isFinite(arg) ) {
    
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
                break;
            case 'ctg':
                response.status(200).json(1/Math.tan(arg));
                break;
            
            default:
                response.status(400).json('Ошибка: неверная команда. v вычисление квадратного корня, sin вычисление синуса, cos вычисление косинуса, tg вычисление тангенса, ctg вычисление котангенса.'); 
                break;
        }
    } else {
        response.status(400).json('Ошибка: введите число');
    } 
});

        app.listen(2121);