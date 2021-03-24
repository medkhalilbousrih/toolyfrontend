import styled from "styled-components";
import Info from "./Info";
import SupplierNav from "./SupplierNav";
import AddTool from "./AddTool";
import { Route, Switch } from "react-router-dom";
import { Link, useRouteMatch } from "react-router-dom";
const Profile = () => {
  let { path, url } = useRouteMatch();
  return (
    <Container>
      <Info />
      <SupplierNav />
      <Switch>
        <Route path={`${path}/addtool`}>
          <AddTool />
        </Route>
      </Switch>
    </Container>
  );
};

const Container = styled.div`
  width: 80%;
  font-family: "Open Sans", sans-serif;
  margin: 0 auto;
`;

export default Profile;
