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
    minWidth: 450,
    maxWidth: 850,
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

const BasicInfos = () => {
  const classes = useStyles();

  return (
    <>
      <AllContainer>
        <LeftContainer>
          <YellowBloc>
            <LittleBlackBox>
              <p>Caracteristiques</p>
            </LittleBlackBox>
          </YellowBloc>
          <Card className={classes.rootcard2} variant="outlined">
            <CardContent>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam
              </Typography>
              <br />

              <Typography variant="body2" component="p">
                Lorem ipsum dolor
              </Typography>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam
              </Typography>
              <br />
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam
              </Typography>
              <br />
            </CardContent>
          </Card>

          <YellowBloc>
            <LittleBlackBox>
              <p>Safety</p>
            </LittleBlackBox>
          </YellowBloc>
          <Card className={classes.rootcard2} variant="outlined">
            <CardContent>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam
              </Typography>
              <br />

              <Typography variant="body2" component="p">
                Lorem ipsum dolor
              </Typography>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam
              </Typography>
              <br />
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam
              </Typography>
              <br />
            </CardContent>
          </Card>
        </LeftContainer>
        <RightContainer>
          <GrayBox>
            <i class="fas fa-mobile-alt"></i>
          </GrayBox>
          <GrayBox>
            <i class="fas fa-truck-pickup"></i>
          </GrayBox>
          <GrayBox>
            <i class="fas fa-coins"></i>
          </GrayBox>
        </RightContainer>
      </AllContainer>
    </>
  );
};

const AllContainer = styled.div`
  display: Flex;
  margin-top: 2rem;
  flex-wrap: wrap;
`;
const RightContainer = styled.div`
  margin-top: 4rem;
  margin-left: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const GrayBox = styled.div`
  width: 350px;
  height: 70px;
  background: #f5f5f5;
  margin-bottom: 1.5rem;
  i {
    font-size: 2rem;
    margin-left: -9rem;
    margin-top: 1.2rem;
    text-align: center;
    width: 100%;
  }
`;

const LeftContainer = styled.div``;

const YellowBloc = styled.div`
  background-color: #ffc800;
  width: 69%;
  height: 37px;
  display: flex;
  align-items: flex-end;
  padding-left: 0.5rem;
  margin-top: 1rem;
`;

const LittleBlackBox = styled.div`
  background-color: #000;
  width: 20%;
  height: 33px;
  p {
    color: white;
    padding-top: 0.3rem;
    text-align: center;
  }
`;

export default BasicInfos;
