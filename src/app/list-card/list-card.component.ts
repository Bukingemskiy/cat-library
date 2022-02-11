import { Component, Input, OnInit } from '@angular/core';
import { Card } from '../app.component';

@Component({
  selector: 'app-list-card',
  templateUrl: './list-card.component.html',
  styleUrls: ['./list-card.component.css']
})

export class ListCardComponent implements OnInit {

  @Input()
  card!: Card;

  ngOnInit() { }

}
