import { Component } from '@angular/core'
import {Location} from '@angular/common'

@Component({
  selector: 'nav-root',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})

export class NavigationComponent {

  constructor(private location: Location) {}

  path = this.location.path();
}