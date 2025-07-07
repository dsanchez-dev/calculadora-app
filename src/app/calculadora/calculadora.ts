import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormularioComponent } from '../formulario/formulario';
import { ResultadoComponent } from '../resultado/resultado';

@Component({
  selector: 'app-calculadora',
  imports: [FormsModule, FormularioComponent, ResultadoComponent],
  templateUrl: './calculadora.html',
  styleUrl: './calculadora.css',
})
export class Calculadora {
  resultadoPadre: number = 0;

  procesarResultado(resultadoHijo: number) {
    this.resultadoPadre = resultadoHijo;
  }
}
