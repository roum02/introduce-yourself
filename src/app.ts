import express, { Request, Response, Application } from 'express';


const app: Application = express();
const port = 3000;

app.get('/ping', (req: Request, res: Response) => {
    res.send('pong');
});

app.get('/name-tag', (req: Request, res: Response) => {
    res.send(`
    <svg xmlns="http://www.w3.org/2000/svg">
        <rect width="500" height="300" fill="#3d87fb"></rect>
        <text 
        x="30" y="90" 
        fill="#ED6E46" font-size="100" font-family="'Leckerli One', cursive">
        hello
        </text>
    </svg>`);
});

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});

export default app;