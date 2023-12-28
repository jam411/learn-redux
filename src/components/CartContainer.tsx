import { useSelector } from 'react-redux';
import { StateType } from '../features/cart/CartSlice';
import { RootState } from './Navbar';
import CartItem from './CartItem';

const CartContainer = () => {
  const { amount, cartItems, total } = useSelector<RootState, StateType>((state) => state.cart);
  console.log(amount, cartItems, total);

  if (amount < 1) {
    return (
      <section className="cart">
        {/* cart header */}
        <header>
          <h2>Your Cart</h2>
          <h4 className="empty-cart">is currently empty 😿</h4>
        </header>
      </section>
    );
  }

  return (
    <section className="cart">
      <header>
        <h2>Your Cart</h2>
      </header>
      <div>
        {cartItems.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </div>
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            Total <span>{total} $</span>
          </h4>
        </div>
        <button className="btn clear-btn">Clear Cart</button>
      </footer>
    </section>
  );
};

export default CartContainer;