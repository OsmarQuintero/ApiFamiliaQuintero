package com.tuapp.backend.repository;

import com.tuapp.backend.model.Integrante;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IntegranteRepository extends JpaRepository<Integrante, Long> {
}