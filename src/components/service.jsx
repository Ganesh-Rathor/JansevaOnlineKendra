import React from 'react';
  let id=-1;
 function service(props) {
  id++;
  return (
      <>
    <div className="service">
          <img src={require(`../images/${props.service.image.name}-icon.${props.service.image.type}`)} alt="" />
          <h2 className="serviceName">{props.service.service}</h2>
          <p className='detail'>{props.service.description} <strong>{props.service.ShopeFacility}</strong></p>
          <button onClick={props.showbtn}  data-id={props.service.key-1} className='know-more-btn'>ओर जाने... </button>
    </div>
    
    </>
  );
}

export default service