import styled from "styled-components";
import ClientProfileInfo from "./ClientProfileInfo";
import ClientHistory from "./ClientHistory";

import Spinner from "./Spinner";

import ClientService from "../thesupplier/services/supplier";

import { useEffect, useState } from "react";

const ClientContainer = () => {
  const [info, setInfo] = useState(null);
  useEffect(() => {
    ClientService.getAll()
      .then((res) => {
        setInfo(res);
        console.log(res);
      })
      .catch((err) => console.log(err.response));
  }, []);
  if (!info) {
    return <Spinner />;
  }
  return (
    <SupContainer>
      <ClientProfileInfo data={info} />
      <ClientHistory />
    </SupContainer>
  );
};

const SupContainer = styled.div`
  width: 80%;
  margin-left: auto;
`;
export default ClientContainer;
