const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.use('/v1', require('./controllers/v1/indexcontroller'));
app.use('/v1/calc', require('./controllers/v1/calculatorcontroller'));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
