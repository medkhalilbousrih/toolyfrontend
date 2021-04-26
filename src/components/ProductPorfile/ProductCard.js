import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import PriceCard from "./PriceCard";
import SupplierCard from "./SupplierCard";
import productService from "./services/product";

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
    borderRadius: 0,
  },
  rootcard2: {
    maxWidth: 550,
    minWidth: 550,
    borderRadius: 0,
  },
  rootcard3: {
    minWidth: 432,
  },

  title: {
    fontSize: 14,
  },
  titlebluefonce: {
    fontSize: 14,
    color: "#1100fc",
  },
  titleblueclair: {
    fontSize: 14,
    color: "#1763e5",
  },
  Numero: {
    fontSize: 14,
    color: "black",
    fontWeight: "Bold",
  },
  pos: {
    marginBottom: 12,
  },

  title3: {
    fontSize: 14,
  },
  pos3: {
    marginBottom: 12,
  },
});

const ProductCard = () => {
  const user = JSON.parse(window.localStorage.getItem("connectedUser"));
  const [product, setProduct] = useState({});
  const { id } = useParams();
  const classes = useStyles();
  useEffect(() => {
    productService.getInfo(id).then((res) => setProduct(res));
  }, []);

  return (
    <>
      <Title>
        <a>Tool Name & Model : Lorem ipsum dolor sit amet</a>
      </Title>
      <CC>
        <Card className={classes.root} variant="outlined">
          <CardActionArea>
            <CardMedia
              className={classes.toolimage}
              component="img"
              alt="Taswira"
              height="300"
              image="/Images/hammer.PNG"
              title="Contemplative Reptile"
            />
          </CardActionArea>
        </Card>
        <Card className={classes.rootcard2} variant="outlined">
          <CardContent>
            <Typography variant="h6" component="h2">
              Tool Name & Model
            </Typography>
            <Flex1>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                Lorem ipsulun
              </Typography>
              <Typography className={classes.titlebluefonce} gutterBottom>
                XXXXXXXXXXX
              </Typography>
            </Flex1>
            <Flex1>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                Lorem ipsulun
              </Typography>
              <Typography
                className={classes.titlebluefonce}
                color="textSecondary"
                gutterBottom
              >
                YYYYYYYYYYY
              </Typography>
            </Flex1>
            <br />
            <Typography variant="body2" component="p">
              Description: well meaning and kindly.
            </Typography>
            <br />
            <Flex1>
              <Typography
                className={classes.titleblueclair}
                color="textSecondary"
                gutterBottom
              >
                Origin Localisation
              </Typography>
              <Typography
                className={classes.titlebluefonce}
                color="textSecondary"
                gutterBottom
              >
                ZZZZZZZZZZZZZZZ
              </Typography>
            </Flex1>

            <Flex1>
              <Typography
                className={classes.titleblueclair}
                color="textSecondary"
                gutterBottom
              >
                Actual Localisation
              </Typography>
              <Typography
                className={classes.titlebluefonce}
                color="textSecondary"
                gutterBottom
              >
                AAAAAAAAAAAA
              </Typography>
            </Flex1>
            <br />
            <Flex1>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                Aymen Khlil
              </Typography>
              <Typography className={classes.Numero} gutterBottom>
                99 999 999
              </Typography>
            </Flex1>
          </CardContent>
          <CardActions>
            <i class="fab fa-twitter-square"></i>
            <i class="fab fa-facebook-square"></i>
          </CardActions>
        </Card>
        {user?.role === "client" && <PriceCard />}
        {user?.role === "supplier" && user.id == product.supplier && (
          <SupplierCard />
        )}
      </CC>
    </>
  );
};

const Title = styled.div`
  font-family: Roboto;
  font-weight: 500;
  font-size: 20px;
  margin-top: 3.5rem;
  color: black;
  margin-bottom: 0.7rem;
`;
const CC = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 1.5rem;
`;
const Flex1 = styled.div`
  display: flex;
  justify-content: space-between;
`;
export default ProductCard;
