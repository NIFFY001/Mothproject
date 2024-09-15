import React from "react";
import { Link } from "react-router-dom";
import LeftSideTab from "../components/LeftSideTab";
import home from "/src/assets/home.png";
import card from "/src/assets/card.png";
import history from "/src/assets/history.png";
import profile from "/src/assets/profile.png";
import logout from "/src/assets/logout.png";
import homebg from "/src/assets/homebg.png";
import BalanceDisplay from "../components/BalanceDisplay";
import send from "/src/assets/send.png";
import request from "/src/assets/request.png";
import withdraw from "/src/assets/withdraw.png";
import swap from "/src/assets/swap.png";
import Button from "../components/Button";

export default function Dashboard() {
  return (
    <>
      <LeftSideTab tabs={tabs} />
    </>
  );
}

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
};

const handleClick = () => {
  setIsActive(!isActive);
};

const tabs = [
  {
    name: (
      <Link to="" className="flex items-center gap-2">
        <img src={home} alt="Home Logo" className="w-6 h-6" />
        <span className="text-xl font-semibold">Home</span>
      </Link>
    ),
    content: (
      <div className="flex flex-col md:gap-5 gap-5 md:p-2 mt-5">
        <h1 className="text-[25px] font-semibold">Welcome back, Matt 👋</h1>

        <div className="relative md:pt-3 ">
          <img
            src={homebg}
            className="md:h-[300px] h-[200px] md:w-screen "
            alt="Background"
          />
          <div className="absolute inset-0 pt-5">
            <BalanceDisplay />
          </div>
        </div>

        <div className="">
          <h1 className="mb-5">Quick Actions</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-between gap-5 md:gap-10   ">
            <Button
              imageSrc={send}
              link=""
              text="Send"
              subtext="Transfer From your wallet to another bank account"
              bgclass="bg-custom-light-blue"
            />

            <Button
              imageSrc={request}
              link=""
              text="Receive"
              subtext="Transfer From your wallet to another bank account"
              bgclass="bg-custom-cream"
            />
            <Button
              imageSrc={swap}
              link=""
              text="Swap"
              subtext="Transfer From your wallet to another bank account"
              bgclass="bg-custom-lavender"
            />
            <Button
              imageSrc={withdraw}
              link=""
              text="Withdraw"
              subtext="Transfer From your wallet to another bank account"
              bgclass="bg-custom-white"
            />
          </div>
        </div>
      </div>
    ),
  },
  {
    name: (
      <div className="flex items-center gap-2">
        <img src={card} alt="Card Logo" className="w-6 h-6" />
        <span className="text-xl font-semibold">Cards</span>
      </div>
    ),
    content: (
      <div className="flex flex-col gap-5">
        <h1 className="md:text-[25px] font-semibold">Who Can Make A Report</h1>
        <p>
          Any individual with a valid reason can make a whistleblowing report.
          This includes employees, contractors, suppliers, clients, or any
          stakeholder who has witnessed or become aware of misconduct within an
          organization. However, it is essential that all reports are grounded
          in factual evidence. The allegations must be truthful and verifiable,
          ensuring that claims are not made based on assumptions or hearsay. For
          SAMTL Group, whistleblowing is open to anyone who has direct knowledge
          of unethical or illegal activities, and the integrity of the process
          depends on the accuracy and honesty of the information provided.
        </p>
      </div>
    ),
  },
  {
    name: (
      <div className="flex items-center gap-2">
        <img src={history} alt="History Logo" className="w-6 h-6" />
        <span className="text-xl font-semibold">History</span>
      </div>
    ),
    content: (
      <div className="flex flex-col gap-5">
        <h1 className="md:text-[25px] font-semibold">Reportable Activities</h1>
        <ul className="list-disc leading-10">
          <li>Fraud Or Financial Mismanagement</li>
          <li>Insider Trading Or Market Manipulation</li>
          <li>Bribery And Corruption</li>
          <li>Money Laundering Or Tax Evasion</li>
          <li>Violations Of Company Policies Or Regulatory Requirements</li>
          <li>Theft Or Embezzlement Of Company Funds</li>
          <li>Unethical Business Practices</li>
          <li>Harassment Or Discrimination In The Workplace</li>
          <li>Breach Of Data Privacy Or Cybersecurity Policies</li>
          <li>Health And Safety Violations</li>
        </ul>
        <p>
          These activities, if reported, help safeguard the integrity of the
          organization and protect stakeholders.
        </p>
      </div>
    ),
  },
  {
    name: (
      <div className="flex items-center gap-2 ">
        <img src={profile} alt="Home Logo" className="w-6 h-6" />
        <span className="text-xl font-semibold">Profile</span>
      </div>
    ),
    content: (
      <div className="flex flex-col gap-5">
        <h1 className="md:text-[25px] font-semibold">
          Obligations Of The Whistle Blower
        </h1>
        <ul className="list-disc leading-10">
          <li>
            <strong>Report In Good Faith:</strong> The whistleblower must
            provide information honestly and with genuine concern, ensuring that
            the report is based on facts, not personal grievances or unfounded
            accusations.
          </li>
          <li>
            <strong>Provide Verifiable Evidence:</strong> The whistleblower
            should submit evidence or details that can be verified, ensuring
            that the allegations are supported by concrete information.
          </li>
          <li>
            <strong>Maintain Confidentiality:</strong> To protect the integrity
            of the investigation and avoid undue harm, the whistleblower must
            keep the details of the report confidential.
          </li>
          <li>
            <strong>Follow Reporting Channels:</strong> The whistleblower should
            use the appropriate and designated reporting channel.
          </li>
          <li>
            <strong>Cooperate With Investigations:</strong> The whistleblower
            has a duty to cooperate with any follow-up investigations, providing
            additional information or clarification if needed.
          </li>
          <li>
            <strong>Avoid Retaliatory Actions:</strong> The whistleblower should
            not use their report as a tool for retaliation against colleagues or
            management but as a genuine effort to address misconduct.
          </li>
        </ul>
      </div>
    ),
  },

  {
    name: (
      <div className="flex items-center gap-2">
        <img src={logout} alt="logout Logo" className="w-6 h-6" />
        <span className="text-xl font-semibold">Logout</span>
      </div>
    ),
    content: (
      <div className="flex flex-col gap-5">
        <h1 className="md:text-[25px] font-semibold">Reportable Activities</h1>
        <ul className="list-disc leading-10">
          <li>Fraud Or Financial Mismanagement</li>
          <li>Insider Trading Or Market Manipulation</li>
          <li>Bribery And Corruption</li>
          <li>Money Laundering Or Tax Evasion</li>
          <li>Violations Of Company Policies Or Regulatory Requirements</li>
          <li>Theft Or Embezzlement Of Company Funds</li>
          <li>Unethical Business Practices</li>
          <li>Harassment Or Discrimination In The Workplace</li>
          <li>Breach Of Data Privacy Or Cybersecurity Policies</li>
          <li>Health And Safety Violations</li>
        </ul>
        <p>
          These activities, if reported, help safeguard the integrity of the
          organization and protect stakeholders.
        </p>
      </div>
    ),
  },
];
