import { useSelector } from 'react-redux';
import type { StateType } from '../features/cart/CartSlice';
import { CartIcon } from '../assets/HeroIcon';

// TODO: check type
export interface RootState {
  cart: StateType;
  modal: {
    isOpen: boolean;
  };
}

const Navbar = () => {
  const { amount } = useSelector<RootState, StateType>((store) => store.cart);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <h3 className="navbar-brand">Redux Shopping</h3>
        <div>
          <CartIcon />
          <div>
            <p className="badge bg-secondary">{amount}</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
