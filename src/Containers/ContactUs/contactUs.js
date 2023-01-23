import Header from "../../Components/Header/Header.js";
import Navbar from "../../Components/Navbar/Navbar.js";
import ContactUsBg from "../../Assets/images/contactUsBg.png";
import contact from "../../Assets/images/contact.png";
import mail from "../../Assets/images/mail.png";
import "./contactUs.css";
import { Button } from "react-bootstrap";

const ContactUs = () => {
  return (
    <>
      <Header />
      <Navbar url={ContactUsBg} />
      <div className="generalEnquirySection">
        <div className="generalEnquiryHeading">Get in touch with us</div>
        <div className="generalEnquiryContent">
          <div className="generalEnquiryLeft">
            <div className="NameField">
              <div className="yourNameHeading">Your Name</div>
              <div className="yourNameField">
                <input type="text" name="name" placeholder="Type Here" />
              </div>
            </div>
            <div className="EmailField">
              <div className="yourEmailHeading">Your Email</div>
              <div className="yourNameField">
                <input
                  type="email"
                  id="Your Email"
                  required
                  name="email"
                  placeholder="Type Here"
                />
              </div>
            </div>
            <div className="EnquiryField">
              <div className="NatureofEnquiryHeading">Nature Of Enquiry</div>
              <div className="yourNameField">
                <input list="enquiry" name="name" placeholder="--Select--" />
                <datalist id="enquiry">
                  <option value="General Enquiry" />
                  <option value="Sales" />
                  <option value="Investors" />
                  <option value="Others" />
                </datalist>
              </div>
            </div>
            <div className="MessageArea">
              <div className="messageHeading"> Message </div>
              <div className="messageField">
                <textarea name="message" placeholder="Type Here" />
              </div>
            </div>
            <div className="SubmitButtonArea">
              <div className="SubmitButton">
                <Button variant="success">Submit</Button>
              </div>
              <div className="ThankyouText">
                Thank you. We'll get back to you shortly.
              </div>
            </div>
          </div>
          <div className="generalEnquiryRight">
            <div className="CompanyNameSmall">Aluflouride Ltd.</div>
            <div className="CompanyAddressSmall">
              Mulagada,Mindi Vishakhapatam 530 012 Andhra Pradesh <br /> India
            </div>
            <div className="CompanyContactSmall">
              <img className="ContactImage" src={contact} alt="contactlogo" />
              <div className="imageText">9013966841</div>
            </div>
            <div className="CompanyMailSmall">
              <img className="MailImage" src={mail} alt="maillogo" />
              <div className="imageText">contact@alufluoride.com</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
