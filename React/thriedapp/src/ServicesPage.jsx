import React from "react";
import Services from "./Services.jsx";
import WebIcon from "@mui/icons-material/Language";
import ReactIcon from "@mui/icons-material/IntegrationInstructions";
import DesignIcon from "@mui/icons-material/Brush";

function ServicesPage() {
  const servicesData = [
    {
      title: "Web Development",
      description: "Building responsive websites",
      icon: <WebIcon fontSize="large" color="primary" />
    },
    {
      title: "React Development",
      description: "Modern React applications",
      icon: <ReactIcon fontSize="large" color="success" />
    },
    {
      title: "UI / UX Design",
      description: "Clean and user-friendly designs",
      icon: <DesignIcon fontSize="large" color="secondary" />
    }
  ];

  return <Services services={servicesData} />;
}

export default ServicesPage;
