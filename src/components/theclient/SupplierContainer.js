import styled from "styled-components";
import ProfileInfo from "./ProfileInfo";

const SupplierContainer = () => {
  return (
    <SupContainer>
      <ProfileInfo />
      <DIV>aaa</DIV>
    </SupContainer>
  );
};

const SupContainer = styled.div`
  width: 80%;
  margin-left: auto;
`;

const DIV = styled.div``;
export default SupplierContainer;

await MyModel.findAndUpdateById(id, { $set: { name: "foo" } });
