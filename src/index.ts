import express, {Request, Response} from "express";
import mongoose from 'mongoose';

import Deck from "./models/Deck";

const PORT = 3001

const app = express();

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("hello world");
});

app.post("/decks", async(req: Request, res: Response) => {

  const newDeck = new Deck({
    title: req.body.title,
  });
  await newDeck.save();

  const createdDeck = await newDeck.save();
  res.json(createdDeck)
});

mongoose.connect(
  'mongodb+srv://proyect-1-user1:N8TsIATejQEMNXip@project1.b401okn.mongodb.net/?retryWrites=true&w=majority'
).then(()=>{
    console.log(`Listening on port ${PORT}`);
    app.listen(PORT);
})



