import React from 'react';
import "./ServicesMain.css";
import Service from "./ServiceMain";
import Data from "./servises.json";

function ServicesMain() {
  return (
      <>
          <h1 className='sevice-main-head'>हमारे यह आपको यह सुविधा दी जाति</h1>
          <h3 className='sevice-main-subhead'>इन सुविधाओ की जानकारी वह सुविधाओ का लाभ उठाने के लिए हमसे संपर्क करे <span>+919406858154</span></h3>
          <div className="main-services-box">
              {Data.services.map(service => <Service key={service.key +1000} data={service} /> ) }
          </div>
      </>
  )
}

export default ServicesMain;