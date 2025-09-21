// indexcontroller.js
// Implement sign up and sign in      


const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    const x = req.body.x;
    const y = req.body.y;
   
    res.json({ message: `Hello World! ${x} x ${y} = ${x * y}` });
  });       

module.exports = router;