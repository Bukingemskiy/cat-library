import { Component, Input } from '@angular/core'
import { Card } from '../app.component'

@Component({
  selector: 'app-list-card',
  templateUrl: './list-card.component.html',
  styleUrls: ['./list-card.component.css']
})

export class ListCardComponent {

  @Input()
  card!: Card;

}
