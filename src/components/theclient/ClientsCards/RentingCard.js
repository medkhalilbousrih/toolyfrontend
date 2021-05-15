import styled from "styled-components";
import Figure from "react-bootstrap/Figure";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import { Router } from "react-router-dom";
import React from "react";
import Rate from "../Rate";

const useStyles = makeStyles((theme) => ({
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
}));
const RentingCard = ({ data }) => {
  const classes = useStyles();
  const history = useHistory();
  const getDetails = () => {
    history.push("/product/" + data.id);
  };

  return (
    <>
      <RentalCard>
        <Bloc1 onClick={getDetails}>
          <Figure>
            <Figure.Image
              width={60}
              height={60}
              alt="Tool img"
              src={`${data.imageUrls[0]}`}
            />
          </Figure>
        </Bloc1>
        <Bloc2>
          <p
            style={{
              color: "#a9aaab",
              fontSize: "0.9rem",
              fontFamily: "Roboto",
              fontWeight: "lighter",
            }}
          >
            Tool
          </p>
          <p>{data.name}</p>
        </Bloc2>
        <Bloc2>
          <p
            style={{
              color: "#a9aaab",
              fontSize: "0.9rem",
              fontFamily: "Roboto",
              fontWeight: "lighter",
            }}
          >
            Rental Date
          </p>
          <p>{data.rentDetails?.from.substring(0, 10)}</p>
        </Bloc2>
        <Bloc2>
          <p
            style={{
              color: "#a9aaab",
              fontSize: "0.9rem",
              fontFamily: "Roboto",
              fontWeight: "lighter",
            }}
          >
            Date of Return
          </p>
          <p>{data.rentDetails?.to.substring(0, 10)}</p>
        </Bloc2>
        <Bloc2>
          <div>
            <p
              style={{
                color: "#a9aaab",
                fontSize: "0.9rem",
                fontFamily: "Roboto",
                fontWeight: "lighter",
                marginBottom: "0.5rem",
              }}
            >
              Rate Tool
            </p>
          </div>
          <div
            style={{
              marginBottom: "15px",
            }}
          >
            <Rate rating={data.rating} id={data.id} />
          </div>
        </Bloc2>
        <Bloc2>
          <p
            style={{
              color: "#a9aaab",
              fontSize: "0.9rem",
              fontFamily: "Roboto",
              fontWeight: "lighter",
            }}
          >
            Total Price
          </p>
          <p>{data.rentDetails?.total}</p>
        </Bloc2>
      </RentalCard>
    </>
  );
};

const RentalCard = styled.div`
  width: 95%;
  height: 4.7rem;
  border-radius: 0.7rem;
  background: #fff;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  padding-right: 1.5rem;
  padding-left: 0.5rem;
  margin-top: 0.5rem;
  padding-bottom: 0.5;
`;

const Bloc1 = styled.div`
  margin-top: 0.5rem;
`;
const Bloc2 = styled.div``;

export default RentingCard;
