import styled from "styled-components";
import Sidenavclient from "./Sidenavclient";
const Client = () => {
  return (
    <View>
      <Sidenavclient />
    </View>
  );
};

const View = styled.div`
  display: flex;
  font-family: "Open Sans";
`;
export default Client;
