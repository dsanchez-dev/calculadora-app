import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormularioComponent } from '../formulario/formulario';

@Component({
  selector: 'app-calculadora',
  imports: [FormsModule, FormularioComponent],
  templateUrl: './calculadora.html',
  styleUrl: './calculadora.css',
})
export class Calculadora {
  resultado: number = 0;

  procesarResultado(resultadoHijo: number) {
    this.resultado = resultadoHijo;
  }
}
