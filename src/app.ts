import express, {Application} from 'express';

const app: Application = express();
const port = 3000;

app.get('/ping', (req, res) => {
    res.send('pong');
});

app.get('/image', (req, res) => {
    res.send(`this is an image test`);
})

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});

export default app;