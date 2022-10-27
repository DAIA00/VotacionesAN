package com.example.demo.servicios;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.entidades.votantes;

@Repository
public interface VotantesService extends JpaRepository <votantes,Integer>{
    
}
