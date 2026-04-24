import { Routes } from '@angular/router';
import { CFamilia } from './paginas/c-familia/c-familia';
import { Home } from './paginas/home/home';
import { Paginanoencontrada } from './paginas/paginanoencontrada/paginanoencontrada';
import { Acercade } from './paginas/acercade/acercade';


export const routes: Routes = [
    {path : 'home', component: Home},
    {path : 'acercade', component: Acercade},
    {path : 'familia', component: CFamilia},

       {path : '', redirectTo : '/home', pathMatch: 'full'},//ruta por defecto
       {path : '**', component : Paginanoencontrada}//ruta comodin

    
];
