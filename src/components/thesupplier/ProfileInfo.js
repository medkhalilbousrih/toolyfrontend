import styled from "styled-components";

const ProfileInfo = () => {
  return (
    <Profile>
      <Img>
        <img src="/Images/aymen.jpg" />
      </Img>
      <Info></Info>
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
