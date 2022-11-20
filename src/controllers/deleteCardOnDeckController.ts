import {Request, Response} from "express";
import Deck from "../models/Deck";

export async function deleteCardOnDeckController(req: Request, res: Response) {
  
  const {deckId} = req.params;
  const index = req.params.index;
  const deck = await Deck.findById(deckId);

  if(!deck) return res.status(400).send("no deck of this id exists")

  // we set the cards array, and splice out the card that is equal to the index
  // it's from params, it is a string, so we need to parseInt
  deck?.cards.splice(parseInt(index), 1);
  await deck?.save();

  res.json(deck)
  
}
