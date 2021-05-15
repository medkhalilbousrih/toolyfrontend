import { useEffect, useState } from "react";
import Container from "@material-ui/core/Container";
import styled from "styled-components";
import CartCard from "./CartCard";

const Cart = () => {
  const [cart, setCart] = useState(null);
  useEffect(() => {
    const locCart = JSON.parse(window.localStorage.getItem("connectedUser"));
    if (locCart) {
      setCart(locCart.cart);
    }
  }, []);
  return (
    <>
      <Container maxWidth="lg">
        <View>
          <h1>
            <i
              className="fas fa-cart-arrow-down fa-2x"
              style={{ fontSize: "2.8rem" }}
            ></i>
            &nbsp;CART
          </h1>
          <TitleDefines>
            <p>TOOL NAME</p>
            <p>Total</p>
            <p>OWNER</p>
            <p>DISPONABILITY</p>
            <p>STATUS</p>
            <p style={{}}></p>
          </TitleDefines>
          <CardContainer>
            {cart?.map((item) => (
              <CartCard key={item.id} item={item} />
            ))}
          </CardContainer>
        </View>
      </Container>
    </>
  );
};

const View = styled.div`
  margin-bottom: 2rem;
  h1 {
    font-family: Roboto;
    font-size: 2.8125rem;
    padding-top: 2rem;
  }
`;
const TitleDefines = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: space-between;
  font-family: "Open Sans";
  font-size: 0.7rem;
  font-weight: bold;
  align-items: center;

  p {
    width: 20%;
    text-align: center;
  }
`;
const CardContainer = styled.div``;

export default Cart;
