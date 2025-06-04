package com.example.aula.service;

import com.example.aula.model.Usuario;
import com.example.aula.repository.UsuarioRepository;
import jakarta.validation.Valid;
import org.springframework.stereotype.Service;
import org.springframework.validation.annotation.Validated;

import java.util.List;

@Service
@Validated
public class UsuarioService {

    private final UsuarioRepository usuarioRepository;

    public UsuarioService(UsuarioRepository usuarioRepository) {
        this.usuarioRepository = usuarioRepository;
    }

    public List<Usuario> listarTodos() {
        return usuarioRepository.findAll();
    }

    public Usuario salvar(@Valid Usuario usuario) {
        boolean exists = usuarioRepository.existsByNomePrato(usuario.getNomePrato());
        if (exists) {
            throw new IllegalArgumentException("Já existe um prato com esse nome.");
        }
        return usuarioRepository.save(usuario);
    }

    public Usuario atualizar(@Valid Usuario usuario) {
        Usuario existente = usuarioRepository.findById(usuario.getId())
                .orElseThrow(() -> new IllegalArgumentException("Prato não encontrado."));

        existente.setNomePrato(usuario.getNomePrato());
        existente.setDescricao(usuario.getDescricao());
        existente.setPreco(usuario.getPreco());
        existente.setCategoria(usuario.getCategoria());
        existente.setDisponibilidade(usuario.getDisponibilidade());
        existente.setUrlImagem(usuario.getUrlImagem());

        return usuarioRepository.save(existente);
    }

    public void excluir(Long id) {
        Usuario usuario = usuarioRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Prato não encontrado."));
        usuarioRepository.delete(usuario);
    }
}
