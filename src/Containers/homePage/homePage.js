import Header from "../../Components/Header/Header.js";
import Navbar from "../../Components/Navbar/Navbar.js";
import backgroundImg from "../../Assets/images/homeHeroImage.png";
import "./homePage.css";
import Customers from "../../Components/About/Customers/customers.js";

const HomePage = () => {
  return (
    <>
      <Header />
      <Navbar url={backgroundImg} />
      <div className="home-page-intro-box">
        <div className="introBoxHello"> Hello </div>
        <div className="intro-box-para">
          Alufluoride Limited started the project in 1993 for producing
          Aluminium Fluoride and related products. The project was completed in
          record time at a cost of Rs.200 million. Trial runs commenced in Nov,
          1994 and a quality product was produced during December, 1994.
          Supplies started immediately thereafter to primary Aluminium smelters.
          The Company increased the production year after year maintaining high
          quality standards.
        </div>
        <button class="know-more-btn">Know More</button>
      </div>

      <Customers className="customerBox" />

      <div className="newsBox" id="news">
        <div className="newsHeading">Latest News</div>
        <div className="new-lines grayNews">
          <i class="fa fa-angle-double-right"></i>
          <span>
            Founder Director Venkat Akkinei is appointed as the new Managing
            Director.
          </span>
        </div>
        <div className="new-lines whiteNews">
          <i class="fa fa-angle-double-right"></i>
          <span>
            Founder Director Venkat Akkinei is appointed as the new Managing
            Director.
          </span>
        </div>
        <div className="new-lines grayNews">
          <i class="fa fa-angle-double-right"></i>
          <span>
            Founder Director Venkat Akkinei is appointed as the new Managing
            Director.
          </span>
        </div>
        <div className="new-lines whiteNews">
          <i class="fa fa-angle-double-right"></i>
          <span>
            Founder Director Venkat Akkinei is appointed as the new Managing
            Director.
          </span>
        </div>
        <div className="new-lines grayNews">
          <i class="fa fa-angle-double-right"></i>
          <span>
            Founder Director Venkat Akkinei is appointed as the new Managing
            Director.
          </span>
        </div>
      </div>
    </>
  );
};

export default HomePage;
