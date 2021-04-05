import { Route, Switch, useRouteMatch } from "react-router-dom";
import styled from "styled-components";
import SupplierContainer from "./SupplierContainer";
import AddTool from "./Add Tools/AddTool";
import { NavLink } from "react-router-dom";
import ToolsTrack from "./ToolsTrack";

const Navigation = () => {
  let { path, url } = useRouteMatch();
  return (
    <>
      <SupNav>
        <p>
          <LinkStyle
            exact
            to={url}
            activeStyle={{
              backgroundColor: "#ffc800",
            }}
          >
            {" "}
            <i class="fas fa-id-card"> </i> Overview
          </LinkStyle>
        </p>
        <p>
          <LinkStyle to={url}>
            {" "}
            <i class="fas fa-comments"> </i> Messages
          </LinkStyle>
        </p>
        <p>
          <LinkStyle
            to={`${url}/ToolsTrack`}
            activeStyle={{
              backgroundColor: "#ffc800",
            }}
          >
            {" "}
            <i class="fas fa-hammer"> </i> Tools Track
          </LinkStyle>
        </p>
        <p>
          <LinkStyle
            to={`${url}/addtool`}
            activeStyle={{
              backgroundColor: "#ffc800",
            }}
          >
            {" "}
            <i class="fas fa-plus-square"> </i> Add Tool
          </LinkStyle>
        </p>
      </SupNav>
      <Separator></Separator>
      <Switch>
        <Route exact path={path}>
          <SupplierContainer />
        </Route>
        <Route path={`${path}/addtool`}>
          <AddTool />
        </Route>
        <Route path={`${path}/ToolsTrack`}>
          <ToolsTrack />
        </Route>
      </Switch>
    </>
  );
};

const SupNav = styled.div`
  width: 17%;
  margin-top: 6rem;
  color: #000000;
  font-family: "Open Sans";
`;

const LinkStyle = styled(NavLink)`
  display: block;
  color: black;
  margin-bottom: 0;
  margin-right: 1rem;
  border-radius: 5px;
  padding: 1.4rem 1rem;
  &:hover {
    background-color: #ffc800;
    font-weight: bolder;
    underline: none;
    text-decoration: none;
    color: black;
  }
`;

const Separator = styled.div`
  border-right: 0.1rem solid rgb(235, 235, 235);
`;
export default Navigation;
