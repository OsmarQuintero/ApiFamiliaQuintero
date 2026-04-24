package com.tuapp.backend.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "integrantes")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Integrante {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nombre;
    private String apellido;
    private String telefono;
    private String direccion;
    private String sexo;
    private String nacionalidad;
    private String parentesco;
    private String foto;

    @Column(name = "fecha_nacimiento")
    private String fechaNacimiento;
}