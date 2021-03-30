import "./Suppliers.css";
import Card from "react-bootstrap/Card";

const Suppliers = () => {
  return (
    <>
      <div className="container col-md-12">
        <div className="row">
          <div
            className="m-0 s1 nav flex-column nav-pills col-2 bordersup"
            id="v-pills-tab "
            role="tablist "
            aria-orientation="vertical "
          >
            <br />
            <br />
            <br />
            <a
              className=" hov nav-link psup pmnsup"
              id="v-pills-home-tab"
              data-toggle="pill"
              href="#"
              role="tab "
              aria-controls="v-pills-home "
              aria-selected="true"
            >
              <i class="fas fa-id-card"></i>&nbsp;&nbsp;Overview
            </a>
            <a
              className="hov nav-link psup pmnsup"
              id="v-pills-profile-tab"
              data-toggle="pill"
              href="#"
              role="tab"
              aria-controls="v-pills-profile"
              aria-selected="false"
            >
              <i class="fas fa-comments"></i>
              &nbsp;&nbsp;Messages
            </a>
            <a
              className="hov nav-link psup pmnsup"
              id="v-pills-profile-tab"
              data-toggle="pill"
              href="#"
              role="tab"
              aria-controls="v-pills-profile"
              aria-selected="false"
            >
              <i class="fas fa-hammer"></i>
              &nbsp;&nbsp;Tools Track
            </a>
            <a
              className="hov nav-link psup pmnsup"
              id="v-pills-profile-tab"
              data-toggle="pill"
              href="#"
              role="tab"
              aria-controls="v-pills-profile"
              aria-selected="false"
            >
              <i class="fas fa-plus-square"></i>
              &nbsp;&nbsp;Add Tool
            </a>
          </div>
          <div className="col-10">
            <div className="row">
              <div className=" ccsup ">
                <p className="NameTitlesup">TOOLYYYY</p>
                <div className="order">
                  <div className="order1">
                    <p className="gra">Type</p>
                    <p>Company</p>
                  </div>
                  <div className="order1">
                    <p className="gra">City</p>
                    <p>Tunis,Tunisia</p>
                  </div>
                  <div className="order1">
                    <p className="gra">Phone Number</p>
                    <p>+216 33 333 333</p>
                  </div>
                  <div className="order1">
                    <p className="gra">Adress</p>
                    <p>15, street Diamond</p>
                  </div>
                  <div className="order1">
                    <p className="gra">Registred Date</p>
                    <p>Mar 03,2021</p>
                  </div>
                </div>
              </div>
              <div className="mpsup">
                <div className="aftermpsup">
                  <div className="whitesup">
                    <p className="nb">0</p>
                    <p className="ktib">Total Owned Tools</p>
                  </div>
                  <div className="whitesup">
                    <p className="nb">0</p>
                    <p className="ktib">Total Owned Tools</p>
                  </div>
                  <div className="whitesup">
                    <p className="nb">0</p>
                    <p className="ktib">Total Owned Tools</p>
                  </div>
                </div>
              </div>
              <div className="dourasup">
                <img className="iisup" src="/Images/aymen.jpg" />
              </div>
            </div>
            <div className="row">
              <div>
                <img className="stat" src="/Images/stat.png" alt="stat" />
              </div>
              <div>
                <div className="boxstat">
                  <div className="dinars">
                    <span className="flouscolor">113,000</span>
                    <span className="flouscolor">Dinars</span>
                    <span className="azert">This Month so far</span>
                  </div>
                  <br />
                  <div className="dinars">
                    <span className="flouscolor">153,000</span>
                    <span className="flouscolor">Dinars</span>
                    <span className="azert">Previous Month</span>
                  </div>
                </div>
                <div className="boxstat">
                  <div className="dinars">
                    <span className="flouscolor nb0">0</span>
                    <span className="azert nb1">Total Tools Put For Sell </span>
                  </div>
                  <br />
                  <div className="dinars">
                    <span className="flouscolor nb0">0</span>
                    <span className="azert nb1 ">Total Tools Not Yet Sold</span>
                  </div>
                </div>
              </div>
              <div>
                <div className="boxstat1">
                  <div className="dinars">
                    <span className="flouscolor nb0">0</span>
                    <span className="azert nb1">
                      Tools Being Rented Right Now
                    </span>
                  </div>
                  <br />
                  <div className="dinars">
                    <span className="flouscolor nb0">0</span>
                    <span className="azert nb1 ">Tools Not Rented </span>
                  </div>
                </div>
                <div className="boxstat1">
                  <div className="dinars">
                    <span className="flouscolor nb0">0</span>
                    <span className="azert nb1">Total Owned Tools</span>
                  </div>
                  <br />
                  <div className="dinars">
                    <span className="flouscolor nb0">0</span>
                    <span className="azert nb1 ">Total Sold Tools </span>
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div className="row">
              <h2 className="listTool">My Tools List</h2>
              <div className="container col-12">
                <div className="row row-cols-5">
                  <div className="col ">
                    <Card className="cardpro" style={{ width: "15rem" }}>
                      <img
                        className="imgscale"
                        variant="top"
                        src="/Images/aymen.jpg"
                      />
                      <Card.Body className="boducolor">
                        <div className="ktibody">
                          <Card.Title>Tool Name</Card.Title>
                          <Card.Text>Category</Card.Text>
                          <Card.Text>Price: 30 Dinars</Card.Text>
                        </div>
                      </Card.Body>
                      <Card.Footer className="contfooter">
                        <a
                          href=""
                          class="btn btn-outline-success btn-sm bbtnupdate"
                        >
                          Update
                        </a>
                        &nbsp;&nbsp;
                        <a
                          href=""
                          class="btn btn-outline-danger btn-sm bbtndelete"
                        >
                          Delete
                        </a>
                      </Card.Footer>
                    </Card>
                  </div>
                  <div className="col ">
                    <Card className="cardpro" style={{ width: "15rem" }}>
                      <img
                        className="imgscale"
                        variant="top"
                        src="/Images/aymen.jpg"
                      />
                      <Card.Body className="boducolor">
                        <div className="ktibody">
                          <Card.Title>Tool Name</Card.Title>
                          <Card.Text>Category</Card.Text>
                          <Card.Text>Price: 30 Dinars</Card.Text>
                        </div>
                      </Card.Body>
                      <Card.Footer className="contfooter">
                        <a
                          href=""
                          class="btn btn-outline-success btn-sm bbtnupdate"
                        >
                          Update
                        </a>
                        &nbsp;&nbsp;
                        <a
                          href=""
                          class="btn btn-outline-danger btn-sm bbtndelete"
                        >
                          Delete
                        </a>
                      </Card.Footer>
                    </Card>
                  </div>
                  <div className="col ">
                    <Card className="cardpro" style={{ width: "15rem" }}>
                      <img
                        className="imgscale"
                        variant="top"
                        src="/Images/aymen.jpg"
                      />
                      <Card.Body className="boducolor">
                        <div className="ktibody">
                          <Card.Title>Tool Name</Card.Title>
                          <Card.Text>Category</Card.Text>
                          <Card.Text>Price: 30 Dinars</Card.Text>
                        </div>
                      </Card.Body>
                      <Card.Footer className="contfooter">
                        <a
                          href=""
                          class="btn btn-outline-success btn-sm bbtnupdate"
                        >
                          Update
                        </a>
                        &nbsp;&nbsp;
                        <a
                          href=""
                          class="btn btn-outline-danger btn-sm bbtndelete"
                        >
                          Delete
                        </a>
                      </Card.Footer>
                    </Card>
                  </div>
                  <div className="col ">
                    <Card className="cardpro" style={{ width: "15rem" }}>
                      <img
                        className="imgscale"
                        variant="top"
                        src="/Images/aymen.jpg"
                      />
                      <Card.Body className="boducolor">
                        <div className="ktibody">
                          <Card.Title>Tool Name</Card.Title>
                          <Card.Text>Category</Card.Text>
                          <Card.Text>Price: 30 Dinars</Card.Text>
                        </div>
                      </Card.Body>
                      <Card.Footer className="contfooter">
                        <a
                          href=""
                          class="btn btn-outline-success btn-sm bbtnupdate"
                        >
                          Update
                        </a>
                        &nbsp;&nbsp;
                        <a
                          href=""
                          class="btn btn-outline-danger btn-sm bbtndelete"
                        >
                          Delete
                        </a>
                      </Card.Footer>
                    </Card>
                  </div>
                  <div className="col ">
                    <Card className="cardpro" style={{ width: "15rem" }}>
                      <img
                        className="imgscale"
                        variant="top"
                        src="/Images/aymen.jpg"
                      />
                      <Card.Body className="boducolor">
                        <div className="ktibody">
                          <Card.Title>Tool Name</Card.Title>
                          <Card.Text>Category</Card.Text>
                          <Card.Text>Price: 30 Dinars</Card.Text>
                        </div>
                      </Card.Body>
                      <Card.Footer className="contfooter">
                        <a
                          href=""
                          class="btn btn-outline-success btn-sm bbtnupdate"
                        >
                          Update
                        </a>
                        &nbsp;&nbsp;
                        <a
                          href=""
                          class="btn btn-outline-danger btn-sm bbtndelete"
                        >
                          Delete
                        </a>
                      </Card.Footer>
                    </Card>
                  </div>
                  <div className="col ">
                    <Card className="cardpro" style={{ width: "15rem" }}>
                      <img
                        className="imgscale"
                        variant="top"
                        src="/Images/aymen.jpg"
                      />
                      <Card.Body className="boducolor">
                        <div className="ktibody">
                          <Card.Title>Tool Name</Card.Title>
                          <Card.Text>Category</Card.Text>
                          <Card.Text>Price: 30 Dinars</Card.Text>
                        </div>
                      </Card.Body>
                      <Card.Footer className="contfooter">
                        <a
                          href=""
                          class="btn btn-outline-success btn-sm bbtnupdate"
                        >
                          Update
                        </a>
                        &nbsp;&nbsp;
                        <a
                          href=""
                          class="btn btn-outline-danger btn-sm bbtndelete"
                        >
                          Delete
                        </a>
                      </Card.Footer>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
};

export default Suppliers;
