import { Component, EventEmitter, Input, Output } from '@angular/core'
import { Card } from '../../state/card.model';


@Component({
  selector: 'card-cell',
  templateUrl: './cell-card.component.html',
  styleUrls: ['./cell-card.component.scss']
})

export class CellCardComponent {

  @Input() card!: Card
  @Output() delete = new EventEmitter<string>();
  @Output() toggleLike = new EventEmitter<Card>();

}