import styled from "styled-components";

const ProfileInfo = ({ data }) => {
  return (
    <>
      <Profile>
        <Title>
          <h2>{data.username}</h2>
        </Title>
        <div>
          <Infocont>
            <YellowLittleInfo>
              <div style={{ fontWeight: "bold" }}>E-mail</div>
              <div>{data.email}</div>
            </YellowLittleInfo>
            <YellowLittleInfo>
              <div style={{ fontWeight: "bold" }}>City</div>
              <div>
                {data.address.state},{data.address.city}
              </div>
            </YellowLittleInfo>
            <YellowLittleInfo>
              <div style={{ fontWeight: "bold" }}>Phone Number</div>
              <div>{data.phoneNumber}</div>
            </YellowLittleInfo>
          </Infocont>
          <Infocont>
            <YellowLittleInfo>
              <div style={{ fontWeight: "bold" }}>Role</div>
              <div>{data.role}</div>
            </YellowLittleInfo>
          </Infocont>
        </div>
        <Img src={`${data.imageUrl}`}></Img>
        <Info>
          <div className="">Total Owned Tools: {data.tools.length}</div>

          <div className="">Tools being rented right now: 0</div>

          <div className="">Total sold Tools: 0</div>
        </Info>
      </Profile>
    </>
  );
};

const Img = styled.img`
  width: 8rem;
  height: 8rem;
  margin-top: -3.2rem;
  margin-left: -2.8rem;
  border-radius: 50%;
  border: 5px solid #353535;
  z-index: 1;
`;
const Profile = styled.div`
  background-color: #ffc800;
  width: 80%;
  margin: 2rem auto;
  margin-bottom: 5rem;
  height: 15rem;
  border-radius: 20px;
`;
const Info = styled.div`
  background-color: #353535;
  margin-top: -2.5rem;
  height: 2.5rem;
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

const YellowLittleInfo = styled.div`
  margin: 0 3rem;
  width: 10rem;
`;

const Title = styled.div`
  padding-top: 1rem;
  margin-left: 4rem;
  h2 {
    font-family: "Open Sans";
    font-weight: bold;
    font-size: 30px;
  }
`;

const Infocont = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin-left: 12rem;
  margin-top: 1rem;
`;
export default ProfileInfo;
