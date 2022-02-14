import { Component, Input } from '@angular/core'
import { Card } from '../app.component'

@Component({
  selector: 'app-cell-card',
  templateUrl: './cell-card.component.html',
  styleUrls: ['./cell-card.component.css']
})

export class CellCardComponent {

  @Input()
  card!: Card;

}
