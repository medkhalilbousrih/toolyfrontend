import styled from "styled-components";

import Info from "./Info";
import SupplierNav from "./SupplierNav";

const Profile = () => {
  return (
    <Container>
      <Info />
      <SupplierNav />
    </Container>
  );
};

const Container = styled.div`
  width: 80%;
  font-family: "Open Sans", sans-serif;
  margin: 0 auto;
`;

export default Profile;
