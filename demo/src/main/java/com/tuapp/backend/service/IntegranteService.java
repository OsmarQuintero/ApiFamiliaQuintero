package com.tuapp.backend.service;

import com.tuapp.backend.model.Integrante;
import com.tuapp.backend.repository.IntegranteRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class IntegranteService {

    private final IntegranteRepository repository;

    public IntegranteService(IntegranteRepository repository) {
        this.repository = repository;
    }

    public List<Integrante> getAll() {
        return repository.findAll();
    }

    public Integrante save(Integrante integrante) {
        return repository.save(integrante);
    }

    public void delete(Long id) {
        repository.deleteById(id);
    }
}
