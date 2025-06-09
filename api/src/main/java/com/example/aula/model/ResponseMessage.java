package com.example.aula.model;

public class ResponseMessage {
    private String mensagem;
    private Object data;

    public ResponseMessage(String mensagem, Object data) {
        this.mensagem = mensagem;
        this.data = data;
    }

    public ResponseMessage(String mensagem) {
        this.mensagem = mensagem;
    }

    public String getMensagem() {
        return mensagem;
    }

    public void setMensagem(String mensagem) {
        this.mensagem = mensagem;
    }

    public Object getData() {
        return data;
    }

    public void setData(Object data) {
        this.data = data;
    }
}