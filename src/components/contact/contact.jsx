import React from 'react';
import "./contact.css"

function contact() {
  return (
    <div className='contact-us'>
      <h1>मुझसे संपर्क करें..</h1>
      <div className="contact">

        <div className="connect">
          <h2><i class="fa-solid fa-location-crosshairs"></i> Address</h2>
         <p>जिला : नीमच (M.P.)</p>
         <p>तहसील: जवाद</p>
         <p>नई बावल (जवाद रोड पर)</p>
         <p>SBI कीओस्क Bank(कीओस्क)</p>
        </div>

        <div className="connect co-1">
        <h2><i class="fa-solid fa-phone"></i> Call Me</h2>
          <p>contact number : +919406858154</p>
          <p>Message number : +919406858154</p>
          <p>Mail id : bawalnai.neemuch@gmail.com</p>
        </div>
      </div>
    </div>
  )
}

export default contact;