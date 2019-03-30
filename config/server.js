const express = require('express');
const proxy = require('http-proxy-middleware');

const app = express();

app.use('/api', proxy({target: 'http://127.0.0.1/api', changeOrigin: true}));
app.listen(3000);