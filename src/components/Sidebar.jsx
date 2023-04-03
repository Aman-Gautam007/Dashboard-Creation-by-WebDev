import React from "react";
import {BASE_URL} from "../components/constant";

const Sidebar = () => 
{ return(
    <div className="iq-sidebar">
    <div className="iq-sidebar-logo d-flex justify-content-between">
       <a href="index.html">
       <img src={BASE_URL+"/images/logo-3.png"} className="img-fluid" alt=""/>
       <h3>Orix Lease</h3>
       </a>
       <div className="iq-menu-bt align-self-center">
          <div className="wrapper-menu">
             <div className="line-menu half start"></div>
             <div className="line-menu"></div>
             <div className="line-menu half end"></div>
          </div>
       </div>
    </div>
    <div id="sidebar-scrollbar">
       <nav className="iq-sidebar-menu">
          <ul id="iq-sidebar-toggle" className="iq-menu">
             <li className="iq-menu-title"><i className="ri-separator"></i><span>Main</span></li>
             <li className="active">
                <a href="dashboard1.html#dashboard" className="iq-waves-effect collapsed"  data-toggle="collapse" aria-expanded="true"><i className="ri-home-4-line"></i><span>Dashboard</span><i className="ri-arrow-right-s-line iq-arrow-right"></i></a>
                <ul id="dashboard" className="iq-submenu collapse" data-parent="#iq-sidebar-toggle">
                   <li className="active"><a href="index.html">Report</a></li>
                   <li><a href="dashboard1.html">Group</a></li>
                   <li><a href="analytics.html">Help</a></li>
                </ul>
             </li>
          </ul>
       </nav>
       <div className="p-3"></div>
    </div>
 </div>
  );
}

export default Sidebar;