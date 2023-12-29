import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import CartContainer from './components/CartContainer';
import Modal from './components/Modal';
import Navbar, { RootState } from './components/Navbar';
import { useEffect } from 'react';
import { ModalState } from './features/modal/ModalSlice';
import { StateType, calculateTotals } from './features/cart/CartSlice';

function App() {
  const dispatch = useDispatch();
  const { cartItems } = useSelector<RootState, StateType>((state) => state.cart);
  const { isOpen } = useSelector<RootState, ModalState>((state) => state.modal);

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);

  console.log(isOpen);

  return (
    <main>
      {isOpen && <Modal />}
      <Navbar />
      <CartContainer />
    </main>
  );
}

export default App;
