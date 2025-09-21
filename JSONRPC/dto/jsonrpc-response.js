// dto/jsonrpc-response.js

class JsonRpcResponse {
    constructor(id, result, error) {
        this.jsonrpc = "2.0";
        this.id = id;
        this.result = result;
        this.error = error;
    }

    toJson() {
        return {
            jsonrpc: this.jsonrpc,
            id: this.id,
            result: this.result,
            error: this.error
        };
    }
}

module.exports = JsonRpcResponse;