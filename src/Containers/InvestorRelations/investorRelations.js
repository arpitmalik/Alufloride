import Header from "../../Components/Header/Header.js";
import Navbar from "../../Components/Navbar/Navbar.js";
import "./investorRelations.css";
import investorRelationsBg from "../../Assets/images/investorRelationsBg.png";
import QuartelyReports from "../../Components/InvestorRelations/quarterlyReports/quarterlyReports.js";
import CorporateGovernance from "../../Components/InvestorRelations/corporateGovernance/corporateGovernance.js";
import BoardMeeting from "../../Components/InvestorRelations/boardMeeting/boardMeeting.js";
import ShareHolding from "../../Components/InvestorRelations/shareHolding/shareHolding.js";
import AnnualReports from "../../Components/InvestorRelations/annualReports/annualReports.js";
import Others from "../../Components/InvestorRelations/others/other.js";
import { useState } from "react";

const InvestorRelations = () => {
  const [tab, setTab] = useState("");

  return (
    <>
      <Header />
      <Navbar url={investorRelationsBg} />
      <div className="investorRelationsArea">
        <div class="gridContainer2">
          <button
            type="button"
            id="quarterlyReports"
            class="btn"
            onClick={() => setTab("quarterlyReports")}
          >
            Quarterly Reports
          </button>
          <button
            type="button"
            id="annualReports"
            class="btn"
            onClick={() => setTab("annualReports")}
          >
            Annual Reports
          </button>
          <button
            type="button"
            id="corporateGovernance"
            class="btn"
            onClick={() => setTab("corporateGovernance")}
          >
            Corporate Governance
          </button>
          <button
            type="button"
            id="boardMeeting"
            class="btn"
            onClick={() => setTab("boardMeeting")}
          >
            Board Meeting Intimation
          </button>
          <button
            type="button"
            id="shareHoldingPattern"
            class="btn"
            onClick={() => setTab("shareHoldingPattern")}
          >
            Shareholding Pattern
          </button>
          <button
            type="button"
            id="others"
            class="btn"
            onClick={() => setTab("others")}
          >
            Others
          </button>
        </div>

        {tab === "quarterlyReports" && <QuartelyReports />}
        {tab === "corporateGovernance" && <CorporateGovernance />}
        {tab === "boardMeeting" && <BoardMeeting />}
        {tab === "shareHoldingPattern" && <ShareHolding />}
        {tab === "annualReports" && <AnnualReports />}
        {tab === "others" && <Others />}
      </div>
    </>
  );
};

export default InvestorRelations;
