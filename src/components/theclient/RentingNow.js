import styled from "styled-components";
import Figure from "react-bootstrap/Figure";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";

import RentingCard from "./ClientsCards/RentingCard";
import ClientService from "../thesupplier/services/supplier";
import { useEffect, useState } from "react";
import Spinner from "./Spinner";

const useStyles = makeStyles((theme) => ({
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
}));

const Rentingnow = () => {
  const classes = useStyles();
  const [info, setInfo] = useState(null);
  useEffect(() => {
    ClientService.getAll()
      .then((res) => {
        setInfo(res);
        console.log(res);
      })
      .catch((err) => console.log(err.response));
  }, []);
  if (!info) {
    return <Spinner />;
  }

  return (
    <>
      <Cards>
        {info.rented.map((tool, index) => (
          <RentingCard key={index} data={tool} />
        ))}
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
