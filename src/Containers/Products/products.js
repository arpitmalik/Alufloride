import Header from "../../Components/Header/Header.js";
import Navbar from "../../Components/Navbar/Navbar.js";
import ProductsBg from "../../Assets/images/productsBg.png";
import AluminiumFluorideImage from "../../Assets/images/aluminiumFluorideImg.png";
import Button from "react-bootstrap/Button";
import Collapsible from "react-collapsible";
import "./products.css";

const products = () => {
  return (
    <>
      <Header />
      <Navbar url={ProductsBg} />

      <div>
        <div className="specificationsHeading">Specifications</div>

        <div className="specificationsSection">
          <div className="specificationsTables">
            <div className="aluminumflourideTable">
              <table>
                <tr>
                  <th colSpan={2} className="tableHeading">
                    Aluminum Flouride
                  </th>
                </tr>
                <tr>
                  <td>Description</td>
                  <td>White Crystalline powder non-hazardous</td>
                </tr>
                <tr>
                  <td>Chemical Formula</td>
                  <td>AIF3</td>
                </tr>
              </table>
            </div>
            <div className="exploreNowButton">
              <Button variant="success">ENQUIRE NOW</Button>{" "}
            </div>

            <div className="collapsableMenu">
              <Collapsible trigger="Physical Properties">
                <p>
                  This is the collapsible content. It can be any element or
                  React component you like. It can even be another Collapsible
                  component. Check out the next section!
                </p>
              </Collapsible>

              <Collapsible trigger="Chemical Properties">
                <p>
                  This is the collapsible content. It can be any element or
                  React component you like. It can even be another Collapsible
                  component. Check out the next section!
                </p>
              </Collapsible>
            </div>
            <div className="productDatasheetButton">
              <Button variant="success">PRODUCT DATA SHEET</Button>
            </div>
          </div>

          <div>
            <img
              className="specificationsImg"
              src={AluminiumFluorideImage}
            ></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default products;
