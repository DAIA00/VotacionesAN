package com.example.demo.controlador;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

import com.example.demo.entidades.votantes;
import com.example.demo.servicios.VotantesService;

@Controller
public class VotantesControlador {

    @Autowired
    private VotantesService votantesService;

    @GetMapping("/votarg62")
    public String listaVotantes(Model model){
        try {
            List<votantes> listaVotantes =votantesService.findAll();
        } catch (Exception e) {
            // TODO: handle exception
            System.out.println("Error"+e.getCause());
        }
        return "/index";
    }

    @GetMapping("/nuevoVotante")
    public String addVotante(Model model) {
        model.addAttribute("votantes", new votantes());
        return "/nuevoVotante";
    }

    @PostMapping("/saveVotantes")
    public String addVotante(@Validated votantes Votantes){
        votantesService.save(Votantes);
        return "redirect:/votarg62";
    }

}
