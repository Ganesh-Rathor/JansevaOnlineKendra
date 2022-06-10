import React,{useState} from 'react';

function ServiceMain(props) {
  const [toggle, settoggle] = useState(false);
  const displayDetail = (e)=>{
    settoggle(true);
    console.log(toggle);
  }
  const hideDetail = (e)=>{
    settoggle(false)
    console.log(toggle);
  }
  return (
    <div className="main-service" style={{backgroundColor : toggle&&"#F7F5F2"}} onMouseEnter={displayDetail} onMouseLeave={hideDetail}>
        {!toggle? 
        <div className="logo">
            {props.data.imgeType==="img"?<img src={require(`../../images/${props.data.img.name}-icon.${props.data.img.type}`)} alt="" />:null}
            
            {props.data.imgeType==="i"?<i className={`${props.data.i} fa-4x`}></i>:null}
        </div>:null }
            <p className='name'>{props.data.name}</p>
            {toggle?
              <p className="detail">{props.data.detail}</p>
              :null }
        {!toggle?
        <div className="type">
            <p>{props.data.type}</p>
        </div>
        :null}
        <div className="money">
            <span className='pay'>{props.data.money} rs</span>
            {!props.data.avlability ?<span style={{color:"red"}} className="available">Not-Available <i class="fa-solid fa-circle-xmark"></i></span>:<span className="available">Available <i class="fa-solid fa-circle-check"></i></span>}
        </div>
    </div>
  )
}

export default ServiceMain;