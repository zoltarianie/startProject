import { Action } from '@ngrx/store';
import {CardModel} from '../models/CardModel';

export const ADD_CARD = 'ADD CARD';

export class CardAddAction implements Action {
  readonly type = ADD_CARD;
  constructor(public payload: CardModel) { }
}

export type Actions = CardAddAction;