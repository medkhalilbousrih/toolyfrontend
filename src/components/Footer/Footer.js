import "./footer.css";
import { useLocation, Link } from "react-router-dom";

const Footer = () => {
  const location = useLocation();

  return (
    location.pathname !== "/login" &&
    location.pathname !== "/signup" && (
      <>
        <div className="container col-md-12">
          <div className="row">
            <div className="cadre col-4">
              <img className="Fimg" src="/logo.png" alt="Tooly" />
              <p className="ppp">
                Contact Tooly: <b className="yellow">99 999 999</b>
              </p>
            </div>
            <div className=" cadre catt col-2">
              <p className="size ppp">Information</p>
              <p>
                <Link to="/about" className="ss ppp">
                  About
                </Link>
              </p>
              <p>
                <Link to="/about" className="ss ppp">
                  Contact Us
                </Link>
              </p>
              <p>
                <Link to="/about" className="ss ppp">
                  F.A.Q?
                </Link>
              </p>
            </div>
            <div className=" cadre catt col-2">
              <p className="size ppp">MAIN PAGES</p>
              <p>
                <Link to="/catalogue" className="ss ppp">
                  Tools
                </Link>
              </p>
              <p>
                <Link to="/profile" className="ss ppp">
                  Profile
                </Link>
              </p>
              <p>
                <Link to="/Cart" className="ss ppp">
                  Cart
                </Link>
              </p>
            </div>
            <div className=" cadre catt sub col-4 ">
              <p className="size ppp">SUBSCRIBE</p>
              <p className="ss bb ppp">
                Subscribe to our newsletter, so that you can be the first to
                know about new offers and promotions.
              </p>
              <input type="text" className="form-control inputt "></input>
              <button type="button" className="btn btn-warning butt">
                SUBSCRIBE
              </button>
            </div>
          </div>
          <div className="row ">
            <div className="cadreJ">
              <p className="aa ppp ">© 2021. All Rights Reserved. BinaryWeb</p>
            </div>
          </div>
        </div>
      </>
    )
  );
};

export default Footer;
