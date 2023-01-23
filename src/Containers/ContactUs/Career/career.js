import Header from "../../../Components/Header/Header.js";
import Navbar from "../../../Components/Navbar/Navbar.js";
import CareerBg from "../../../Assets/images/careerBgImg.png";
import "./career.css";

const Career = () => {
  return (
    <>
      <Header />
      <Navbar url={CareerBg} />
      <div className="careerSection">
        <div className="careerHeading">Work With Us</div>
        <div className="careerSubHeading">CURRENT JOB OPENINGS</div>
        <div className="careerBoxes">
          <div className="careerSectionLeft">
            <div className="positionBox">
              <div className="positionInfo">
                <div className="positionName">POSITION</div>
                <div className="positionDetails">Location | Nature Of Job</div>
                <div className="postedOnDetails">Posted On MM DD,YY</div>
              </div>
            </div>
            <div className="positionBox">
              <div className="positionInfo">
                <div className="positionName">POSITION</div>
                <div className="positionDetails">Location | Nature Of Job</div>
                <div className="postedOnDetails">Posted On MM DD,YY</div>
              </div>
            </div>
          </div>
          <div className="careerSectionRight">
            <div className="positionBox">
              <div className="positionInfo">
                <div className="positionName">POSITION</div>
                <div className="positionDetails">Location | Nature Of Job</div>
                <div className="postedOnDetails">Posted On MM DD,YY</div>
              </div>
            </div>
            <div className="positionBox">
              <div className="positionInfo">
                <div className="positionName">POSITION</div>
                <div className="positionDetails">Location | Nature Of Job</div>
                <div className="postedOnDetails">Posted On MM DD,YY</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Career;
