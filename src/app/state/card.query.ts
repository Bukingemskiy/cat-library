import { Injectable } from '@angular/core'
import { QueryEntity } from '@datorama/akita'
import { CardStore, CardState } from './card.store.'
import { Card } from './card.model'

@Injectable({
  providedIn: 'root'
})

export class CardQuery extends QueryEntity<CardState, Card> {
  constructor(protected override store: CardStore) {
    super(store);
  }
}