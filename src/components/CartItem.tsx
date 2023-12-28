import { CartItemType } from '../features/cart/CartSlice';
import { MinusIcon, PlusIcon } from '../assets/HeroIcon';

const CartItem = ({ id, img, title, price, amount }: CartItemType) => {
  return (
    <article className="cart-item">
      <img src={img} alt=""></img>
      <div>
        <h4>{title}</h4>
        <h4 className="item-price">{price}$</h4>
        <button className="remove-btn">remove</button>
      </div>
      <div>
        <button className="amount-btn">
          <PlusIcon />
        </button>
        <p className="amount">{amount}</p>
        <button className="amount-btn">
          <MinusIcon />
        </button>
      </div>
    </article>
  );
};

export default CartItem;
