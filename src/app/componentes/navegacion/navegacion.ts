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

  ngOnInit() {
    this.auth.initGoogle();
    this.auth.cargarUsuario();
  }

  loginGoogle(): void {
    this.auth.iniciarGoogle();
  }

  cerrarSesion(): void {
    this.auth.cerrarSesion();
  }
}
