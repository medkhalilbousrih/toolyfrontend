import { Navbar, Nav } from "react-bootstrap";
import { Link, useRouteMatch } from "react-router-dom";

const SupplierNav = () => {
  let { path, url } = useRouteMatch();
  return (
    <Navbar bg="light" variant="light">
      <Nav>
        <Link to={`${url}/addtool`} className="nav-link">
          Add Tool
        </Link>
        <Link to="/" className="nav-link">
          Home
        </Link>

        <Link to="/" className="nav-link">
          Home
        </Link>
      </Nav>
    </Navbar>
  );
};

export default SupplierNav;
