import styled from "styled-components";
import { NavLink, Redirect } from "react-router-dom";
import Rentingnow from "./RentingNow";
import BoughtItems from "./BoughtItems";
import RentedItems from "./RentedItems";
import MarquedItems from "./MarquedItems";
import {
  Route,
  Switch,
  useRouteMatch,
  BrowserRouter as Router,
} from "react-router-dom";
const ClientHistory = () => {
  let { path, url } = useRouteMatch();
  return (
    <>
      <BlackBoxContainer>
        <Router>
          <h2>HISTORY</h2>
          <LittleYellowBox>
            <div>
              <LinkStyle
                to={`${url}/Rentingnow`}
                activeStyle={{
                  backgroundColor: "#353535",
                  color: "white",
                }}
              >
                {" "}
                Renting Now
              </LinkStyle>
            </div>
            <div>
              <LinkStyle
                to={`${url}/RentedItems`}
                activeStyle={{
                  backgroundColor: "#353535",
                  color: "white",
                }}
              >
                {" "}
                Rented Items
              </LinkStyle>
            </div>
            <div>
              <LinkStyle
                to={`${url}/BoughtItems`}
                activeStyle={{
                  backgroundColor: "#353535",
                  color: "white",
                }}
              >
                {" "}
                Bought Items
              </LinkStyle>
            </div>
            <div>
              <LinkStyle
                to={`${url}/MarquedItems`}
                activeStyle={{
                  backgroundColor: "#353535",
                  color: "white",
                }}
              >
                {" "}
                Marqued Items
              </LinkStyle>
            </div>
          </LittleYellowBox>
          <FilterYellowBox>
            <div>
              <i className="fas fa-sort-amount-down "></i>
              &nbsp;
              <i className="fas fa-sort-amount-up-alt "></i>
              &nbsp;
              <i className="fas fa-sort-alpha-up "></i>
              &nbsp;
              <i className="fas fa-sort-alpha-down-alt "></i>
            </div>
          </FilterYellowBox>
          <BigYellowBox>
            <Route exact path={path}>
              <Redirect to={`${path}/Rentingnow`} />
            </Route>
            <Route exact path={`${path}/Rentingnow`}>
              <Rentingnow />
            </Route>
            <Route path={`${path}/RentedItems`}>
              <RentedItems />
            </Route>
            <Route path={`${path}/BoughtItems`}>
              <BoughtItems />
            </Route>
            <Route path={`${path}/MarquedItems`}>
              <MarquedItems />
            </Route>
          </BigYellowBox>
        </Router>
      </BlackBoxContainer>
      <br />
      <br />
      <br />
    </>
  );
};

const BlackBoxContainer = styled.div`
  background: #353535;
  height: 51rem;
  width: 85%;
  border-radius: 10px;
  margin: auto;

  h2 {
    font-family: Roboto;
    font-weight: 500;
    font-size: 1.5rem;
    color: #fff;
    margin-left: 2rem;
    padding-top: 1rem;
  }
`;
const LittleYellowBox = styled.div`
  margin-right: 20rem;
  height: 2.5rem;
  border-radius: 5px;
  background: #ffc800;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-weight: 600;
  margin-left: 2rem;
  flex-wrap: wrap;
`;

const FilterYellowBox = styled.div`
  margin-right: 2rem;
  height: 3rem;
  margin-top: 1rem;
  border-radius: 5px 5px 0px 0px;
  background: #ffc800;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-weight: 600;
  margin-left: 2rem;
  padding-left: 2rem;
  padding-right: 2rem;
  i {
    background: #fff;
    width: 28px;
    height: 24px;
    border-radius: 6px;
  }
`;
const BigYellowBox = styled.div`
  height: 37rem;
  margin-right: 2rem;
  border-radius: 0px 0px 5px 5px;
  background: #ffc800;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-weight: 600;
  margin-left: 2rem;
`;
const LinkStyle = styled(NavLink)`
  
  color: Black;
  
  margin-right: 1rem;
  border-radius: 5px;
  padding: 0.5rem 1rem;
  &:hover {
    background-color: #353535;
    font-weight: bolder;
    underline: none;
    text-decoration: none;
    color: white;
  }
  }
`;

export default ClientHistory;
