import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'


const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'prefix'
  },
  {
    path: 'cell',
    data: { title: 'Список городов' },
    loadChildren: () => import('../cards/cards.module').then(m => m.CardsModule),
  },
  {
    path: 'list',
    data: { title: 'Список городов' },
    loadChildren: () => import('../cards/cards.module').then(m => m.CardsModule)
  },
  {
    path: 'create',
    data: { title: 'Создать город', buttonText: 'Создать' },
    loadChildren: () => import('../form/form.module').then(m => m.FormModule)
  },
  {
    path: 'edit/:id',
    data: { title: 'Изменить город', buttonText: 'Изменить' },
    loadChildren: () => import('../form/form.module').then(m => m.FormModule)
  },
  {
    path: '**',
    redirectTo: 'list',
    pathMatch: 'prefix'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: []
})

export class AppRoutingModule { }