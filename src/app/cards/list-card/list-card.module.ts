import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { ListCardRoutingModule } from './list-card-routing.module'
import { ListCardComponent } from './list-card.component'

@NgModule({
  imports: [
    ListCardRoutingModule,
    CommonModule
  ],
  exports: [ListCardComponent],
  declarations: [ListCardComponent]
})
export class ListCardModule { }