// dto/jsonrpc-request.js

class JsonRpcRequest {
    constructor(method, params, id) {
        this.jsonrpc = "2.0";
        this.method = method;
        this.params = params;
        this.id = id;
    }
    toJson() {
        return {
            jsonrpc: this.jsonrpc,
            method: this.method,
            params: this.params,
            id: this.id
        };
    }
}

module.exports = JsonRpcRequest;