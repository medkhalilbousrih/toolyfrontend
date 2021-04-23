import styled from "styled-components";

const ClientProfileInfo = () => {
  return (
    <>
      <Profile>
        <Data>
          <h2>Mohamed Aymen Khlil</h2>
          <Infocont>
            <YellowLittleInfo>
              <div>Gender</div>
              <div>Male</div>
            </YellowLittleInfo>
            <YellowLittleInfo>
              <div>Birthday</div>
              <div>July,03 1996</div>
            </YellowLittleInfo>
            <YellowLittleInfo>
              <div>Phone Number</div>
              <div>+216 22732763</div>
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
              <div>Registred Date</div>
              <div>+216 22732763</div>
            </YellowLittleInfo>
          </Infocont>
        </Data>
        <Photozone>
          <Imgg></Imgg>
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
const Imgg = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 5px solid #353535;
  background-image: url("/Images/aymen.jpg");
  background-position: center;
  background-size: cover;
  margin-top: -3rem;
  z-index: 1;
`;
export default ClientProfileInfo;
