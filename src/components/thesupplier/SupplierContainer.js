import styled from "styled-components";
import ProfileInfo from "./ProfileInfo";
import Tool from "./Tool";
import supplierService from "./services/supplier";
import { useEffect, useState } from "react";
import Spinner from "./Spinner";

const SupplierContainer = () => {
  const [info, setInfo] = useState(null);
  useEffect(() => {
    supplierService
      .getAll()
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
      <ProfileInfo data={info} />
      <Tools>
        {info.tools.map((tool, index) => (
          <Tool key={index} data={tool} />
        ))}
      </Tools>
    </SupContainer>
  );
};
const Tools = styled.div`
  display: flex;
  width: 100%;
  flex-flow: row wrap;
  margin-bottom: 5rem;
`;

const SupContainer = styled.div`
  width: 80%;
  margin: auto;
`;
export default SupplierContainer;
