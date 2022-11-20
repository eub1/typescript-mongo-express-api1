import {Request, Response} from "express";
import Deck from "../models/Deck";

export async function getDeckController(req: Request, res: Response) {

  const {deckId} = req.params
  const deck = await Deck.findById(deckId)
  console.log(deck);
  
  res.json(deck)
  
}