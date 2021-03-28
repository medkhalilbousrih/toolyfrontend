import "./client.css";
const Client = () => {
  return (
    <>
      <div className="container col-md-12">
        <div className="row">
          <div
            className="m-0 p-1  nav flex-column nav-pills col-2 border1"
            id="v-pills-tab "
            role="tablist "
            aria-orientation="vertical "
          >
            <br />
            <br />
            <br />
            <a
              className=" tt nav-link pp pmn"
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
              className="tt nav-link pp pmn"
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
          </div>
          <div className="col-10">
            <div className=" cc">
              <p className="NameTitle">MOHAMED AYMEN KHLIL</p>
              <div className="pdata">
                <div>Gender</div>
                <div>Birthday</div>
                <div>Phone Number</div>
              </div>
              <div className="cdata">
                <div>Male</div>
                <div>July,03 1996</div>
                <div>+216 22732763</div>
              </div>
              <div className="pdata1">
                <div>Adress</div>
                <div>City</div>
                <div>Registred Date</div>
              </div>
              <div className="cdata1">
                <div>15 Street Maycen</div>
                <div>Tunis, kram ouest</div>
                <div>March 15 2021</div>
              </div>
            </div>
            <div className="mp">
              <div className="numbers">
                0&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0
              </div>
              <div className="rentrent">
                Renting&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;Rented
              </div>
            </div>
            <div className="doura">
              <img className="ii" src="/Images/aymen.jpg" />
            </div>
            <div className="box2 col-12 ">
              <div className="History">HISTORY</div>
              <div className="hselect">
                <div className="Activated">Renting Now</div>
                <div className="Activated1">Rented Items</div>
                <div className="Activated2">Bought Items</div>
                <div className="Activated3">Marqued Items</div>
              </div>
              <div className="box3">
                <div className="wbord"></div>
                <div className="renico">
                  <div className="renting">Renting Now</div>
                  <div className="icons">
                    <i className="fas fa-sort-amount-down icon"></i>
                    &nbsp;
                    <i className="fas fa-sort-amount-up-alt icon"></i>
                    &nbsp;
                    <i className="fas fa-sort-alpha-up icon"></i>
                    &nbsp;
                    <i className="fas fa-sort-alpha-down-alt icon"></i>
                  </div>
                </div>
              </div>
              <div className="box4"></div>
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
export default Client;
