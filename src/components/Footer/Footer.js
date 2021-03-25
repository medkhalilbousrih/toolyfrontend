import "./footer.css";

const Footer = () => {
  return (
    <>
      <div className="container col-md-12">
        <div className="row">
          <div className="cadre col-4">
            <img className="Fimg" src="/logo.png" alt="Tooly" />
            <p>
              Contact Tooly: <b className="yellow">99 999 999</b>
            </p>
          </div>
          <div className=" cadre catt col-2">
            <p className="size">MAIN PAGES</p>
            <p className="ss">About</p>
            <p className="ss">Contact Us</p>
            <p className="ss">F.A.Q.?</p>
          </div>
          <div className=" cadre catt col-2">
            <p className="size">CATEGORIES</p>
            <p className="ss">Cat 1</p>
            <p className="ss">Cat 2</p>
            <p className="ss">Cat 3</p>
          </div>
          <div className=" cadre catt sub col-4">
            <p className="size">SUBSCRIBE</p>
            <p className="ss bb ">
              Subscribe to our newsletter, so that you can be the first to know
              about new offers and promotions.
            </p>
            <input type="text" className="form-control inputt "></input>
            <button type="button" class="btn btn-warning butt">
              SUBSCRIBE
            </button>
          </div>
        </div>
        <div className="row ">
          <div className="cadreJ">
            <p className="aa">© 2018. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
