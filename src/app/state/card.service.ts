import { CardStore } from "./card.store."
import { Card, createCard } from "./card.model"
import { Injectable } from "@angular/core"
import { Location } from '@angular/common'
import { initialCards } from "../app.data"
import { CardQuery } from "./card.query"

@Injectable({ providedIn: "root" })

export class CardService {
  constructor(private cardStore: CardStore, private location: Location, private cardQuery: CardQuery) {}

  getCards() {
    this.cardStore.add(initialCards)
  }

  getCard(id: string) : Card | undefined {
    const card = this.cardQuery.getEntity(id)
    return card
  }

  add(title: string, description: string, image: string) {
    const card = createCard(title, description, image)
    this.cardStore.add(card)
    this.location.back()
  }

  edit(title: string, description: string, image: string, id:string) {
    this.cardStore.update(id, {title, description, image})
    this.location.back()
  }

  delete(id:string) {
    this.cardStore.remove(id)
  }

  toggleLike(id: string, liked: boolean) {
    liked = !liked
    this.cardStore.update(id, {liked})
  }
}