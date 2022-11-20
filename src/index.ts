import { config } from "dotenv";
config();
import express, {Request, Response} from "express";
import mongoose from "mongoose";
import cors from "cors";
import {getDecksController} from "./controllers/getDecksController"
import {createDeckController} from './controllers/createDeckController'
import {deleteDeckController} from './controllers/deleteDeckController'
import {createCardForDeckController} from './controllers/createCardForDeckController'
import { getDeckController } from "./controllers/getDeckController";
import { deleteCardOnDeckController } from "./controllers/deleteCardOnDeckController";

const PORT = 3001

const app = express();

app.use(cors({
  origin: "*",
}));

app.use(express.json());

app.get("/decks", getDecksController);
app.post("/decks", createDeckController);
app.delete("/decks/:deckId", deleteDeckController);
app.delete("/decks/:deckId", getDeckController);
app.post("/decks/:deckId/cards", createCardForDeckController);
app.delete("/decks/:deckId/cards/:index", deleteCardOnDeckController);

mongoose.connect(process.env.MONGO_URL!).then(()=>{
    console.log(`Listening on port ${PORT}`);
    app.listen(PORT);
}).catch((error) => {'connection failed due to error: ' + error.message})

const db = mongoose.connection
db.on("error", console.error.bind(console, "mongoDB connection error"))

