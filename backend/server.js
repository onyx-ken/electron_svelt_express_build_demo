const express = require('express');
const path = require("path");
const FRONTEND_BUILD_PATH = path.join(__dirname, '../frontend/build');

// 1) Express 앱 생성
const app = express();

// JSON 바디 파싱 (POST 요청 시 body에 JSON 받을 수 있게 함)
app.use(express.json());

app.get('/api/ping', async (req, res) => {
    res.json({
        message: 'pong',
        timestamp: new Date().toISOString() // 현재 시간을 ISO 형식으로 추가
    });
});

// Express 설정을 내보냄
module.exports = app;
