import styled from "styled-components";
import Info from "./Info";
import SupplierNav from "./SupplierNav";
import AddTool from "./AddTool";
import Tools from "./Tools";
import { Route, Switch, useRouteMatch } from "react-router-dom";

const Profile = () => {
  let { path, url } = useRouteMatch();
  return (
    <Container>
      <Info />
      <SupplierNav url={url} />
      <Switch>
        <Route path={`${path}/addtool`}>
          <AddTool />
        </Route>
        <Route path={`${path}/addtool`}>
          <AddTool />
        </Route>
        <Route exact path={`${path}`}>
          <Tools />
        </Route>
      </Switch>
    </Container>
  );
};

const Container = styled.div`
  width: 80%;
  font-family: "Open Sans", sans-serif;
  margin: 0 auto;
  border-radius: 5rem;
`;

export default Profile;
