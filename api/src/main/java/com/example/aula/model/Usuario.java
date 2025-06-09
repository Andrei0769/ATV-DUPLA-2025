package com.example.aula.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;
import jakarta.validation.constraints.Size;
import org.hibernate.annotations.processing.Pattern;


@Entity
public class Usuario {

     @Id
     @GeneratedValue(strategy = GenerationType.IDENTITY)
     private Long id;

    @NotBlank(message = "Nome do prato é obrigatório.")
    @Size(max = 100, message = "Nome do prato deve ter no máximo 100 caracteres.")
    private String nomePrato;

    @NotBlank(message = "Descrição é obrigatória.")
    @Size(max = 255, message = "Descrição deve ter no máximo 255 caracteres.")
    private String descricao;

    @NotNull(message = "Preço é obrigatório.")
    @Positive(message = "O preço deve ser um valor positivo.")
    private Double preco;

    @NotBlank(message = "Categoria é obrigatória.")
    private String categoria;

    @NotBlank(message = "Disponibilidade é obrigatória.")
    private String disponibilidade;

    @Size(max = 255, message = "URL da imagem deve ter no máximo 255 caracteres.")
    private String urlImagem;;

    public Usuario() {}

    public Usuario(Long id, String nomePrato, String descricao, Double preco, String categoria, String disponibilidade, String urlImagem) {
        this.id = id;
        this.nomePrato = nomePrato;
        this.descricao = descricao;
        this.preco = preco;
        this.categoria = categoria;
        this.disponibilidade = disponibilidade;
        this.urlImagem = urlImagem;
    }

    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }

    public String getNomePrato() {
        return nomePrato;
    }
    public void setNomePrato(String nomePrato) {
        this.nomePrato = nomePrato;
    }

    public String getDescricao() {
        return descricao;
    }
    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public Double getPreco() {
        return preco;
    }
    public void setPreco(Double preco) {
        this.preco = preco;
    }

    public String getCategoria() {
        return categoria;
    }
    public void setCategoria(String categoria) {
        this.categoria = categoria;
    }

    public String getDisponibilidade() {
        return disponibilidade;
    }
    public void setDisponibilidade(String disponibilidade) {
        this.disponibilidade = disponibilidade;
    }

    public String getUrlImagem() {
        return urlImagem;
    }
    public void setUrlImagem(String urlImagem) {
        this.urlImagem = urlImagem;
    }
}
