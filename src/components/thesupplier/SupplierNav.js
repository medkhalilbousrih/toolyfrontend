import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SupplierNav = ({ url }) => {
  return (
    <Navbar bg="light" variant="light">
      <Nav>
        <Link to={`${url}`} className="nav-link">
          Tools
        </Link>
        <Link to={`${url}/addtool`} className="nav-link">
          Add Tool
        </Link>
        <Link to={`${url}/addtool`} className="nav-link">
          Statistics
        </Link>
      </Nav>
    </Navbar>
  );
};

export default SupplierNav;
