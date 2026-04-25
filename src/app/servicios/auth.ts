import { Injectable, signal, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

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

  private readonly platformId = inject(PLATFORM_ID);
  private readonly isBrowser = isPlatformBrowser(this.platformId);

  readonly usuario = signal<UsuarioGoogle | null>(null);

  // 🔥 NO constructor con cargarUsuario()

  iniciarGoogle(): void {
    if (!this.isBrowser) return;

    google.accounts.id.initialize({
      client_id: '1006167348314-805siqp4bfi5npn8v9airt36ih4oa3pq.apps.googleusercontent.com',
      callback: (response: any) => this.handleLogin(response)
    });

    google.accounts.id.prompt();
  }

  private handleLogin(response: any) {
    const payload = JSON.parse(atob(response.credential.split('.')[1]));

    const user: UsuarioGoogle = {
      name: payload.name,
      email: payload.email,
      picture: payload.picture
    };

    this.usuario.set(user);

    if (this.isBrowser) {
      localStorage.setItem('user', JSON.stringify(user));
    }
  }

  cargarUsuario() {
    if (!this.isBrowser) return; // 🔥 CLAVE

    const data = localStorage.getItem('user');
    if (data) {
      this.usuario.set(JSON.parse(data));
    }
  }

  cerrarSesion() {
    this.usuario.set(null);

    if (this.isBrowser) {
      localStorage.removeItem('user');
    }
  }
}