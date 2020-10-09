import React from "react";
import Navbar from "../components/navbar/Navbar";
import CommentDetail from "../components/infobar/infobar";
import Services  from "../components/services/Services";
import FooterContainer  from "../components/footer/Footer";
import lighting from "../images/light.jpg";


import Heading from "../components/heading/Heading";
import Text from "../components/other/Text";

// import Atom from "../components/other/Atom";


function EmergencyPage() {
  return <div className="emergency-page">
      <CommentDetail />
      <Navbar />
      <Services title="" content="" srcPath={ lighting }><h1>Light Fitting & Repairing Services</h1></Services>
      <Heading first="Light Fitting & Repairing" second=""/>
      <Text>
      If you’re in need of any light fitting or repairing, be that in your home, business or outdoors, speak to Emergency Electrician Camden. Our light fitting service covers west, north west, north and central London area and no job is too big or too small for us. If you’re in need of our light fitting services give us a call on 02078 460294. We’ll be more than happy to help. Our electricians have years of experience between them as well as all being NICEIC approved.
      </Text>

      {/* <Atom /> */}
      
      <FooterContainer />

  </div>;
}

export default EmergencyPage;
