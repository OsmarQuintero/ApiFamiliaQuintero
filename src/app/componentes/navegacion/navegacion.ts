import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Auth } from '../../servicios/auth';

@Component({
  selector: 'app-navegacion',
  imports: [RouterLink],
  templateUrl: './navegacion.html',
  styleUrl: './navegacion.css',
})
export class Navegacion implements OnInit {
  readonly auth = inject(Auth);

  ngOnInit(): void {
    this.auth.cargarUsuario();
  }

  iniciarSesion(): void {
    this.auth.iniciarSesion();
  }

  cerrarSesion(): void {
    this.auth.cerrarSesion();
  }
}
