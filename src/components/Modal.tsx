import { clearCart } from '../features/cart/CartSlice';
import { closeModal } from '../features/modal/ModalSlice';
import { useDispatch } from 'react-redux';

const Modal = () => {
  const dispatch = useDispatch();
  return (
    <div className="modal" tabIndex={-1}>
      <h4>Do you want to start your shopping cart from all?</h4>
      <div className="modal-buttons">
        <button
          className="btn btn-primary"
          onClick={() => {
            dispatch(clearCart());
            dispatch(closeModal());
          }}
        >
          Yes
        </button>
        <button className="btn btn-secondary" onClick={() => dispatch(closeModal())}>
          No
        </button>
      </div>
    </div>
  );
};

export default Modal;
