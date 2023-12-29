import { CartItemType, decrease, increase } from '../features/cart/CartSlice';
import { MinusIcon, PlusIcon } from '../assets/HeroIcon';
import { useDispatch } from 'react-redux';
import { removeItem } from '../features/cart/CartSlice';

const CartItem = ({ id, img, title, price, amount }: CartItemType) => {
  const dispatch = useDispatch();

  return (
    <article className="cart-item row">
      <div className="col-4">
        <img src={img} alt={title} className="img-fluid"></img>
      </div>
      <div className="col-4">
        <h4>{title}</h4>
        <h4 className="item-price">{price}$</h4>
        <button className="remove-btn" onClick={() => dispatch(removeItem(id))}>
          remove
        </button>
      </div>
      <div className="col-4">
        <button className="amount-btn" onClick={() => dispatch(increase(id))}>
          <PlusIcon />
        </button>
        <p className="amount">{amount}</p>
        <button
          className="amount-btn"
          onClick={() => {
            if (amount === 1) {
              dispatch(removeItem(id));
              return;
            }
            dispatch(decrease(id));
          }}
        >
          <MinusIcon />
        </button>
      </div>
    </article>
  );
};

export default CartItem;
