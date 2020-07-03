const express = require("express");
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.post("/", function(request, response) {
    const { firstArg, secondArg, operation } = request.body;
    if (operation === '+') {
        response.status(200).json(firstArg + secondArg);
    } else if (operation === '-') {
        response.status(200).json(firstArg - secondArg);
    } else if (operation === '/') {
        response.status(200).json(firstArg / secondArg);
    } else if (operation === '*') {
        response.status(200).json(firstArg * secondArg);
    }
});

app.listen(3000, () => {
    console.log('App started on https://localhost:3000');
});