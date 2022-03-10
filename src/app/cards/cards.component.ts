import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { Card } from '../state/card.model'
import { CardQuery } from '../state/card.query'
import { CardService } from '../state/card.service'
import {Location} from '@angular/common'

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})

export class CardsComponent implements OnInit {

  constructor(
    private location: Location,
    private cardQuery: CardQuery,
    private cardService: CardService
    ) {}

  cards$!: Observable<Card[]>
  path = this.location.path()

  ngOnInit() {
    this.cards$ = this.cardQuery.selectAll()
}

  delete(id: string) {
    this.cardService.delete(id)
  }

  toggleLike(card: Card) {
    this.cardService.toggleLike(card.id, card.liked)
  }
}