// calculatorcontroller.js
// 간단한 계산기 로직

const express = require('express');
const router = express.Router();

// 덧셈
router.post('/add', (req, res) => {
    const { a, b } = req.body;
    if (typeof a !== 'number' || typeof b !== 'number') {
        return res.status(400).json({ error: '숫자만 입력하세요' });
    }
    res.json({ result: a + b, message: `${a} + ${b} = ${a + b}` });
});

// 뺄셈
router.post('/sub', (req, res) => {
    const { a, b } = req.body;
    if (typeof a !== 'number' || typeof b !== 'number') {
        return res.status(400).json({ error: '숫자만 입력하세요' });
    }
    res.json({ result: a - b, message: `${a} - ${b} = ${a - b}` });
});

// 곱셈
router.post('/mul', (req, res) => {
    const { a, b } = req.body;
    if (typeof a !== 'number' || typeof b !== 'number') {
        return res.status(400).json({ error: '숫자만 입력하세요' });
    }
    res.json({ result: a * b, message: `${a} × ${b} = ${a * b}` });
});

// 나눗셈
router.post('/div', (req, res) => {
    const { a, b } = req.body;
    if (typeof a !== 'number' || typeof b !== 'number') {
        return res.status(400).json({ error: '숫자만 입력하세요' });
    }
    if (b === 0) {
        return res.status(400).json({ error: '0으로 나눌 수 없습니다' });
    }
    res.json({ result: a / b, message: `${a} ÷ ${b} = ${a / b}` });
});

// 계산기 정보
router.get('/', (req, res) => {
    res.json({
        name: '계산기 API',
        operations: ['add', 'sub', 'mul', 'div']
    });
});

module.exports = router;