import React from "react";
import "./Services.scss";


const Services = (props) => {
  return (
    <section class="services-page">
      
         <img src={props.srcPath} alt="" class="services-img" />


         <div className={"services-content"}>
         <div className="header">{props.children}</div>
      <div className="content">
        <span className="notif-title">{props.title}</span>
        <br />
        <span className="notif-msg">{props.content}</span>
      </div>
         </div>



      <div class="fusion-layout-column fusion_builder_column fusion_builder_column_1_1  fusion-one-full fusion-column-first fusion-column-last 1_1">
					<div class="fusion-column-wrapper">
          <div class="nectar-shape-divider-wrap no-color " data-front="" data-style="waves_opacity_alt" data-position="bottom"><svg class="nectar-shape-divider" fill="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 300" preserveAspectRatio="none">  
            <path className="wave-one" d="M 1000 299 l 2 -279 c -155 -36 -310 135 -415 164 c -102.64 28.35 -149 -32 -232 -31 c -80 1 -142 53 -229 80 c -65.54 20.34 -101 15 -126 11.61 v 54.39 z"></path> <path className="wave-two" d="M 1000 286 l 2 -252 c -157 -43 -302 144 -405 178 c -101.11 33.38 -159 -47 -242 -46 c -80 1 -145.09 54.07 -229 87 c -65.21 25.59 -104.07 16.72 -126 10.61 v 22.39 z"></path> <path className="wave-three" d="M 1000 300 l 1 -230.29 c -217 -12.71 -300.47 129.15 -404 156.29 c -103 27 -174 -30 -257 -29 c -80 1 -130.09 37.07 -214 70 c -61.23 24 -108 15.61 -126 10.61 v 22.39 z"></path>
             </svg></div>
					</div>
				</div>
    </section>
  );
};

export default Services;
