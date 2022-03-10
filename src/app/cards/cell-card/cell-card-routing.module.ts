import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CellCardComponent } from './cell-card.component';

const routes: Routes = [
  {
    path: '',
    component: CellCardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class CellCardRoutingModule {}