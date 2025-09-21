# JSON-RPC Migration Practice

This repository contains two small Express applications that were built during the second software training to explore how to move from a conventional HTTP REST style API to a JSON-RPC workflow and to review the surrounding technology stack.

- `HTTP/`: baseline Express API that exposes a simple greeting endpoint and a calculator over REST routes.
- `JSONRPC/`: follow-up implementation that accepts JSON-RPC 2.0 requests and returns JSON-RPC responses using lightweight request/response DTO classes.

## Project Structure

```
├── HTTP
│   ├── controllers/v1/indexcontroller.js   # "hello" style POST endpoint: multiplies two numbers
│   ├── controllers/v1/calculatorcontroller.js   # add/sub/mul/div REST calculator
│   └── index.js   # Express bootstrap (port 3000)
├── JSONRPC
│   ├── controllers/jsonrpc-controller.js   # Single JSON-RPC entry point
│   ├── dto/jsonrpc-request.js              # JSON-RPC request DTO
│   ├── dto/jsonrpc-response.js             # JSON-RPC response DTO
│   └── index.js                            # Express bootstrap (port 3000)
└── README.md
```

Each folder keeps its own `package.json` and `node_modules`. Run one server at a time because both default to port `3000`.

## Prerequisites

- Node.js 20+ (LTS is recommended)
- npm (ships with Node.js)

## Running the REST Example (`HTTP/`)

```bash
cd HTTP
npm install
node index.js
```

Example requests:

```bash
curl -X POST http://localhost:3000/v1 \
  -H "Content-Type: application/json" \
  -d '{"x": 2, "y": 3}'

curl -X POST http://localhost:3000/v1/calc/add \
  -H "Content-Type: application/json" \
  -d '{"a": 10, "b": 4}'

curl -X POST http://localhost:3000/v1/calc/div \
  -H "Content-Type: application/json" \
  -d '{"a": 10, "b": 0}'    # returns validation error
```

Key points:

- Standard Express routers map to resource-style paths.
- Request bodies use native JSON and are validated inline.
- Responses are classic REST JSON payloads (`{ result, message }`).

## Running the JSON-RPC Example (`JSONRPC/`)

```bash
cd JSONRPC
npm install
node index.js
```

Send JSON-RPC 2.0 payloads to `POST http://localhost:3000/jsonrpc`:

```bash
curl -X POST http://localhost:3000/jsonrpc \
  -H "Content-Type: application/json" \
  -d '{
    "jsonrpc": "2.0",
    "method": "calc.add",
    "params": {"a": 10, "b": 4},
    "id": 1
  }'
```

Expected response shape:

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": "calc.add has been called",
  "error": null
}
```

This controller simply echoes the method name and illustrates how to structure JSON-RPC requests and responses. Extend `jsonrpc-controller.js` to dispatch on `method` and apply your own domain logic.

## JSON-RPC Tech Stack Notes

- **Express 5**: HTTP transport layer. Even in JSON-RPC mode we still receive HTTP POST requests; Express handles routing and JSON body parsing.
- **Manual DTOs** (`dto/jsonrpc-request.js`, `dto/jsonrpc-response.js`): Keep the JSON-RPC 2.0 envelope consistent and decouple transport-specific logic from business handlers.
- **JSON-RPC 2.0 Specification**: Defines `jsonrpc`, `method`, `params`, `id`, `result`, and `error` fields. Requests and responses are plain JSON objects sent over HTTP.
- **Transition Considerations**: When migrating from REST to JSON-RPC, design a dispatcher that maps `method` strings to handlers, reuse validation from the REST version, and ensure clients can handle both success and error envelopes.

## Next Steps / Ideas

- Implement actual calculator logic inside the JSON-RPC controller, mirroring what exists in the REST example.
- Add automated tests (e.g., Jest or supertest) to confirm both REST and JSON-RPC endpoints behave as expected.
- Introduce a small client or Postman collection to demonstrate the request formats used in the exercise.

Happy experimenting!
