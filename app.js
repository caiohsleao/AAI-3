var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());

app.get('/', function(req, res) {
  res.send('Oi, mundo :-)');
});

var port = 3001;

// iniciando o processo do servidor
app.listen(port, function() {
  console.log(`App de Exemplo escutando na porta http://localhost:${port}/`);
});

//Função de SOMA: 

app.post('/soma', function (req, res) {
  var body = req.body;
  var resultado = soma(body.a, body.b);
  
  res.send(`O resultado da soma de ${body.a} e ${body.b} é ${resultado}`);
  });

  function soma(a, b) {
  return a + b;
}

//Função de SUBTRAÇÂO:

app.post('/sub', function (req, res) {
  var body = req.body;
  var resultado = sub(body.a, body.b);
  
  res.send(`O resultado da subtracao de ${body.a} e ${body.b} é ${resultado}`);
  });

  function sub(a, b) {
  return a - b;
}

//Função de Divisão:

app.post('/div', function (req, res) {
  var body = req.body;
  var resultado = div(body.a, body.b);
  
  res.send(`O resultado da divisão de ${body.a} e ${body.b} é ${resultado}`);
  });

  function div(a, b) {
  return a / b;
}

//Função de Multiplicação:

app.post('/mult', function (req, res) {
  var body = req.body;
  var resultado = mult(body.a, body.b);
  
  res.send(`O resultado da multiplicação de ${body.a} e ${body.b} é ${resultado}`);
  });

  function mult(a, b) {
  return a * b;
  }



