import { Injectable } from '@angular/core';

export interface Integrante {
  id: number;
  nombre: string;
  apellido: string;
  telefono: string;
  direccion: string;
  sexo: string;
  nacionalidad: string;
  parentesco: string;
  foto: string;
  fechaNacimiento: string;
}

const INTEGRANTES: Integrante[] = [
  {
    id: 1,
    nombre: 'Lucino ',
    apellido: 'Quintero',
    telefono: '8116636383',
    direccion: 'Cerro del Cubilete 1209',
    sexo: 'Masculino',
    nacionalidad: 'Mexicana',
    parentesco: 'Padre',
    foto: '',
    fechaNacimiento: '1975-01-28',
  },
  {
    id: 2,
    nombre: 'Mayra ',
    apellido: 'Valadez',
    telefono: '8129537025',
    direccion: 'Cerro del Cubilete 1209',
    sexo: 'Femenino',
    nacionalidad: 'Mexicana',
    parentesco: 'Madre',
    foto: '',
    fechaNacimiento: '1983-02-14',
  },
  {
    id: 3,
    nombre: 'Erick',
    apellido: 'Quintero',
    telefono: '8131412479',
    direccion: 'Cerro del Cubilete',
    sexo: 'Masculino',
    nacionalidad: 'Mexicana',
    parentesco: 'Hermano',
    foto: '',
    fechaNacimiento: '2004-01-08',
  },
  {
    id: 4,
    nombre: 'Edder',
    apellido: 'Quintero',
    telefono: '55 3333 4444',
    direccion: 'Cerro del Cubilete 1209',
    sexo: 'Masculino',
    nacionalidad: 'Mexicana',
    parentesco: 'Hermano',
    foto: '',
    fechaNacimiento: '2018-08-09',
  },
];

@Injectable({
  providedIn: 'root'
})
export class Familia {
  consultarFamilia(): Integrante[] {
    return [...INTEGRANTES];
  }
}
