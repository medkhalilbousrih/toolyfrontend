import styled from "styled-components";

const Info = () => {
  return (
    <StyledInfo>
      <h1>Caterpillar</h1>
      <Details>
        <div>
          <p>
            <b>Address</b>
          </p>
          <p>Tunis</p>
        </div>
        <div>
          <p>
            <b>City</b>
          </p>
          <p>Tunis</p>
        </div>
        <div>
          <p>
            <b>Registration Date</b>
          </p>
          <p>Tunis</p>
        </div>
        <div>
          <p>
            <b>Phonebook</b>
          </p>
          <p>Tunis</p>
        </div>
      </Details>
      <Stats></Stats>
    </StyledInfo>
  );
};

const Stats = styled.div`
  background-color: #353535;
  height: 3rem;
`;

const StyledInfo = styled.div`
  background-color: #ffc800;
  border-radius: 3rem;
  h1 {
    margin-left: 2rem;
  }
`;
const Details = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  margin-left: 20rem;
  margin-top: 5rem;
  margin-bottom: 5rem;
  p {
    flex-basis: 5rem;
    margin: 0 3rem;
  }
`;
export default Info;
