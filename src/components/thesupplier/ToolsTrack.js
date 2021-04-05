import "./ToolsTrack.css";
import Cardrentals from "./Cardsrentals";

const ToolsTrack = () => {
  return (
    <>
      <div className="col">
        <div className="contenairekbirrrrr ">
          <div className="GrandTitre">
            <i class="fas fa-box">&nbsp;&nbsp;</i>
            <h2 className="ToolsTrack">Tools Track</h2>
          </div>
          <div
            style={{
              borderBottom: "1px solid rgb(235, 235, 235)",

              marginTop: "0.5rem",
            }}
          ></div>
          <div className="Ligne2track">
            <div className="Ligne2track-part1">
              <h2 className="numbertracks">0</h2>
              <p className="Tools-Being-rented-Right-Now">
                &nbsp;&nbsp;Rented Tools Now
              </p>
              <div
                style={{
                  marginTop: "0.5rem",
                  borderRight: "1px solid  #e8e8e8",
                  width: "0.5rem",
                  height: "3rem",
                }}
              ></div>
            </div>

            <div className="Ligne2track-part2">
              <div className="boxfiltragetracktools">
                <div>Filter</div>
                <i class="fas fa-filter"></i>
              </div>
              &nbsp;&nbsp;
              <div className="boxfiltragetracktools">
                <div>Sort By:</div>
                <select
                  class="form-select form-select-sm"
                  aria-label=".form-select-sm example"
                >
                  <option value="1">ALL</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </div>
          </div>
          <div
            style={{
              borderBottom: "1px solid rgb(235, 235, 235)",

              marginTop: "0.5rem",
            }}
          ></div>
          <div className="Rentalsidenetity">
            <p>Rental</p>
            <p>Tool</p>
            <p>Phone Number</p>
            <p>Adress</p>
            <p>Period</p>
            <p>From</p>
            <p>To</p>
            <p>Availability</p>
            <p>Price</p>
          </div>
          <div>
            <Cardrentals />
          </div>
          <br />
          <br />
          <br />
        </div>
      </div>
    </>
  );
};

export default ToolsTrack;
