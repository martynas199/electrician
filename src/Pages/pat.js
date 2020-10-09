import React from "react";
import Navbar from "../components/navbar/Navbar";
import CommentDetail from "../components/infobar/infobar";
import Services  from "../components/services/Services";
import FooterContainer  from "../components/footer/Footer";
import pat from "../images/pat.jpeg";


import Heading from "../components/heading/Heading";
import Text from "../components/other/Text";

// import Atom from "../components/other/Atom";


function EmergencyPage() {
  return <div className="emergency-page">
      <CommentDetail />
      <Navbar />
      <Services title="" content="" srcPath={ pat }><h1>Appliance Installation & Repair</h1></Services>
      <Heading first="Inspections and Testing" second=""/>
      <Text>
      Ensuring electrical installations and appliances across all premises are fully tested is essential for every landlord, business owner and homeowner. We can assist with regular electrical testing and inspections on those electrical appliances we all use day in, day out.
Give Emergency Electrician Camden a call now on 02078 460294 to see how we can help with electrical testing and inspections.
      </Text>

      {/* <Atom /> */}
      
      <FooterContainer />

  </div>;
}

export default EmergencyPage;
