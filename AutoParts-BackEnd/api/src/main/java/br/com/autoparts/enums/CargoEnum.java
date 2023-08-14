package br.com.autoparts.enums;

public enum CargoEnum {

 FUNCIONARIO("funcionario"),

ADMIN("admin"),

CLIENTE("cliente");


private String cargo;

CargoEnum(String cargo){
    this.cargo=cargo;
}

public String getCargo() {
    return cargo;
}
}