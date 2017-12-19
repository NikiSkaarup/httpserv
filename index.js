const express = require('express');
const bodyparser = require('body-parser');
const app = express();
app.use(bodyparser.json());
const PORT = 3000;

app.get('/:data', (req, res) => {
  console.log('GET:');
  console.log(`PARAMS: ${req.params['data']}`);
  console.log(`BODY  : ${req.body}`);
  res.send('OK - GET');
});

app.post('/:data', (req, res) => {
  console.log('POST');
  console.log(`PARAMS: ${req.params['data']}`);
  console.log(`BODY  : ${req.body}`);
  res.send('OK - POST');
});

app.listen(PORT, () => {
  console.log(`Httpserv listening on port ${PORT}`);
});
