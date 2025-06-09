import './styles.css';

export default function ConfirmacaoDialog({ isOpen, message, onConfirm, onCancel }) {
  if (!isOpen) return null;

  return (
    <div className="overlay">
      <div className="dialog">
        <h3>Confirmação</h3>
        <p>{message}</p>
        <div className="dialog-buttons">
          <button onClick={onCancel} className="cancel-button">Cancelar</button>
          <button onClick={onConfirm} className="confirm-button">Confirmar</button>
        </div>
      </div>
    </div>
  );
}
