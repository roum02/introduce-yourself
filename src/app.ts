import express, {Application} from 'express';

const app: Application = express();
const port = 3000;

app.get('/ping', (req, res) => {
    res.send('pong');
});

app.get('/name-tag', (req, res) => {
    res.send(`
    <svg xmlns="http://www.w3.org/2000/svg">
    <rect width="500" height="300"></rect>
    </svg>`);
})

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});

export default app;