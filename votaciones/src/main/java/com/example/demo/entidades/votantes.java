package com.example.demo.entidades;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class votantes {

    @Id
    private int codigo;
    private int identificacion;
    private String nombres;
    private String apellidos;
    private String sexo;
    private String fechaNacimiento;
    private String fechaExpedi;
    private String lugarNacimiento;
    private String lugarResidencia;
    private String telefono;
    private String correo;

    public int getCodigo() {
        return codigo;
    }

    public void setCodigo(int codigo) {
        this.codigo = codigo;
    }

    public int getIdentificacion() {
        return identificacion;
    }

    public void setIdentificacion(int identificacion) {
        this.identificacion = identificacion;
    }

    public String getNombres() {
        return nombres;
    }

    public void setNombres(String nombres) {
        this.nombres = nombres;
    }

    public String getApellidos() {
        return apellidos;
    }

    public void setApellidos(String apellidos) {
        this.apellidos = apellidos;
    }

    public String getSexo() {
        return sexo;
    }

    public void setSexo(String sexo) {
        this.sexo = sexo;
    }

    public String getFechaNacimiento() {
        return fechaNacimiento;
    }

    public void setFechaNacimiento(String fechaNacimiento) {
        this.fechaNacimiento = fechaNacimiento;
    }

    public String getFechaExpedi() {
        return fechaExpedi;
    }

    public void setFechaExpedi(String fechaExpedi) {
        this.fechaExpedi = fechaExpedi;
    }

    public String getLugarNacimiento() {
        return lugarNacimiento;
    }

    public void setLugarNacimiento(String lugarNacimiento) {
        this.lugarNacimiento = lugarNacimiento;
    }

    public String getLugarResidencia() {
        return lugarResidencia;
    }

    public void setLugarResidencia(String lugarResidencia) {
        this.lugarResidencia = lugarResidencia;
    }

    public String Telefono() {
        return telefono;
    }

    public void setTelefono(String telefono) {
        this.telefono = telefono;
    }

    public String getCorreo() {
        return correo;
    }

    public void setCorreo(String correo) {
        this.correo = correo;
    }


}
