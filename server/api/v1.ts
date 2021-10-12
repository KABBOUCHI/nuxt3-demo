import express from 'express';

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

export default app;