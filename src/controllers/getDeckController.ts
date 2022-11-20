import {Request, Response} from "express";
import Deck from "../models/Deck";

export async function getDecksController(req: Request, res: Response) {

  const decks = await Deck.find()
  // console.log(decks);
  res.json(decks)
  
}