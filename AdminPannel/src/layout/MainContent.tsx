import React from "react";

import DefaultDashboard from "../pages/DefaultDashboard";
import SalesDashboard from "../pages/SalesDashboard";
import FinanceDashboard from "../pages/FinanceDashboard";

import TeamManagement from "../pages/TeamManagement";
import Employees from "../pages/Employees";
import Clients from "../pages/Clients";
import Projects from "../pages/Projects";
import Review from "../pages/Review";
import Deals from "../pages/Deals";


import Pricing from "../pages/Pricing";
import BlogGrid from "../pages/BlogGrid";
import Basic from "../pages/Basic";
import Updates from "../pages/Updates";
import AddCustomer from "../pages/AddCustomer";

import Lead from "../pages/Lead";
import ContactFormLead from "../pages/ContactFormLead";
import PageWiseLead from "../pages/PageWiseLead";
import BlogPost from "../pages/BlogPost";
import BlogView from "../pages/BlogView";
import TestimonialPost from "../pages/TestimonialPost";
import VideoTestimonialPost from "../pages/VideoTestimonialPost";
import ClientPost from "../pages/ClientPost";
import Chat from "../pages/Chat";
import Calendar from "../pages/Calendar";


/* 🔑 TAB → COMPONENT MAP */
const COMPONENT_MAP: Record<string, React.ReactNode> = {
  "Default Dashboard": <DefaultDashboard />,
  "Sales Dashboard": <SalesDashboard />,
  "Finance Dashboard": <FinanceDashboard />,
  "Team Management": <TeamManagement />,
  Employees: <Employees />,
  Clients: <Clients />,
  Projects: <Projects />,
  Review: <Review />,
  Deals: <Deals />,

  Pricing: <Pricing />,
  "Blog Grid": <BlogGrid />,
  Basic: <Basic />,
  Updates: <Updates />,
  Add: <AddCustomer />,

  // 🔥 LEADS
  Lead: <Lead />,
  "Contact Form Lead": <ContactFormLead />,
  "Page Wise Lead": <PageWiseLead />,

  // 🔥 CONTENT
  "Blog Post": <BlogPost />,
  "Blog View": <BlogView />,
  "Testimonial Post": <TestimonialPost />,
  "Video Testimonial Post": <VideoTestimonialPost />,
  "Client Post": <ClientPost />,

  // 🔥 MESSAGES
  Chat: <Chat />,
  Calendar: <Calendar />,
};

type Props = {
  activeTab: string;
};

const MainContent: React.FC<Props> = ({ activeTab }) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      {COMPONENT_MAP[activeTab] ?? (
        <div className="text-gray-500">
          No page found for "{activeTab}"
        </div>
      )}
    </div>
  );
};

export default MainContent;
