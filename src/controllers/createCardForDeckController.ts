import {Request, Response} from "express";
import Deck from "../models/Deck";

export async function createCardForDeckController (req: Request, res: Response) {

  const newDeck = new Deck({
    title: req.body.title,
  });
  await newDeck.save();

  const createdDeck = await newDeck.save();
  res.json(createdDeck)
};

