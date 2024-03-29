import { CartItem } from '../components/CartItem';
import { useShoppingCart } from '../components/context/CartContext';
import utils from '../styles/utils.module.css';
import { getSubtotal } from '../components/utils/getSubtotal';
export const Cart = (): JSX.Element => {
  const { cartItems } = useShoppingCart();

  return (
    <div className={utils.container}>
      <h1>Your Shopping Cart</h1>
      <p>Number of Items: {cartItems.length}</p>
      <p>Subtotal: {getSubtotal(cartItems)}</p>
      <div>
        {cartItems.map((item) => {
          return (
            <CartItem key={item.id} id={item.id} quantity={item.quantity} />
          );
        })}
      </div>
    </div>
  );
};
