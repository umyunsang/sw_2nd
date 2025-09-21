// index.js

const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
app.use('/jsonrpc', require('./controllers/jsonrpc-controller'));

app.listen(port, () => {
    console.log(`JSONRPC server is running on port ${port}`);
});