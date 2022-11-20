import express, {Request, Response} from "express";
import mongoose from 'mongoose';

const app = express();

const db = mongoose.connect('mongodb+srv://proyect-1-user1:N8TsIATejQEMNXip@project1.b401okn.mongodb.net/?retryWrites=true&w=majority');

app.get("/", (req: Request, res: Response) => {
  res.send("hello world");
});

app.listen(3001);


