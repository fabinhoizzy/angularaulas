import { Component } from '@angular/core';
import {Pessoa} from './pessoa';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'angularaulas';
  nomes = [
    new Pessoa(1, 'Fabio', 90),
    new Pessoa(2, 'Paulo', 10),
    new Pessoa(3, 'Paula', 20),
    new Pessoa(4, 'Felipe', 30),
    new Pessoa(5, 'Larissa', 88)
  ];
  nomePrincipal = this.nomes[0]

  showAviso = true;
  avisoMsg = 'Este é um aviso!';
}
