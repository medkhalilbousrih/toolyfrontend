import styled from "styled-components";
import React from "react";
import Button from "react-bootstrap/Button";
import deleteService from "../../thesupplier/services/tools";

const ProductDelete = (props) => {
  return props.trigger ? (
    <>
      <Popup>
        <PopupInner>
          <Btn>
            <i onClick={() => props.setTrigger(false)} class="fas fa-times"></i>
          </Btn>
          {props.children}
          <h3
            style={{ color: "red", paddingLeft: "1rem", marginBottom: "1rem" }}
          >
            You are requesting to delete this Product ! Are You Sure ?
          </h3>
          <YesNo>
            <Button style={{ width: "25%" }} block variant="warning">
              Yes
            </Button>
            <Button
              onClick={() => props.setTrigger(false)}
              style={{ width: "25%" }}
              block
              variant="dark"
            >
              No
            </Button>
          </YesNo>
        </PopupInner>
      </Popup>
    </>
  ) : (
    ""
  );
};

const Popup = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;
const PopupInner = styled.div`
  position: relative;
  width: 70%;
  background-color: #fff;
`;
const Btn = styled.div`
  margin-left: 97%;
  padding-top: 1rem;
  i {
    postion: relative;
    font-size: 1.5rem;
  }
`;

const YesNo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1rem;
`;

export default ProductDelete;
