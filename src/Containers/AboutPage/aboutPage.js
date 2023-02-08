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
    if (window.location.hash)
      setTab(window.location.hash.slice(1).toLowerCase());
  }, []);

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

      <div className="gridContainer">
        <button
          type="button"
          id="milestones"
          className={`btn ${tab === "milestones" && "btn-active"}`}
          onClick={() => setTab("milestones")}
        >
          Milestones
        </button>
        <button
          type="button"
          id="team"
          className={`btn ${tab === "team" && "btn-active"}`}
          onClick={() => setTab("team")}
        >
          Team
        </button>
        <button
          type="button"
          id="customers"
          className={`btn ${tab === "customers" && "btn-active"}`}
          onClick={() => setTab("customers")}
        >
          Customers
        </button>
        <button
          type="button"
          id="quality"
          className={`btn ${tab === "quality" && "btn-active"}`}
          onClick={() => setTab("quality")}
        >
          Quality
        </button>
        <button
          type="button"
          id="environment"
          className={`btn ${tab === "environment" && "btn-active"}`}
          onClick={() => setTab("environment")}
        >
          Environment
        </button>
        <button
          type="button"
          id="CSR"
          className={`btn ${tab === "csr" && "btn-active"}`}
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
