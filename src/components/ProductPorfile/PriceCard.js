import styled from "styled-components";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { useState } from "react";
import Button from "react-bootstrap/Button";

const useStyles = makeStyles({
  rootcard3: {
    minWidth: 382,
    maxWidth: 382,
    borderRadius: 0,
  },

  title3: {
    fontSize: 14,
    marginTop: "1rem",
  },
  pos3: {
    marginBottom: 12,
  },
  warning: {
    fontSize: 11,
    color: "red",
    marginTop: "0.5rem",
  },
  Pricegras: {
    fontWeight: "Bold",
    fontSize: 17,
    marginTop: "1rem",
  },
});

const PricedCard = ({ price, id }) => {
  const classes = useStyles();

  const [num, setNum] = useState(1);

  const incNum = () => {
    setNum(num + 1);
  };
  const minNum = () => {
    if (num > 0) {
      setNum(num - 1);
    }
  };
  const handleClick = () => {
    let user = JSON.parse(window.localStorage.getItem("connectedUser"));
    const to = new Date();
    to.setDate(to.getDate() + num);
    if (user) {
      user.cart = user.cart.concat({
        id,
        total: price * num,
        to: to.toUTCString(),
      });
      window.localStorage.setItem("connectedUser", JSON.stringify(user));
    } else {
      user.cart = [{ id, total: price * num, to: to.toUTCString() }];
      window.localStorage.setItem("connectedUser", JSON.stringify(user));
    }
  };
  return (
    <>
      <Card className={classes.rootcard3} variant="outlined">
        <CardContent>
          <Flex1>
            <Typography
              className={classes.title3}
              color="textSecondary"
              gutterBottom
            >
              From
            </Typography>
            <Typography className={classes.title3} gutterBottom>
              XXXXXXXXXXX
            </Typography>
          </Flex1>
          <Flex1>
            <Typography
              className={classes.title3}
              color="textSecondary"
              gutterBottom
            >
              Number of Days
            </Typography>
            <IncDec>
              <div>
                <i onClick={incNum} class="fas fa-plus"></i>
              </div>
              &nbsp;&nbsp;
              <div>
                <Typography
                  className={classes.title3}
                  color="textSecondary"
                  gutterBottom
                >
                  {num}
                </Typography>
              </div>
              &nbsp;&nbsp;
              <div>
                <i onClick={minNum} class="fas fa-minus"></i>
              </div>
            </IncDec>
          </Flex1>
          <Flex1>
            <Typography
              className={classes.title3}
              color="textSecondary"
              gutterBottom
            >
              Day of return
            </Typography>
            <Typography className={classes.title3} gutterBottom>
              XXXXXXXXXXX
            </Typography>
          </Flex1>
          <Typography
            className={classes.warning}
            color="textSecondary"
            gutterBottom
          >
            WARNING : Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
            sed
          </Typography>
          <Flex1>
            <Typography
              className={classes.title3}
              color="textSecondary"
              gutterBottom
            >
              Total Price
            </Typography>
            <Typography className={classes.Pricegras} gutterBottom>
              {price * num}
            </Typography>
          </Flex1>

          <Button block variant="warning" onClick={handleClick}>
            ADD TO CART
          </Button>
        </CardContent>
      </Card>
    </>
  );
};

const Flex1 = styled.div`
  display: flex;
  justify-content: space-between;
`;

const IncDec = styled.div`
  display: flex;
  align-items: baseline;
  div {
    i {
      font-size: 10px;
    }
  }
`;

export default PricedCard;
