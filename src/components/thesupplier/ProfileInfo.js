import styled from "styled-components";
import Image from "react-bootstrap/Image";

const ProfileInfo = () => {
  return (
    <Profile>
      <Img>
        <Image src="/Images/aymen.jpg" fluid roundedCircle />
      </Img>
      <Info>
        <div className="">Total Owned Tools: 0</div>

        <div className="">Tools being rented right now: 0</div>

        <div className="">Total sold Tools: 0</div>
      </Info>
    </Profile>
  );
};

const Profile = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: flex-end;
  background-color: #ffc800;
  width: 80%;
  margin: 2rem auto;
  height: 18rem;
  border-radius: 20px;
`;
const Info = styled.div`
  background-color: #353535;
  height: 3.5rem;
  border-radius: 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  color: white;
  align-items: center;
  margin-left: 1rem;
  font-weight: lighter;
  font-family: "Open Sans";
`;

const Img = styled.div`
  width: 12rem;
  height: 12rem;
  background-color: #353535;
  border: 5px solid #353535;
  border-radius: 50%;
  margin-left: -5rem;
  margin-bottom: -3.5rem;
  z-index: 1;
  img {
    max-width: 100%;
    border-radius: 50%;
  }
`;

export default ProfileInfo;
