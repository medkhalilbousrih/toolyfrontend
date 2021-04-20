import styled from "styled-components";
import Image from "react-bootstrap/Image";

const ProfileInfo = () => {
  return (
    <Profile>
      <Img>
        <Image src="/Images/aymen.jpg" fluid roundedCircle />
      </Img>
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

const Img = styled.div`
  width: 10rem;
  margin-left: -5rem;
  margin-bottom: 5rem;
  background-color: #353535;
  border: 5px solid #353535;
  border-radius: 50%;
  img {
    max-width: 100%;
    border-radius: 50%;
  }
`;

export default ProfileInfo;
