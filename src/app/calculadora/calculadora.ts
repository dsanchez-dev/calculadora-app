import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculadora',
  imports: [FormsModule],
  templateUrl: './calculadora.html',
  styleUrl: './calculadora.css',
})
export class Calculadora {
  operandoA: number = 0;
  operandoB: number = 0;
  resultado: number = 0;

  sumar() {
    this.resultado = this.operandoA + this.operandoB;
  }
  restar() {
    this.resultado = this.operandoA - this.operandoB;
  }
  multiplicar() {
    this.resultado = this.operandoA * this.operandoB;
  }
  dividir() {
    if (this.operandoB !== 0) {
      this.resultado = this.operandoA / this.operandoB; // Manejo de división entre cero
    } else if (this.operandoB === 0) {
      this.resultado = NaN; // Resultado indefinido si se intenta dividir por cero
    } else if (this.operandoA === 0 && this.operandoB === 0) {
      this.resultado = 0; // Si ambos operandos son cero, el resultado es cero
    } else if (this.operandoA === 0 && this.operandoB !== 0) {
      this.resultado = 0; // Si operandoA es cero, el resultado es cero
    }
  }
}