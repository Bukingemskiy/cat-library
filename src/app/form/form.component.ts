import { Component, OnInit } from '@angular/core'
import { ActivatedRoute} from '@angular/router'
import { Location} from '@angular/common'
import { CardService } from '../state/card.service'
import { Card } from '../state/card.model'
import { Validators, FormBuilder } from '@angular/forms'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})

export class FormComponent implements OnInit {

  buttonText = ''
  path: string
  id: string
  card!: Card | undefined
  url = /^(https?:\/\/)(www\.)?([\w\W]{1,})(\.)([\w\W]{1,})([\w\W]{1,})#?$/

  cityForm = this.fb.group({
    title: ['', Validators.required],
    description: ['', Validators.required],
    image: ['', [Validators.required, Validators.pattern(this.url)]]
  });

constructor(private cardService: CardService, private route: ActivatedRoute, private location: Location, private fb: FormBuilder) { 
  this.buttonText = route.snapshot.data['buttonText']
  this.id = route.snapshot.params['id']
  this.path = this.location.path()
  this.card = this.cardService.getCard(this.id)
}
 ngOnInit() {
    this.insertInputs()
    this.inputTouched()
  }

 inputTouched() {
   if (this.path === `/edit/${this.id}`) {
    this.cityForm.markAllAsTouched()
   } if (this.path === '/create') {
     setTimeout(() => this.cityForm.markAllAsTouched(), 30000)
   }
  }

 backClicked() {
   this.location.back()
 }

 add(title: string, description: string, image: string) {
  this.cardService.add(title, description, image)
}

 edit(title: string, description: string, image: string, id: string) {
  this.cardService.edit(title, description, image, id)
}

 submit() {
  if (this.path === '/create') {
    this.add(this.cityForm.value.title, this.cityForm.value.description, this.cityForm.value.image)
  } else {
    this.edit(this.cityForm.value.title, this.cityForm.value.description, this.cityForm.value.image, this.id)
  }
}

 insertInputs() {
  if (this.path === `/edit/${this.id}`) {
    this.cityForm.patchValue({
      title: this.card?.title,
      description: this.card?.description,
      image: this.card?.image
    })
  }
}
}