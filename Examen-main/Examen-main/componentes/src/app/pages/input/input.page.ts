import { Component } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.page.html',
  styleUrls: ['./input.page.scss'],
})

export class InputPage {
  usuario = {
    nombre: '',
    edad: 0
  };

  onSubmit() {
    console.log('submit');
    console.log(this.usuario);

    if (this.usuario.edad >= 18) {
      console.log('Es mayor de edad');
    } else {
      console.log('Es menor de edad');
    }
  }
}
