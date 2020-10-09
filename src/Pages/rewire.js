import React from "react";
import Navbar from "../components/navbar/Navbar";
import CommentDetail from "../components/infobar/infobar";
import Services  from "../components/services/Services";
import FooterContainer  from "../components/footer/Footer";
import rewire from "../images/wire.jpg";


import Heading from "../components/heading/Heading";
import Text from "../components/other/Text";

// import Atom from "../components/other/Atom";


function EmergencyPage() {
  return <div className="emergency-page">
      <CommentDetail />
      <Navbar />
      <Services title="" content="" srcPath={ rewire }><h1>Electrical Rewiring Services</h1></Services>
      <Heading first="Rewiring" second=""/>
      <Text>
      At Emergency Electrician Camden we can help you with the full or partial electrical rewiring of your home or business. To meet modern safety standards, electrical rewiring is essential if your property is over 25 years old and has never been rewired.

Rewiring is essential for a number of reasons, one being that old wiring is hard pushed to handle the demands of modern technology. More importantly, old wires are typically worn and prone to faults which could lead to a serious fire hazard. Hence why it’s so important to carry out rewiring on old systems.
      </Text>

      {/* <Atom /> */}
      
      <FooterContainer />

  </div>;
}

export default EmergencyPage;
