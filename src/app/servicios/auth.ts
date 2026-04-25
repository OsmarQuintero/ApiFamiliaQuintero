import { isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable, PLATFORM_ID, inject, signal } from '@angular/core';
import { catchError, map, of } from 'rxjs';

interface UsuarioResponse {
  authenticated: boolean;
  name?: string;
  email?: string;
  picture?: string;
}

export interface UsuarioGoogle {
  name: string;
  email: string;
  picture: string;
}

@Injectable({
  providedIn: 'root'
})
export class Auth {
  private readonly http = inject(HttpClient);
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
  private readonly apiBaseUrl = 'api-familia-quintero-r58a4d2eu-osmarquinteros-projects.vercel.app';

  readonly usuario = signal<UsuarioGoogle | null>(null);
  readonly cargando = signal(false);
  readonly loginUrl = `${this.apiBaseUrl}/oauth2/authorization/google`;

  cargarUsuario(): void {
    if (!this.isBrowser) {
      return;
    }

    this.cargando.set(true);
    this.http.get<UsuarioResponse>(`${this.apiBaseUrl}/api/user`, { withCredentials: true })
      .pipe(
        map((response) => {
          if (!response.authenticated) {
            return null;
          }

          return {
            name: response.name ?? response.email ?? 'Usuario',
            email: response.email ?? '',
            picture: response.picture ?? '',
          };
        }),
        catchError(() => of(null))
      )
      .subscribe((usuario) => {
        this.usuario.set(usuario);
        this.cargando.set(false);
      });
  }

  iniciarSesion(): void {
    if (this.isBrowser) {
      window.location.href = this.loginUrl;
    }
  }

  cerrarSesion(): void {
    if (!this.isBrowser) {
      return;
    }

    this.http.post(`${this.apiBaseUrl}/api/logout`, {}, { withCredentials: true, responseType: 'text' })
      .pipe(catchError(() => of('')))
      .subscribe(() => {
        this.usuario.set(null);
      });
  }
}
