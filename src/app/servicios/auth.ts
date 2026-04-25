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
  private initialized = false;

  readonly usuario = signal<UsuarioGoogle | null>(null);

  initGoogle() {
    if (!this.isBrowser) return;
    if (this.initialized) return;

    const interval = setInterval(() => {
      if (typeof google !== 'undefined' && google.accounts) {
        clearInterval(interval);

        google.accounts.id.initialize({
          client_id: '1006167348314-805siqp4bfi5npn8v9airt36ih4oa3pq.apps.googleusercontent.com',
          callback: (res: any) => this.handleLogin(res)
        });

        this.initialized = true;
        console.log("Google inicializado ✅");
        
        // Mostrar el prompt de Google automáticamente después de inicializar
        setTimeout(() => {
          google.accounts.id.prompt();
        }, 500);
      }
    }, 300);
  }

  iniciarGoogle() {
    if (!this.isBrowser) return;

    // Mostrar el diálogo nativo de Google Sign-In
    if (typeof google !== 'undefined' && google.accounts) {
      google.accounts.id.prompt();
    } else {
      console.error("Google Sign-In no está disponible");
    }
  }

  private handleLogin(response: any) {
    const payload = JSON.parse(atob(response.credential.split('.')[1]));

    const user = {
      name: payload.name,
      email: payload.email,
      picture: payload.picture
    };

    this.usuario.set(user);

    if (this.isBrowser) {
      localStorage.setItem('user', JSON.stringify(user));
    }

    console.log("✅ Sesión iniciada con Google:", user);
  }

  cargarUsuario() {
    if (!this.isBrowser) return;

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