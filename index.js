const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.post("/", function(request, response) {
    const { arg1, arg2, op } = request.body;
    let result;
    switch (op) {
        case '+':
            result = arg1 + arg2;
            break;
        case '-':
            result = arg1 - arg2;
            break;
        case '*':
            result = arg1 * arg2;
            break;
        case '/':
            result = arg1 / arg2;
            break;
        case '**':
            result = Math.pow (arg1,arg2)
            break;
        case 'cor':
            result = Math.sqrt(arg1);
            break;
        
        

    }
    response.status(200).json(result);
});

app.listen(2121);