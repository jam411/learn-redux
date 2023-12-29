import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import CartContainer from './components/CartContainer';
import Navbar, { RootState } from './components/Navbar';
import { useEffect } from 'react';
import { StateType, calculateTotals } from './features/cart/CartSlice';

function App() {
  const dispatch = useDispatch();
  const { cartItems } = useSelector<RootState, StateType>((state) => state.cart);

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);

  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  );
}

export default App;
