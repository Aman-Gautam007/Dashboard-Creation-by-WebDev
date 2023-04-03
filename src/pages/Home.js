import React, { Component } from "react";
import LoadingComponent from "../components/LoadingComponent";
import Sidebar from "../components/Sidebar";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

import axios from "axios";

//import { BASE_URL } from "../components/constant";



export default class Listing extends Component
{   
   constructor()
   {
      super();
      this.state={
         count:0
      }
   }

   componentDidMount()
   {
      axios.get('http://localhost/orix/public/today')
      .then(response=>{
         this.setState({count:response.data.count});
         
      });

   }
   


render()
{ return(
 <section> 
    
   
   <div className="wrapper">
      <LoadingComponent/>
      <Sidebar/>
      <Navigation/>
      <div id="content-page" className="content-page">
         <div className="container-fluid">
            <div className="row row-eq-height">
           
               
               <div className="col-lg-3 col-md-3">
                     <div className="iq-card iq-card-block iq-card-stretch iq-card-height">
                        <div className="iq-card-body">
                           <div className="row">
                              <div className="col">
                                 <h5 className="card-title text-uppercase text-secondary mb-0 d-block">Today</h5>
                                 <h2 className="mb-0 d-block">{this.state.count}</h2>
                              </div>
                              <div className="col-auto">
                                 <div className="icon iq-icon-box rounded-circle iq-bg-primary rounded-circle">
                                    <i className="ri-add-box-line"></i>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div id="chart-1"></div>
                     </div>
                  </div>
                
                      
                  <div className="col-lg-3 col-md-3">
                     <div className="iq-card iq-card-block iq-card-stretch iq-card-height">
                        <div className="iq-card-body">
                           <div className="row">
                              <div className="col">
                                 <h5 className="card-title text-uppercase text-secondary mb-0 d-block">Yesterday</h5>
                                 <h2 className="mb-0 d-block">45</h2>
                              </div>
                              <div className="col-auto">
                                 <div className="icon iq-icon-box rounded-circle iq-bg-primary rounded-circle">
                                    <i className="ri-add-box-line"></i>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div id="chart-2"></div>
                     </div>
                  </div>
                  <div className="col-lg-3 col-md-3">
                     <div className="iq-card iq-card-block iq-card-stretch iq-card-height">
                        <div className="iq-card-body">
                           <div className="row">
                              <div className="col">
                                 <h5 className="card-title text-uppercase text-secondary mb-0 d-block">This Week</h5>
                                 <h2 className="mb-0 d-block">212</h2>
                              </div>
                              <div className="col-auto">
                                 <div className="icon iq-icon-box rounded-circle iq-bg-primary rounded-circle">
                                    <i className="ri-add-box-line"></i>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div id="chart-3"></div>
                     </div>
                  </div>
                  <div className="col-lg-3 col-md-3">
                     <div className="iq-card iq-card-block iq-card-stretch iq-card-height">
                        <div className="iq-card-body">
                           <div className="row">
                              <div className="col">
                                 <h5 className="card-title text-uppercase text-secondary mb-0 d-block">This Month</h5>
                                 <h2 className="mb-0 d-block">2000</h2>
                              </div>
                              <div className="col-auto">
                                 <div className="icon iq-icon-box rounded-circle iq-bg-primary rounded-circle">
                                    <i className="ri-add-box-line"></i>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div id="chart-4"></div>
                     </div>
                  </div>
                  
               {/* Content Top Banner End  */}
                       <div className="col-lg-12">
                           <div className="iq-card iq-card-block iq-card-stretch iq-card-height">
                              <div className="iq-card-header d-flex justify-content-between">
                                 <div className="iq-header-title">
                                    <h4 className="card-title">Server History</h4>
                                 </div>
                                 <div className="iq-card-header-toolbar d-flex align-items-center">
                                    <div className="dropdown">
                                       <span className="dropdown-toggle text-primary" id="dropdownMenuButton5" data-toggle="dropdown">
                                       <i className="ri-more-2-fill"></i>
                                       </span>
                                       <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                                          <a className="dropdown-item" href="dashboard1.html#"><i className="ri-eye-fill mr-2"></i>View</a>
                                          <a className="dropdown-item" href="dashboard1.html#"><i className="ri-delete-bin-6-fill mr-2"></i>Delete</a>
                                          <a className="dropdown-item" href="dashboard1.html#"><i className="ri-file-download-fill mr-2"></i>Download</a>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div className="iq-card-body">
                                 <div className="table-responsive">
                                    <table className="table mb-0 table-borderless">
                                       <thead>
                                          <tr>
                                             <th scope="col">Booking ID</th>
                                             <th scope="col">Booking Date</th>
                                             <th scope="col">Name</th>
                                             <th scope="col">Location</th>
                                             <th scope="col">Status</th>
                                          </tr>
                                       </thead>
                                       <tbody>
                                          <tr>
                                             <td>RS/MUM/22-23/345005096</td>
                                             <td>05-May-2022</td>
                                             <td>Naresh</td>
                                             <td>Delhi</td>
                                             <td>
                                                <div className="badge badge-pill badge-success">Running</div>
                                             </td>
                                          </tr>
                                          <tr>
                                             <td>RS/BLR/22-23/348005073</td>
                                             <td>05-May-2022</td>
                                             <td>Vinati</td>
                                             <td>Delhi</td>
                                             <td>
                                                <div className="badge badge-pill badge-warning text-white">Starting</div>
                                             </td>
                                          </tr>
                                          <tr>
                                             <td>RS/BLR/22-23/348004914</td>
                                             <td>04-May-2022</td>
                                             <td>praveen</td>
                                             <td>Mumbai</td>
                                             <td>
                                                <div className="badge badge-pill badge-danger">Stopped</div>
                                             </td>
                                          </tr>
                                          <tr>
                                             <td>#0879982</td>
                                             <td>14/12/2019</td>
                                             <td>Delhi 0014 India</td>
                                             <td>Mumbai</td>
                                             <td>
                                                <div className="badge badge-pill badge-info">Maintenance</div>
                                             </td>
                                          </tr>
                                          <tr>
                                             <td>#0879981</td>
                                             <td>10/12/2019</td>
                                             <td>Alabama 2741 USA</td>
                                             <td>Bangalore</td>
                                             <td>
                                                <div className="badge badge-pill badge-success">Running</div>
                                             </td>
                                          </tr>
                                       </tbody>
                                    </table>
                                 </div>
                              </div>
                           </div>
                        </div>
               </div>
            </div>
         </div>
      </div>
   
      <Footer/>
      
   

   </section>
    
       
    
    
      
   

   
  );
}
}


// export default Home;