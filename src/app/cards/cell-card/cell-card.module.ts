import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { CellCardRoutingModule } from './cell-card-routing.module'
import { CellCardComponent } from './cell-card.component'

@NgModule({
  imports: [
    CellCardRoutingModule,
    CommonModule
],
  exports: [CellCardComponent],
  declarations: [CellCardComponent]
})
export class CellCardModule { }