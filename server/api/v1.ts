import express from 'express';
import serverless from 'serverless-http';
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.get('/hello', (req, res) => {
    res.json({
        message: 'Hello!'
    });
})

export default serverless(app);