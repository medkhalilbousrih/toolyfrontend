import "./client.css";
const Client = () => {
  return (
    <>
      <div className="container col-md-12">
        <div className="row">
          <div
            className="m-0 p-1  nav flex-column nav-pills col-2 "
            id="v-pills-tab "
            role="tablist "
            aria-orientation="vertical "
          >
            <a
              className=" tt nav-link pp"
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
              className="tt nav-link pp"
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
          <div className=" cc">
            <a></a>
            <div className="mp"></div>
            <div className="doura">
              <img className="ii" src="/Images/aymen.jpg" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Client;
