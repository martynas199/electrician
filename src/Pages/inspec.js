import React from "react";
import Navbar from "../components/navbar/Navbar";
import CommentDetail from "../components/infobar/infobar";
import Services  from "../components/services/Services";
import FooterContainer  from "../components/footer/Footer";
import inspec from "../images/inspection.jpg";

import Heading from "../components/heading/Heading";
import Text from "../components/other/Text";

// import Atom from "../components/other/Atom";


function EmergencyPage() {
  return <div className="emergency-page">
      <CommentDetail />
      <Navbar />
      <Services title="" content="" srcPath={ inspec }><h1>Electrical Inspections and Testing</h1></Services>
      <Heading first="Inspections & Testing" second=""/>
      <Text>At Emergency Electrician Camden, we can install new electrical appliances and offer an appliance repair service too. If you live in the west, north west, north and central London area and need an appliance installing or repairing, don’t hesitate to get in touch with us. With competitive rates and experienced electricians who provide the highest standards, why would you look elsewhere?</Text>

      {/* <Atom /> */}
      
      <FooterContainer />

  </div>;
}

export default EmergencyPage;
