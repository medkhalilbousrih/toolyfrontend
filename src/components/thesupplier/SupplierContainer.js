import styled from "styled-components";
import ProfileInfo from "./ProfileInfo";
import Tool from "./Tool";

const SupplierContainer = () => {
  return (
    <SupContainer>
      <ProfileInfo />
      <Tools>
        <Tool />
      </Tools>
    </SupContainer>
  );
};
const Tools = styled.div`
  display: flex;
  width: 100%;
  flex-flow: row wrap;
  margin: 4rem 2rem 4rem 2rem;
`;

const SupContainer = styled.div`
  width: 80%;
  margin-left: auto;
`;
export default SupplierContainer;
