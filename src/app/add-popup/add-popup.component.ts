import { Component, Output, EventEmitter } from '@angular/core'

@Component({
  selector: 'app-add-popup',
  templateUrl: './add-popup.component.html',
  styleUrls: ['./add-popup.component.css']
})

export class AddPopupComponent {

  static selectors = {
    inputValid: 'add-popup__input_valid',
    inputInvalid: 'add-popup__input_invalid',
    inputError: 'add-popup__input-error_active',
    buttonDisabled: 'add-popup__save-button_disabled',
    title: 'title',
    description: 'description',
    image: 'image',
  };

  title: string = ''
  description: string = ''
  image: string = ''

  @Output() close = new EventEmitter()

  closePopup() {
    this.close.emit()
  }

  hideInputError(inputElement: string) {
    document.getElementById(inputElement)?.classList.add(AddPopupComponent.selectors.inputValid)
    document.getElementById(inputElement)?.classList.remove(AddPopupComponent.selectors.inputInvalid)
    document.getElementById(`${inputElement}-error`)?.classList.remove(AddPopupComponent.selectors.inputError)
  };

  showInputError(inputElement: string) {
    document.getElementById(inputElement)?.classList.add(AddPopupComponent.selectors.inputInvalid)
    document.getElementById(inputElement)?.classList.remove(AddPopupComponent.selectors.inputValid)
    document.getElementById(`${inputElement}-error`)?.classList.add(AddPopupComponent.selectors.inputError)
  };

  formValidator() {
    const pattern = /^(https?:\/\/)(www\.)?([\w\W]{1,})(\.)([\w\W]{1,})([\w\W]{1,})#?$/
    if (this.title.length > 1) {
      this.hideInputError(AddPopupComponent.selectors.title)
    } else {
      this.showInputError(AddPopupComponent.selectors.title)
    }
    if (this.description.length > 3) {
      this.hideInputError(AddPopupComponent.selectors.description)
    } else {
      this.showInputError(AddPopupComponent.selectors.description)
    }
    if (this.image.match(pattern)) {
      this.hideInputError(AddPopupComponent.selectors.image)
    } else {
      this.showInputError(AddPopupComponent.selectors.image)
    }
    const saveButton = document.querySelector(".add-popup__save-button")
    if (this.title.length > 1 && this.description.length > 3 && this.image.match(pattern)) {
      saveButton?.removeAttribute('disabled')
      saveButton?.classList.add(AddPopupComponent.selectors.buttonDisabled)
    } else {
      saveButton?.setAttribute('disabled', 'disabled');
      saveButton?.classList.remove(AddPopupComponent.selectors.buttonDisabled)
    }
  }
}
