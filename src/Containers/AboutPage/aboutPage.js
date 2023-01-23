import Header from "../../Components/Header/Header.js";
import Navbar from "../../Components/Navbar/Navbar.js";
import AboutBg from "../../Assets/images/aboutPageBg.png";
import "./aboutPage.css";
import Milestones from "../../Components/About/Milestone/milestone.js";
import Team from "../../Components/About/Team/team.js";
import Customers from "../../Components/About/Customers/customers.js";
import Quality from "../../Components/About/Quality/quality.js";
import Environment from "../../Components/About/Environment/environment.js";
import Csr from "../../Components/About/CSR/csr.js";
import { useState } from "react";
import { useEffect } from "react";

const AboutPage = () => {
  const [tab, setTab] = useState("milestones");

  useEffect(() => {
    setTab(window.location.hash.slice(1).toLowerCase());
  }, [window.location.hash]);

  console.log(tab);
  return (
    <>
      <Header />
      <Navbar url={AboutBg} />
      <div className="aboutPageIntrobox">
        <div className="introBoxHello"> About Aluflouride </div>
        <div className="intro-box-para">
          Alufluoride Limited started the project in 1993 for producing
          Aluminium Fluoride and related products. The project was completed in
          record time at a cost of Rs.200 million. Trial runs commenced in Nov,
          1994 and a quality product was produced during December, 1994.
          Supplies started immediately thereafter to primary Aluminium smelters.
          The Company increased the production year after year maintaining high
          quality standards.
        </div>
      </div>

      <div class="gridContainer">
        <button
          type="button"
          id="milestones"
          class="btn"
          onClick={() => setTab("milestones")}
        >
          Milestones
        </button>
        <button
          type="button"
          id="team"
          class="btn"
          onClick={() => setTab("team")}
        >
          Team
        </button>
        <button
          type="button"
          id="customers"
          class="btn"
          onClick={() => setTab("customers")}
        >
          Customers
        </button>
        <button
          type="button"
          id="quality"
          class="btn"
          onClick={() => setTab("quality")}
        >
          Quality
        </button>
        <button
          type="button"
          id="environment"
          class="btn"
          onClick={() => setTab("environment")}
        >
          Environment
        </button>
        <button
          type="button"
          id="CSR"
          class="btn"
          onClick={() => setTab("csr")}
        >
          CSR
        </button>
      </div>

      {tab === "milestones" && <Milestones />}
      {tab === "team" && <Team />}
      {tab === "customers" && <Customers />}
      {tab === "quality" && <Quality />}
      {tab === "environment" && <Environment />}
      {tab === "csr" && <Csr />}
    </>
  );
};

export default AboutPage;
