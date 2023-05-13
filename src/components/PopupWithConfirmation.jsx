import PopupWithForm from './PopupWithForm';

const PopupWithConfirmation = ({
  isOpen, onClose, onConfirm,
}) => {
  const handleConfirm = (evt) => {
    evt.preventDefault();
    onConfirm();
  };

  return (
    <PopupWithForm
      name="delete-card"
      title="Вы уверены?"
      buttonText="Да"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleConfirm}
    />
  );
};

export default PopupWithConfirmation;
