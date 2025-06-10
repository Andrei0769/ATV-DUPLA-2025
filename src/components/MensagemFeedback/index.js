import './styles.css';

function MensagemFeedback({ tipo, texto }) {
    if (!texto) return null;

    return (
        <div className={`mensagem mensagem-${tipo}`}>
            {texto}
        </div>
    );
}

export default MensagemFeedback;
