// src\hooks\useMensagem.js

import { useState, useCallback } from "react";

function useMensagem() {
    const [mensagem, setMensagem] = useState({ tipo: '', texto: '' });

    const mostrarSucesso = useCallback((texto) => {
        setMensagem({ tipo: 'sucesso', texto });
    }, []);

    const mostrarErro = useCallback((texto) => {
        setMensagem({ tipo: 'erro', texto });
    }, []);

    const limparMensagem = useCallback(() => {
        setMensagem({ tipo: '', texto: '' });
    }, []);

    return {
        mensagem,
        mostrarSucesso,
        mostrarErro,
        limparMensagem
    };
}

export default useMensagem