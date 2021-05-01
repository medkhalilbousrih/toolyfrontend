import styled from "styled-components";
import Figure from "react-bootstrap/Figure";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
}));
const RentingCard = ({ data }) => {
  const classes = useStyles();

  return (
    <>
      <RentalCard>
        <Bloc1>
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
          <p>{data.rentDetails?.from}</p>
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
          <p>{data.rentDetails?.to}</p>
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
              Tool Owner
            </p>
          </div>
          <div style={{ display: "flex" }}>
            <Avatar
              alt="Remy Sharp"
              src="/Images/aymen.jpg"
              className={classes.small}
            />
            <div style={{ paddingLeft: "0.3rem" }}>
              <p>supplier name</p>
              <p
                style={{
                  marginTop: "-1.4rem",
                  fontWeight: "lighter",
                  fontSize: "0.7rem",
                }}
              >
                22732763
              </p>
            </div>
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
          <p>{data.price}</p>
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
