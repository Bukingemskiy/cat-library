import { Component } from '@angular/core';

export interface Card {
  id: number
  title: string
  description: string
  image: string
  liked: boolean
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  table = false
  cell = true

  initialCards = [
    { title: "Shironeko", description: "Самый счастливый и сонный кот в мире", image: "//html.ftpes.ru/FrontEndTest/Shironeko.jpg" },
    { title: "Garfi", description: "Самый злой кот в мире", image: "//html.ftpes.ru/FrontEndTest/Garfi.jpg" },
    { title: "Sam", description: "У кота Сэма есть потрясающие брови", image: "//html.ftpes.ru/FrontEndTest/Sam.jpg" },
    { title: "Snoopy", description: "Самый очаровательный котик", image: "//html.ftpes.ru/FrontEndTest/Snoopy.jpg" },
    { title: "Venus", description: "Кошка с двумя лицами", image: "//html.ftpes.ru/FrontEndTest/Venus.jpg" },
    { title: "Maru", description: "Повелитель коробок", image: "//html.ftpes.ru/FrontEndTest/Maru.jpg" },
    { title: "Lil Bub", description: "Вечный котёнок", image: "//html.ftpes.ru/FrontEndTest/Lil_Bub.jpg" },
    { title: "Banye", description: "Всегда удивлённый кот", image: "//html.ftpes.ru/FrontEndTest/Banye.jpg" },
    { title: "Grumpy Cat", description: "Сердитый котик", image: "//html.ftpes.ru/FrontEndTest/Grumpy_Cat.jpg" },
    { title: "Hamilton", description: "Кот-хипстер", image: "//html.ftpes.ru/FrontEndTest/Hamilton.jpg" },
    { title: "Nala", description: "Кошка, которая всегда в шоке", image: "//html.ftpes.ru/FrontEndTest/Nala.jpg" },
    { title: "Colonel Meow", description: "Кот с самой длинной шерстью", image: "//html.ftpes.ru/FrontEndTest/Colonel_Meow.jpg" }
  ]

  newCards: Card[] =
    this.initialCards.map((obj, i) => ({ ...obj, liked: false, id: i + 1 }))

  cellCards() {
    this.cell = true
    this.table = false
  }

  tableCards() {
    this.cell = false
    this.table = true
  }
}
