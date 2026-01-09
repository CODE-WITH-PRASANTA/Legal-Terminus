import React from "react";
import {
  ShieldCheck,
  Building2,
  Settings,
  FileCheck,
  Percent,
  RefreshCcw,
  ArrowLeftRight,
  BadgeCheck,
  Landmark,
  Globe
} from "lucide-react";
import "./PublicltdBenifits.css";

const LLPHubInfographic = () => {
  const leftItems = [
    {
      color: "green",
      icon: <ShieldCheck />,
      title: "Limited Liability",
      desc: "LLP registration provides partners with limited liability of the partners, protecting personal assets from business debts and liabilities."
    },
    {
      color: "blue",
      icon: <Settings />,
      title: "Flexible Management Structure",
      desc: "LLPs allow the terms of management and operations to be structured according to the LLP agreement, giving partners freedom to determine roles and decision-making."
    },
    {
      color: "purple",
      icon: <Percent />,
      title: "Tax Efficiency",
      desc: "LLPs are taxed as partnerships, and profits are shared with partners at their respective tax slabs, preventing double taxation."
    },
    {
      color: "orange",
      icon: <ArrowLeftRight />,
      title: "Easy Transferability of Ownership",
      desc: "Ownership changes are easy as per the LLP agreement, allowing investment transfer without affecting operations."
    },
    {
      color: "teal",
      icon: <Landmark />,
      title: "Access to Funding",
      desc: "LLPs enjoy enhanced access to bank loans, venture capital, and government schemes for business growth."
    }
  ];

  const rightItems = [
    {
      color: "indigo",
      icon: <Building2 />,
      title: "Separate Legal Entity",
      desc: "LLP has a separate legal entity, which enables it to enter contracts, own assets, and sue or be sued in its own name independently of its partners."
    },
    {
      color: "pink",
      icon: <FileCheck />,
      title: "Minimum Compliance Burden",
      desc: "LLPs have less compliance compared to companies, minimising administrative costs and burdens. They are exempt from AGMs and have fewer audit requirements."
    },
    {
      color: "yellow",
      icon: <RefreshCcw />,
      title: "Perpetual Succession",
      desc: "LLPs remain in existence even if partners change due to retirement, resignation, or death."
    },
    {
      color: "emerald",
      icon: <BadgeCheck />,
      title: "Credibility and Trust",
      desc: "LLP registration increases trust with clients, suppliers, and investors due to its legal status and liability protection."
    },
    {
      color: "cyan",
      icon: <Globe />,
      title: "Global Recognition",
      desc: "LLPs are globally recognised, helping businesses expand internationally under bilateral and multilateral agreements."
    }
  ];

  return (
    <section className="llp-hub-wrapper">
      <div className="llp-hub-header">
        <h2>What are the Benefits of Registering my LLP</h2>
        <p>
          Advantages of LLP registration are limited liability protection,
          flexibility in management, tax benefits, and the ease of meeting
          regulatory requirements. Some of the advantages are:
        </p>
      </div>

      <div className="llp-hub-layout">
        {/* LEFT COLUMN */}
        <div className="llp-hub-column left">
          {leftItems.map((item, index) => (
            <div className={`llp-hub-card ${item.color}`} key={index}>
              <span className="llp-hub-line"></span>
              <div className="llp-hub-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>

        {/* CENTER HUB */}
        <div className="llp-hub-center">
          <div className="llp-hub-circle">
            <span>LLP</span>
            <small>Benefits</small>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="llp-hub-column right">
          {rightItems.map((item, index) => (
            <div className={`llp-hub-card ${item.color}`} key={index}>
              <span className="llp-hub-line"></span>
              <div className="llp-hub-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LLPHubInfographic;
