import express, {Request, Response, NextFunction} from 'express';

const PORT = process.env.PORT;
const app = express();

app.get("/", (req, res) => {
    res.end("Hello World");
})

app.listen(3000);