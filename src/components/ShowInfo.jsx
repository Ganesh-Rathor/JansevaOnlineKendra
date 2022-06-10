import React from 'react'
import "./ShowInfo.css";
import Data from "../data.json"
function ShowInfo(props) {
    var info = Data.govrtServises[props.Index];
  return (      
    <div className="showInfo">
        <div className="header">
            <h1>{info.service}</h1>
            <button className="close" onClick={props.show}>
                <i class="fa-regular fa-2xl fa-circle-xmark"></i>
            </button>
        </div>
        <div className="imge">
            <img src={require(`../images/${info.image.name}-icon.${info.image.type}`)} alt="icon" width={150} height={150} />
        </div>
    <div className="what-is">
      <h2> {info.service} क्या है</h2>
      <p className="this-is">
        {info.description}
      </p>
    </div>
    <div className="benefits">
      <h2>{info.service} के लाभ</h2>
      <ul>
        {info.benefits.map(bene=> <li>{ bene}</li>)}
      </ul>
    </div>
    <div className="capability">
      <h3>{info.service} के लिए योग्यता</h3>
      {info.capability.map(cap => <p>{cap}</p>)}
    </div>
    <div className="need">
      <h3>{info.service} के लिए जरुरी समग्री</h3>
      <p>{info.need}</p>
    </div>
    <button className='know-more-btn' onClick={props.show}>बंद करे...</button>
  </div>
  )
}

export default ShowInfo;