import React from "react";

export default function History() {
  return (
    <div className="flex flex-col gap-5 p-5">
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
  );
}
