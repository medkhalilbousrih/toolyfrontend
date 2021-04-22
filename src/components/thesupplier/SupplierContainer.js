import styled from "styled-components";
import ProfileInfo from "./ProfileInfo";
import Tool from "./Tool";
import supplierService from "./services/supplier";
import { useEffect, useState } from "react";

const SupplierContainer = () => {
  const [info, setInfo] = useState({});
  useEffect(() => {
    supplierService
      .getAll()
      .then((res) => {
        setInfo(res);
        console.log(res);
      })
      .catch((err) => console.log(err.response));
  }, []);

  return (
    <SupContainer>
      <ProfileInfo data={info} />
      <Tools>
        {info.tools &&
          info.tools.map((tool, index) => <Tool key={index} data={tool} />)}
      </Tools>
    </SupContainer>
  );
};
const Tools = styled.div`
  display: flex;
  width: 100%;
  flex-flow: row wrap;
  margin: 4rem 2rem 4rem -1rem;
`;

const SupContainer = styled.div`
  width: 80%;
  margin-left: auto;
`;
export default SupplierContainer;
