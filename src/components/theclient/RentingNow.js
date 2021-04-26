import styled from "styled-components";
import Figure from "react-bootstrap/Figure";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";

import RentingCard from "./ClientsCards/RentingCard";

const useStyles = makeStyles((theme) => ({
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
}));

const Rentingnow = () => {
  const classes = useStyles();
  return (
    <>
      <Cards>
        <RentingCard />
        <RentingCard />
        <RentingCard />
        <RentingCard />
      </Cards>
    </>
  );
};

const Cards = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  align-items: center;
`;

export default Rentingnow;
