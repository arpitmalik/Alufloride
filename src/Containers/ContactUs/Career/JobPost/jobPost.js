import Header from "../../../../Components/Header/Header.js";
import Navbar from "../../../../Components/Navbar/Navbar.js";
import CareerBg from "../../../../Assets/images/careerBgImg.png";
import { Button } from "react-bootstrap";
import "./jobPost.css";

const JobPost = () => {
  return (
    <>
      <Header />
      <Navbar url={CareerBg} />
      <div className="jobPostSection">
        <div className="jobPostDetails">
          <div className="jobPostPosition">Position Here</div>
          <div className="jobPostLocation">Location | Nature Of Job</div>
          <div className="jobPostViewAll">
            <a href="instagram.com">View All Jobs</a>
          </div>
        </div>

        <div className="jobPostDetails2">
          <div className="jobPostLeft">
            <div className="JobDescription">
              <div className="jobDescriptionHeading">Job Description</div>
              <div className="jobDescriptionPara">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum
              </div>
            </div>

            <div className="resposibilitiesAndDuties">
              <div className="resposibilitiesAndDutiesHeading">
                Resposibilities And Duties
              </div>
              <div className="resposibilitiesAndDutiesPoints">
                <ul>
                  <li>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknow
                  </li>
                  <li>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknow
                  </li>
                  <li>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknow
                  </li>
                </ul>
              </div>
            </div>

            <div className="requirements">
              <div className="requirementsHeading">Requirements</div>
              <div className="requirementsPoints">
                <ul>
                  <li>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknow
                  </li>
                  <li>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknow
                  </li>
                  <li>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknow
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="jobPostRight">
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
            <div className="phoneNoField">
              <div className="yourPhoneNoHeading">Your Phone Number</div>
              <div className="yourPhoneNoField">
                <input type="tel" name="phoneNo" placeholder="+91-" />
              </div>
            </div>
            <div className="addressField">
              <div className="yourAddressHeading">Your Address</div>
              <div className="yourAddressField">
                <input type="text" name="address" placeholder="Type Here" />
              </div>
            </div>
            <div className="resumeField">
              <div className="yourResumeHeading">Your Resume</div>
              <div className="yourResumeField">
                <input type="file" name="name" placeholder="Type Here" />
              </div>
            </div>
            <div className="coverLetterField">
              <div className="yourCoverLetterHeading">Your Cover Letter</div>
              <div className="yourCoverLetterField">
                <input type="file" name="name" placeholder="Type Here" />
              </div>
            </div>
            <div className="SubmitButtonArea2">
              <div className="SubmitButton">
                <Button variant="success">Submit</Button>
              </div>
              <div className="ThankyouText2">
                Thank you. We'll get back to you shortly.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobPost;
