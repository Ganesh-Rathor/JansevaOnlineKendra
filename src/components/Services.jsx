import React,{useState} from 'react';
import "./Services.css";
import ShowInfo from './ShowInfo';
import Data from "../data.json";
import Service from './service';

let Index;
function Services(props) {
  const [show, setshow] = useState(false);
  function showbtn(e){
    setshow(true);
    Index = e.target.dataset.id;
    console.log(Index);
  }
  function closebtn (){
      setshow(false);
  }
  return (
    <>
    <div className='main-box'>
      <div className="title-box">
        <h3>सरकारी योजनाए</h3>
      </div>


      <div className="service-store-box">
        {Data.govrtServises.map(service => <Service key={service.key} service={service} showbtn={showbtn}/>)}        
      </div>
        
    </div>
    {show ?<ShowInfo show={closebtn} Index={Index} />:null}
    </>
  )
}

export default Services;