import React from "react";
import Navbar from "../components/navbar/Navbar";
import CommentDetail from "../components/infobar/infobar";
import Services  from "../components/services/Services";
import FooterContainer  from "../components/footer/footer";
import ReWiring from "../images/inspection.jpg";


function EmergencyPage() {
  return <div className="emergency-page">
      <CommentDetail />
      <Navbar />
      <Services title="OUR LOCATION" content="Peterborough, England" srcPath={ ReWiring }><h1>Emergency</h1></Services>
      <FooterContainer />

  </div>;
}

export default EmergencyPage;
