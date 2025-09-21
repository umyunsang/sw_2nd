// controllers/jsonrpc-controller.js

const express = require('express');
const router = express.Router();
const JsonRpcRequest = require('../dto/jsonrpc-request');
const JsonRpcResponse = require('../dto/jsonrpc-response');


router.post('/', (req, res) => {
    const { method, params, id } = req.body;

    const jsonRpcRequest = new JsonRpcRequest(method, params, id);
    const jsonRpcResponse = new JsonRpcResponse(id, `${method} has been called`, undefined);
    res.json(jsonRpcResponse.toJson());
});

module.exports = router;