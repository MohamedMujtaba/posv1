import {
  Btn,
  CartItems,
  Footer,
  Header,
  Input,
  Item,
  Main,
  SubFooter,
} from "./CartStyle";
import { useGlobalContext } from "../../Context/Context";
import { CgClose } from "react-icons/cg";
import { BsPlusLg } from "react-icons/bs";
import { BiMinus } from "react-icons/bi";
import { useEffect } from "react";
import { addComma } from "../../utils/addComma";

const Cart = () => {
  const {
    cart,
    addToCart,
    clearCart,
    total,
    setTotal,
    discount,
    subTotal,
    setSubTotal,
    setDiscount,
  } = useGlobalContext();
  useEffect(() => {
    const tv = cart.reduce((acc, curr) => {
      acc += curr.price;
      return acc;
    }, 0);
    setSubTotal(tv);
  }, [cart, discount]);
  useEffect(() => {
    if (subTotal === 0) {
      setTotal(subTotal);
    } else {
      setTotal(subTotal - discount);
    }
  }, [discount, subTotal]);
  return (
    <Main>
      <Header>
        <h2>Cart</h2>
        <div onClick={clearCart}>
          <CgClose className="icon" />
        </div>
      </Header>
      <CartItems>
        {cart.map((i) => {
          return <CartItem data={i} addToCart={addToCart} />;
        })}
      </CartItems>
      <Footer>
        <div>
          <h3>Sub Total</h3>
          <h2>{addComma(subTotal)} $</h2>
        </div>
        <div>
          <h3>Discount</h3>
          <h2
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Input
              type="number"
              onChange={(e) => setDiscount(e.target.value)}
            />
            $
          </h2>
        </div>
        <div className="subFooter"></div>
      </Footer>
      <SubFooter>
        <div>
          <h3>Total</h3>
          <h2>{addComma(total)} $</h2>
        </div>
        <Btn>CHECK OUT</Btn>
      </SubFooter>
    </Main>
  );
};

const CartItem = ({ data }) => {
  return (
    <Item>
      <div style={{ display: "flex", height: "100%", alignItems: "center" }}>
        <img src={"https://picsum.photos/640/360"} alt="" />
        <div>
          <p>{data.name}</p>
          <h4>{addComma(data.price)}$</h4>
        </div>
      </div>
      <div>
        <span
          style={{
            display: "inline-flex",
            width: "30px",
            height: "30px",
            background: "#EAF2FD",
            borderRadius: "50%",
            alignItems: "center",
            justifyContent: "center",
            color: "#2F80ED",
            cursor: "pointer",
          }}
        >
          <BiMinus />
        </span>
        <span
          style={{
            width: "30px",
            height: "30px",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "16px",
          }}
        >
          1
        </span>
        <span
          style={{
            display: "inline-flex",
            width: "30px",
            height: "30px",
            background: "#EAF2FD",
            borderRadius: "50%",
            alignItems: "center",
            justifyContent: "center",
            color: "#2F80ED",
            cursor: "pointer",
          }}
        >
          <BsPlusLg />
        </span>
      </div>
    </Item>
  );
};

export default Cart;
