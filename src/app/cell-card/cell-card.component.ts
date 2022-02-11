import { Component, Input, OnInit } from '@angular/core';
import { Card } from '../app.component';

@Component({
  selector: 'app-cell-card',
  templateUrl: './cell-card.component.html',
  styleUrls: ['./cell-card.component.css']
})

export class CellCardComponent implements OnInit {

  @Input()
  card!: Card;

  ngOnInit() { }

}
