import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component'
import { HeaderComponent } from './header/header.component'
import { ListCardComponent } from './list-card/list-card.component'
import { CellCardComponent } from './cell-card/cell-card.component'
import { FooterComponent } from './footer/footer.component'
import { AddPopupComponent } from './add-popup/add-popup.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListCardComponent,
    CellCardComponent,
    FooterComponent,
    AddPopupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
