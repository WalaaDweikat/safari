import "./cart.css";
import CartItem from "../../Components/CartItem/index.js";
export default function Cart() {
  return (
    <div className="cart">
      <h1>Shopping Cart</h1>
      <CartItem />
      <CartItem />
      <CartItem />
      <CartItem />
    </div>
  );
}
