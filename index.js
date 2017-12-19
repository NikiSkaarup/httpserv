const express = require('express');
const app = express();
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
