package com.tuapp.backend.controller;

import com.tuapp.backend.model.Integrante;
import com.tuapp.backend.service.IntegranteService;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/integrantes")
@CrossOrigin(origins = "http://localhost:4200", allowCredentials = "true")
public class IntegranteController {

    private final IntegranteService service;

    public IntegranteController(IntegranteService service) {
        this.service = service;
    }

    @GetMapping
    public List<Integrante> getAll() {
        return service.getAll();
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Integrante create(@RequestBody Map<String, Object> payload) {
        return service.save(toIntegrante(payload));
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        service.delete(id);
    }

    private Integrante toIntegrante(Map<String, Object> payload) {
        Integrante integrante = new Integrante();
        integrante.setNombre(text(payload, "nombre"));
        integrante.setApellido(text(payload, "apellido", "apellidos"));
        integrante.setTelefono(text(payload, "telefono", "tel"));
        integrante.setDireccion(text(payload, "direccion"));
        integrante.setSexo(text(payload, "sexo"));
        integrante.setNacionalidad(text(payload, "nacionalidad"));
        integrante.setParentesco(text(payload, "parentesco"));
        integrante.setFoto(text(payload, "foto"));
        integrante.setFechaNacimiento(text(payload, "fechaNacimiento", "fecha_nacimiento", "fecha_nac"));
        return integrante;
    }

    private String text(Map<String, Object> payload, String... keys) {
        for (String key : keys) {
            Object value = payload.get(key);

            if (value != null) {
                return value.toString();
            }
        }

        return null;
    }
}
