import React from 'react';
import '../css/fonts/flaticon.css'

const Test = () => (
 <div className="row">
   <div className="container text-center">

     <i className="flaticon-traffic-cone" style={{color:"green"}}></i>
     <h1>Hello</h1>
       <div className="single-item">
         <div className="icon-box">
           <i className="flaticon-001-traffic-cone"></i>
         </div>
         <div className="content-box">
           <h3>Car Wash</h3>
           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elitsed do.</p>
           <a href="service-single.html"> details <i className="fa fa-caret-right"></i></a>
         </div>
       </div>
     <span className="flaticon-003-tire" style={{color:"#000"}}></span>
   </div>

 </div>
)

export default Test
