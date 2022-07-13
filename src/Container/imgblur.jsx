import React,{useState} from 'react';
import './imgblur.css';


const Imgblur = () => {
const [show,setShow]=useState(true);
const [shows,setShows]=useState(true);

  return (<>
    <button onClick={()=> setShow(!show)}>clickme</button>
    {show ?(
    <div className='main'>
        <div className='title'>Harish</div>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit in animi quae ipsam fugit explicabo. Ratione reiciendis esse voluptates est nobis? Ipsum itaque saepe ea vel iusto libero magnam quo.</p>
    </div>): null}
    <button onClick={()=>setShows(!shows)}>CLICKME</button>
    {shows ?( <div className='main'>
      <div className="name"><h1>HItesh</h1></div>
      <div><h3>aDDRESS</h3></div>
    </div>):null}
   
    </>
  )
}

export default Imgblur;