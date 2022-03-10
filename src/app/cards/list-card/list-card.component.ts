import { Component, EventEmitter, Input, Output } from '@angular/core'
import { Card } from '../../state/card.model';

@Component({
  selector: 'card-list',
  templateUrl: './list-card.component.html',
  styleUrls: ['./list-card.component.scss']
})

export class ListCardComponent {

  @Input() card!: Card
  @Output() delete = new EventEmitter<string>();
  @Output() toggleLike = new EventEmitter<Card>();
  
}