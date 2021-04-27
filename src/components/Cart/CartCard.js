import styled from "styled-components";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";

import { makeStyles } from "@material-ui/core/styles";

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

const CartCard = () => {
  const classes = useStyles();
  return (
    <>
      <CCard>
        <ToolName>
          <p>Hammer</p>
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
              src="/Images/aymen.jpg"
              className={classes.small}
            />

            <p style={{ paddingLeft: "0.3rem" }}>Mohamed Aymen Khlil</p>
          </div>
        </ToolName>
        <ToolName>
          <p>Available</p>
        </ToolName>
        <ToolName>
          <Button
            variant="contained"
            color="secondary"
            className={classes.Button}
          >
            PROCEED $
          </Button>
        </ToolName>
        <ToolName>
          <i class="fas fa-times"></i>
        </ToolName>
      </CCard>
    </>
  );
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
