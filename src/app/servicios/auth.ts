import { Injectable, signal } from '@angular/core';

export interface UsuarioGoogle {
  name: string;
  email: string;
  picture: string;
}

declare const google: any;

@Injectable({
  providedIn: 'root'
})
export class Auth {

  // 👉 Tu credencial (Client ID)
  private readonly clientId = '1006167348314-805siqp4bfi5npn8v9airt36ih4oa3pq.apps.googleusercontent.com';

  readonly usuario = signal<UsuarioGoogle | null>(null);

  constructor() {
    this.cargarUsuario();
    this.initGoogle();
  }

  // 🔥 Inicializa Google con el script del index.html
  private initGoogle() {
    if (typeof google === 'undefined') return;

    google.accounts.id.initialize({
      client_id: this.clientId,
      callback: (response: any) => this.handleLogin(response)
    });
  }

  // 🔥 Lanza el login
  iniciarGoogle(): void {
    google.accounts.id.prompt();
  }

  // 🔥 Procesa el login
  private handleLogin(response: any) {
    const payload = JSON.parse(atob(response.credential.split('.')[1]));

    const user: UsuarioGoogle = {
      name: payload.name,
      email: payload.email,
      picture: payload.picture
    };

    this.usuario.set(user);
    localStorage.setItem('user', JSON.stringify(user));
  }

  // 🔄 Mantener sesión
  cargarUsuario() {
    const data = localStorage.getItem('user');
    if (data) {
      this.usuario.set(JSON.parse(data));
    }
  }

  // 🚪 Logout
  cerrarSesion() {
    this.usuario.set(null);
    localStorage.removeItem('user');
  }
}