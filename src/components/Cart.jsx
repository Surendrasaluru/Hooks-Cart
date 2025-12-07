import CartItem, { cartItem } from "./CartItem";

const Cart = ({ cart, onUpdateQuantity, onRemove, total }) => {
  if (cart.length === 0) {
    return <div className="cart empty">Your cart is emptty</div>;
  }
  return (
    <div className="cart">
      <h2>Shopping cart</h2>
      {cart.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          onUpdateQuantity={onUpdateQuantity}
          onRemove={onRemove}
        />
      ))}
      <div className="cart-total">
        <h3>
          Your total amount :RS
          {typeof total === "string" ? total : total.toFixed(2)}
        </h3>
        <button className="checkout-btn">checkout</button>
      </div>
    </div>
  );
};

export default Cart;
