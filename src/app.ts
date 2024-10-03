import express, { Request, Response, Application } from 'express';
import {renderModel} from "./model";


const app: Application = express();
const port = 3000;

app.get('/ping', (req: Request, res: Response) => {
    res.send('pong');
});

app.get('/name-tag', (req: Request, res: Response) => {
    res.send(`
    <svg xmlns="http://www.w3.org/2000/svg">
        <rect width="500" height="300" fill="#3d87fb"></rect>
        ${renderModel.text.render()}
    </svg>`);
});

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});

export default app;