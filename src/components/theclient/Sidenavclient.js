import { Route, Switch, useRouteMatch } from "react-router-dom";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import ClientContainer from "./ClientContainer";

const Sidenavclient = () => {
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
              width: "100%",
            }}
          >
            {" "}
            <i className="fas fa-id-card"> </i> Overview
          </LinkStyle>
        </p>
        <p>
          <LinkStyle to={url}>
            {" "}
            <i className="fas fa-comments"> </i> Messages
          </LinkStyle>
        </p>
      </SupNav>
      <Separator></Separator>
      <Switch>
        <Route exact path={path}>
          <ClientContainer />
        </Route>
      </Switch>
    </>
  );
};

const SupNav = styled.div`
  width: 15%;
  margin-top: 6rem;
  color: #000000;
  font-family: "Open Sans";
`;

const LinkStyle = styled(NavLink)`
  display: block;
  width: "100%";
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
    width: "100%";
  }
`;

const Separator = styled.div`
  border-right: 0.1rem solid rgb(235, 235, 235);
`;
export default Sidenavclient;
