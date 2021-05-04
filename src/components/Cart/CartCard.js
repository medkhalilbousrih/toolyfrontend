import { useEffect, useState } from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
import productService from "../ProductPorfile/services/product";

const useStyles = makeStyles((theme) => ({
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  Button: {
    color: "black",
    backgroundColor: "#ffc800",
    borderRadius: "0",
    boxShadow: "none",
    height: "30px",
    width: "89px",
    fontSize: "0.6rem",
    "&:hover": {
      backgroundColor: "#353535",

      color: "white",
      boxShadow: "none",
    },
  },
}));

const CartCard = ({ item }) => {
  const classes = useStyles();
  const [tool, setTool] = useState();
  useEffect(() => {
    productService.getInfo(item.id).then((res) => {
      setTool(res);
    });
  }, []);

  const handleClick = () => {
    productService
      .rentTool({ id: item.id, to: item.to })
      .then((res) => {
        setTool(null);
        const user = JSON.parse(window.localStorage.getItem("connectedUser"));
        user.cart = user.cart.filter((i) => i.id !== item.id);
        window.localStorage.setItem("connectedUser", JSON.stringify(user));
      })
      .catch((err) => console.log(err.response));
  };
  if (!tool) {
    return null;
  } else {
    return (
      <>
        <CCard>
          <ToolName>
            <p>{tool?.name}</p>
          </ToolName>
          <ToolName>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "baseline",
              }}
            >
              <Avatar
                alt="Remy Sharp"
                src={tool?.supplier.imageUrl}
                className={classes.small}
              />

              <p style={{ paddingLeft: "0.3rem" }}>{tool?.supplier.name}</p>
            </div>
          </ToolName>
          <ToolName>
            <p>{tool?.state}</p>
          </ToolName>
          <ToolName>
            <Button
              variant="contained"
              color="secondary"
              className={classes.Button}
              onClick={handleClick}
              disabled={tool.state === "rented"}
            >
              PROCEED $
            </Button>
          </ToolName>
          <ToolName>
            <i className="fas fa-times"></i>
          </ToolName>
        </CCard>
      </>
    );
  }
};
const CCard = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 0.7rem;
  align-items: baseline;
`;
const ToolName = styled.div`
  width: 20%;
  text-align: center;
`;
export default CartCard;
