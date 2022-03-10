import { HttpClient } from '@angular/common/http'
import { Component, OnInit } from '@angular/core'
import { CardService } from './state/card.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

constructor(private cardService: CardService, private http: HttpClient ) {}

  ngOnInit() {
  this.cardService.getCards()
  this.http.get('http://localhost:3333/api/cities').subscribe(response => {
    console.log(response)
  })
  }
}