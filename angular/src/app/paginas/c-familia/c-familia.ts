import { Component, inject } from '@angular/core';
import { Familia, Integrante } from '../../servicios/familia';

@Component({
  selector: 'app-c-familia',
  imports: [],
  templateUrl: './c-familia.html',
  styleUrl: './c-familia.css',
})
export class CFamilia {
  private readonly servicioFamilia = inject(Familia);
  datosFamilia: Integrante[] = this.servicioFamilia.consultarFamilia();
}
