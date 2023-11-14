import './cart-item.styles.scss';

const CartItem = ({ CartItem }) => {
  const { name, quantity } = CartItem
  return (
    <div>
      <h2>{name}</h2>
    </div>
  );
}

export default CartItem;