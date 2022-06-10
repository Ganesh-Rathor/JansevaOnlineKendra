import React from 'react'
import "./Home.css";
import SlidBar from "./SlideBar";
import Services from "./Services";
import MainService from "./MainService";

function Home(props) {
  return (
    <>
    <div className='home'>
      <h2 className='alert'>सरकार की योजना का लाभ उठाये </h2>
      <SlidBar />
      <button className="service-btn" name="sevice-page" onClick={props.navUpdate}>सेवाएं देखे</button>
      <hr />
      <MainService />
      <h2 className="information">
      हमारे यहाँ आपको यह सविधाए दी जाती है
      </h2>
      <Services />
      <button className="service-btn" name="contact-page" onClick={props.navUpdate}>संपर्क करें</button>
      
    </div>

    </>
  )
}

export default Home