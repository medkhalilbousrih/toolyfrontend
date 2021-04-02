const stats = () => {
  return (
    <>
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
              <span className="azert nb1">Tools Being Rented Right Now</span>
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
    </>
  );
};

export default stats;
