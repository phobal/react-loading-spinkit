const http = require('http');
const express = require('express');
const path = require('path');

const app = express();
const server = http.createServer(app);

const port = '8085';

app.use('/', express.static(path.join(__dirname, '../')));
// app.get('/', (req, resp) => {
//   resp.render('index.html');
// });

server.listen(port, 'localhost', (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`服务运行在端口:${port}`);
  }
});
