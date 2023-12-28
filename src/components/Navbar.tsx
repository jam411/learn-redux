import React from 'react';
import { useSelector } from 'react-redux';
import type { StateType } from '../features/cart/CartSlice';
import { CartIcon } from '../assets/HeroIcon';

// TODO: check type
export interface RootState {
  cart: StateType;
}

const Navbar = () => {
  const { amount } = useSelector<RootState, StateType>((store) => store.cart);

  return (
    <nav>
      <div className="nav-center">
        <h3>Redux Shoppping</h3>
        <div className="nav-container">
          <CartIcon />
          <div className="amount-container">
            <p className="total-amount">{amount}</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
