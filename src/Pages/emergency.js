import React from "react";
import Navbar from "../components/navbar/Navbar";
import CommentDetail from "../components/infobar/infobar";
import Services  from "../components/services/Services";
import FooterContainer  from "../components/footer/Footer";
import emergencyElectrician from "../images/emergency-electrician.jpg";

import Heading from "../components/heading/Heading";
import Text from "../components/other/Text";

// import Atom from "../components/other/Atom";


function EmergencyPage() {
  return <div className="emergency-page">
      <CommentDetail />
      <Navbar />
      <Services title="" content="" srcPath={ emergencyElectrician }><h1>Emergency Electrical Services</h1></Services>
      <Heading first="Emergency" second="Services"/>
      <Text>    <br />
    <p>At Sparky Ltd we provide a 24 hour emergency electrician service in Peterborough.</p>
    <br />
<p>
We specialise in all aspects of emergency electrical work such as emergency lighting installation, emergency electrical repair work and maintenance for domestic and commercial customers.
</p>
<br />
<p>
We offer a fast and rapid response time and operate 365 days a year. Estimates are totally free of charge with no obligation</p>
<br /></Text>

      {/* <Atom /> */}
      
      <FooterContainer />

  </div>;
}

export default EmergencyPage;
