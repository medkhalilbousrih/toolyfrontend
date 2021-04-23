import styled from "styled-components";
import ClientProfileInfo from "./ClientProfileInfo";
import ClientHistory from "./ClientHistory";

import { useEffect, useState } from "react";

const ClientContainer = () => {
  return (
    <SupContainer>
      <ClientProfileInfo />
      <ClientHistory />
    </SupContainer>
  );
};

const SupContainer = styled.div`
  width: 80%;
  margin-left: auto;
`;
export default ClientContainer;
