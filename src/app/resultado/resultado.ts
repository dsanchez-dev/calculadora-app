import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-resultado',
  imports: [],
  templateUrl: './resultado.html',
  styleUrl: './resultado.css'
})
export class ResultadoComponent {
  @Input() resultadoHijo: number | null = null;

}
