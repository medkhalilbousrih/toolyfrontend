import "./footer.css";

const Footer = () => {
  return (
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
            <p className="size ppp">MAIN PAGES</p>
            <p className="ss ppp">About</p>
            <p className="ss ppp">Contact Us</p>
            <p className="ss ppp">F.A.Q.?</p>
          </div>
          <div className=" cadre catt col-2">
            <p className="size ppp">CATEGORIES</p>
            <p className="ss ppp">Cat 1</p>
            <p className="ss ppp">Cat 2</p>
            <p className="ss ppp">Cat 3</p>
          </div>
          <div className=" cadre catt sub col-4 ">
            <p className="size ppp">SUBSCRIBE</p>
            <p className="ss bb ppp">
              Subscribe to our newsletter, so that you can be the first to know
              about new offers and promotions.
            </p>
            <input type="text" className="form-control inputt "></input>
            <button type="button" className="btn btn-warning butt">
              SUBSCRIBE
            </button>
          </div>
        </div>
        <div className="row ">
          <div className="cadreJ">
            <p className="aa ppp ">© 2018. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
