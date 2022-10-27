package com.example.demo.controlador;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class principalControlador {

	@GetMapping("/votaciones")
	public String principal() {
		return "/index";
	}

	@GetMapping("/DMC")
	public String DMC() {
		return "/DMC";
	}

	@GetMapping("/PDBS")
	public String PDBS() {
		return "/PDBS";
	}

	@GetMapping("/OnePiece")
	public String OnePiece() {
		return "/OnePiece";
	}

	@GetMapping("/pokemon")
	public String pokemon() {
		return "/pokemon";
	}

	@GetMapping("/beaters")
	public String beaters() {
		return "/beaters";
	}

	@GetMapping("/SAKURA")
	public String SAKURA() {
		return "/SAKURA";
	}

	@GetMapping("/volver")
	public String volver() {
		return "/votaciones";
	}

	@GetMapping("/formulario")
	public String formulario() {
		return "/formulario";
	}

}
