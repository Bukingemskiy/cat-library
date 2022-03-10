import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { CardsComponent } from './cards.component'
import { CardsRoutingModule } from './cards-routing.module'
import { CellCardModule } from './cell-card/cell-card.module'
import { ListCardModule } from './list-card/list-card.module'
import { HeaderModule } from '../header/header.module'
import { NavigationModule } from '../navigation/navigation.module'

@NgModule({
  declarations: [
    CardsComponent
  ],
  imports: [
    CommonModule,
    CardsRoutingModule,
    HeaderModule,
    NavigationModule,
    CellCardModule,
    ListCardModule

  ]
})
export class CardsModule { }