import styled from "styled-components";

const ClientProfileInfo = ({ data }) => {
  return (
    <>
      <Profile>
        <Data>
          <h2>{data.username}</h2>
          <Infocont>
            <YellowLittleInfo>
              <div>Email</div>
              <div>{data.email}</div>
            </YellowLittleInfo>
            <YellowLittleInfo>
              <div>Birthday</div>
              <div>July,03 1996</div>
            </YellowLittleInfo>
            <YellowLittleInfo>
              <div>Phone Number</div>
              <div>{data.phoneNumber}</div>
            </YellowLittleInfo>
          </Infocont>
          <Infocont>
            <YellowLittleInfo>
              <div>Adress</div>
              <div>15 Street Maycen</div>
            </YellowLittleInfo>
            <YellowLittleInfo>
              <div>City</div>
              <div>July,03 1996</div>
            </YellowLittleInfo>
            <YellowLittleInfo>
              <div>Role</div>
              <div>{data.role}</div>
            </YellowLittleInfo>
          </Infocont>
        </Data>
        <Photozone>
          <Img src={`${data.imageUrl}`}></Img>
          <div>Renting Now: 0</div>
          <div>Rented OverAll: 0</div>
        </Photozone>
      </Profile>
    </>
  );
};
const Profile = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  background-color: #ffc800;
  width: 85%;
  margin: 2rem auto;
  height: 18rem;
  border-radius: 20px;
  position: relative;
`;

const YellowLittleInfo = styled.div`
  font-weight: 600;
  display: flex;
  flex-flow: column;
  flex-wrap: wrap;
  justify-content: space-around;
  text-align: center;
  margin-top: 1.5rem;
`;

const Infocont = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-left: -5rem;
`;
const Data = styled.div`
  padding-top: 2rem;
  margin-left: 7rem;
  margin-right: 2rem;
  h2 {
    font-family: "Open Sans";
    font-weight: 600;
    font-size: 30px;
  }
`;

const Photozone = styled.div`
  width: 9rem;
  height: 9rem;
  border-radius: 32px;
  background: #353535;
  margin-left: -4%;
  margin-top: -9%;
  div {
    text-align: center;
    color: white;
    font-size: 11px;
    padding-top: 0.2rem;
  }
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 5px solid #353535;

  background-position: center;
  background-size: cover;
  margin-top: -3rem;
  z-index: 1;
`;
export default ClientProfileInfo;
