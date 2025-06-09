package com.example.aula.controller;

import com.example.aula.model.ResponseMessage;
import com.example.aula.model.Usuario;
import com.example.aula.service.UsuarioService;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/pratos")
public class UsuarioController {

    private final UsuarioService usuarioService;

    public UsuarioController(UsuarioService usuarioService) {
        this.usuarioService = usuarioService;
    }

    @GetMapping
    public ResponseEntity<List<Usuario>> listar() {
        return ResponseEntity.ok(usuarioService.listarTodos());
    }

    @PostMapping
    public ResponseEntity<ResponseMessage> salvar(@RequestBody @Valid Usuario usuario) {
        usuarioService.salvar(usuario);
        return ResponseEntity.ok(new ResponseMessage("Prato adicionado com sucesso"));
    }

    @PutMapping("/{id}")
    public ResponseEntity<ResponseMessage> atualizar(@PathVariable Long id, @RequestBody @Valid Usuario usuario) {
        usuario.setId(id);
        usuarioService.atualizar(usuario);
        return ResponseEntity.ok(new ResponseMessage("Prato atualizado com sucesso"));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<ResponseMessage> excluir(@PathVariable Long id) {
        usuarioService.excluir(id);
        return ResponseEntity.ok(new ResponseMessage("Prato excluído com sucesso"));
    }
}