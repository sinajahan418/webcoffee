import React from 'react';
 // import Font Awesome CSS
 import "@fortawesome/fontawesome-svg-core/styles.css";
 import { config } from "@fortawesome/fontawesome-svg-core";
 import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//  import { faCoffee } from "@fortawesome/free-solid-svg-icons";
 import *as Icons from "@fortawesome/free-solid-svg-icons";
 config.autoAddCss = false;


const ServiceItem = ({title, par, icon , img}) => {
  return (
    <div class="col-lg-6 mb-5">
      <div class="row align-items-center">
        <div class="col-sm-5">
            <img class="img-fluid mb-3 mb-sm-0" src={img} alt=""/>
        </div>
        <div class="col-sm-7">
            <h4>
              {/* <i class="fa fa-coffee service-icon"></i> */}
              <div style={{borderRadius: "100%"  , width: "40px" , height: "35px" , backgroundColor: "#da9f5b" , textAlign: "center" }}>
              <FontAwesomeIcon style={{ fontSize: "1rem" , margin: "0 auto"}} icon={Icons[icon]}/>
              </div>

            {title}</h4>
            <p class="m-0">{par} </p>
        </div>
      </div>
    </div>
  );
}

export default ServiceItem;
