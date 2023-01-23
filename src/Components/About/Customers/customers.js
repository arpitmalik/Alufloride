import AdityaBirla from "../../../Assets/images/adityaBirlaLogo.png";
import NalcoLogo from "../../../Assets/images/nalcoLogo.png";
import VedantaLogo from "../../../Assets/images/vedantaLogo.png";
import BalcoLogo from "../../../Assets/images/balcoLogo.png";

const Customers = ({ className }) => {
  return (
    <div className={className}>
      <div className="domesticCustomers">
        <div className="domesticHeading">Domestic Customers</div>
        <div className="domesticImages">
          <img src={AdityaBirla}></img>
          <img src={NalcoLogo}></img>
          <img src={VedantaLogo}></img>
          <img src={BalcoLogo}></img>
        </div>
      </div>

      <div className="exportCustomers">
        <div className="exportHeading">Export Customers</div>
        <div className="exportImages">
          <img src={AdityaBirla}></img>
          <img src={BalcoLogo}></img>
          <img src={NalcoLogo}></img>
        </div>
      </div>
    </div>
  );
};

export default Customers;
