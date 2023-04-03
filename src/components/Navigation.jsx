import React from "react";

const Navigation = () => 
{ return(
    <section>
       <div className="iq-top-navbar">
         <div className="iq-navbar-custom">
            <div className="iq-sidebar-logo">
               <div className="top-logo">
                  <a href="index.html" className="logo">
                  <img src="images/orixlogo.png" className="img-fluid" alt=""/>
                  <span>OrixLease</span>
                  </a>
               </div>
            </div>
            <div className="navbar-breadcrumb">
               <h5 className="mb-0">Dashboard</h5>
               <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                     <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                     <li className="breadcrumb-item active" aria-current="page">Home</li>
                  </ol>
               </nav>
            </div>
            <nav className="navbar navbar-expand-lg navbar-light p-0">
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <i className="ri-menu-3-line"></i>
                  </button>
                  <div className="iq-menu-bt align-self-center">
                     <div className="wrapper-menu">
                        <div className="line-menu half start"></div>
                        <div className="line-menu"></div>
                        <div className="line-menu half end"></div>
                     </div>
                  </div>
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                     <ul className="navbar-nav ml-auto navbar-list">
                        <li className="nav-item dropdown">
                           <a href="dashboard1.html#" className="search-toggle iq-waves-effect">
                              <i className="ri-mail-line"></i>
                              <span className="badge badge-pill badge-primary badge-up count-mail">3</span>
                           </a>
                           <div className="iq-sub-dropdown">
                              <div className="iq-card shadow-none m-0">
                                 <div className="iq-card-body p-0 ">
                                    <div className="bg-primary p-3">
                                       <h5 className="mb-0 text-white">All Messages<small className="badge  badge-light float-right pt-1">5</small></h5>
                                    </div>
                                    <a href="dashboard1.html#" className="iq-sub-card" >
                                       <div className="media align-items-center">
                                          <div className="">
                                             <img className="avatar-40 rounded" src="images/user/01.jpg" alt=""/>
                                          </div>
                                          <div className="media-body ml-3">
                                             <h6 className="mb-0 ">Nik Emma Watson</h6>
                                             <small className="float-left font-size-12">13 Jun</small>
                                          </div>
                                       </div>
                                    </a>
                                    <a href="dashboard1.html#" className="iq-sub-card" >
                                       <div className="media align-items-center">
                                          <div className="">
                                             <img className="avatar-40 rounded" src="images/user/02.jpg" alt=""/>
                                          </div>
                                          <div className="media-body ml-3">
                                             <h6 className="mb-0 ">Lorem Ipsum Watson</h6>
                                             <small className="float-left font-size-12">20 Apr</small>
                                          </div>
                                       </div>
                                    </a>
                                    <a href="dashboard1.html#" className="iq-sub-card" >
                                       <div className="media align-items-center">
                                          <div className="">
                                             <img className="avatar-40 rounded" src="images/user/03.jpg" alt=""/>
                                          </div>
                                          <div className="media-body ml-3">
                                             <h6 className="mb-0 ">Why do we use it?</h6>
                                             <small className="float-left font-size-12">30 Jun</small>
                                          </div>
                                       </div>
                                    </a>
                                    <a href="dashboard1.html#" className="iq-sub-card" >
                                       <div className="media align-items-center">
                                          <div className="">
                                             <img className="avatar-40 rounded" src="images/user/04.jpg" alt=""/>
                                          </div>
                                          <div className="media-body ml-3">
                                             <h6 className="mb-0 ">Variations Passages</h6>
                                             <small className="float-left font-size-12">12 Sep</small>
                                          </div>
                                       </div>
                                    </a>
                                    <a href="dashboard1.html#" className="iq-sub-card" >
                                       <div className="media align-items-center">
                                          <div className="">
                                             <img className="avatar-40 rounded" src="images/user/05.jpg" alt=""/>
                                          </div>
                                          <div className="media-body ml-3">
                                             <h6 className="mb-0 ">Lorem Ipsum generators</h6>
                                             <small className="float-left font-size-12">5 Dec</small>
                                          </div>
                                       </div>
                                    </a>
                                 </div>
                              </div>
                           </div>
                        </li>
                        <li className="nav-item">
                           <a href="dashboard1.html#" className="search-toggle iq-waves-effect">
                              <i className="ri-notification-2-line"></i>
                              <span className="bg-danger dots"></span>
                           </a>
                           <div className="iq-sub-dropdown">
                              <div className="iq-card shadow-none m-0">
                                 <div className="iq-card-body p-0 ">
                                    <div className="bg-danger p-3">
                                       <h5 className="mb-0 text-white">All Notifications<small className="badge  badge-light float-right pt-1">4</small></h5>
                                    </div>
                                    <a href="dashboard1.html#" className="iq-sub-card" >
                                       <div className="media align-items-center">
                                          <div className="media-body ml-3">
                                             <h6 className="mb-0 ">New Order Recieved</h6>
                                             <small className="float-right font-size-12">23 hrs ago</small>
                                             <p className="mb-0">Lorem is simply</p>
                                          </div>
                                       </div>
                                    </a>
                                    <a href="dashboard1.html#" className="iq-sub-card" >
                                       <div className="media align-items-center">
                                          <div className="">
                                             <img className="avatar-40 rounded" src="images/user/01.jpg" alt=""/>
                                          </div>
                                          <div className="media-body ml-3">
                                             <h6 className="mb-0 ">Emma Watson Nik</h6>
                                             <small className="float-right font-size-12">Just Now</small>
                                             <p className="mb-0">95 MB</p>
                                          </div>
                                       </div>
                                    </a>
                                    <a href="dashboard1.html#" className="iq-sub-card" >
                                       <div className="media align-items-center">
                                          <div className="">
                                             <img className="avatar-40 rounded" src="images/user/02.jpg" alt=""/>
                                          </div>
                                          <div className="media-body ml-3">
                                             <h6 className="mb-0 ">New customer is join</h6>
                                             <small className="float-right font-size-12">5 days ago</small>
                                             <p className="mb-0">Jond Nik</p>
                                          </div>
                                       </div>
                                    </a>
                                    <a href="dashboard1.html#" className="iq-sub-card" >
                                       <div className="media align-items-center">
                                          <div className="">
                                             <img className="avatar-40" src="images/small/jpg.svg" alt=""/>
                                          </div>
                                          <div className="media-body ml-3">
                                             <h6 className="mb-0 ">Updates Available</h6>
                                             <small className="float-right font-size-12">Just Now</small>
                                             <p className="mb-0">120 MB</p>
                                          </div>
                                       </div>
                                    </a>
                                 </div>
                              </div>
                           </div>
                        </li>
                        <li className="nav-item iq-full-screen"><a href="dashboard1.html#" className="iq-waves-effect" id="btnFullscreen"><i className="ri-fullscreen-line"></i></a></li>
                     </ul>
                  </div>
                  <ul className="navbar-list">
                     <li>
                        <a href="dashboard1.html#" className="search-toggle iq-waves-effect bg-primary text-white"><img src="images/user/1.jpg" className="img-fluid rounded" alt="user"/></a>
                        <div className="iq-sub-dropdown iq-user-dropdown">
                           <div className="iq-card shadow-none m-0">
                              <div className="iq-card-body p-0 ">
                                 <div className="bg-primary p-3">
                                    <h5 className="mb-0 text-white line-height">Hello Nik jone</h5>
                                    <span className="text-white font-size-12">Available</span>
                                 </div>
                                 <a href="profile.html" className="iq-sub-card iq-bg-primary-hover">
                                    <div className="media align-items-center">
                                       <div className="rounded iq-card-icon iq-bg-primary">
                                          <i className="ri-file-user-line"></i>
                                       </div>
                                       <div className="media-body ml-3">
                                          <h6 className="mb-0 ">My Profile</h6>
                                          <p className="mb-0 font-size-12">View personal profile details.</p>
                                       </div>
                                    </div>
                                 </a>
                                 <a href="profile-edit.html" className="iq-sub-card iq-bg-primary-success-hover">
                                    <div className="media align-items-center">
                                       <div className="rounded iq-card-icon iq-bg-success">
                                          <i className="ri-profile-line"></i>
                                       </div>
                                       <div className="media-body ml-3">
                                          <h6 className="mb-0 ">Edit Profile</h6>
                                          <p className="mb-0 font-size-12">Modify your personal details.</p>
                                       </div>
                                    </div>
                                 </a>
                                 <div className="d-inline-block w-100 text-center p-3">
                                    <a className="iq-bg-danger iq-sign-btn" href="sign-in.html" role="button">Sign out<i className="ri-login-box-line ml-2"></i></a>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </li>
                  </ul>
               </nav>
         </div>
      </div>
      <div className="right-sidebar-mini">
            <div className="right-sidebar-toggle">
                <i className="ri-arrow-left-line side-left-icon"></i>
                <i className="ri-arrow-right-line side-right-icon"></i>
            </div>
            <div className="right-sidebar-panel p-0">

                    <div className="iq-card shadow-none">
                        <div className="iq-card-header d-flex justify-content-between">
                            <div className="iq-header-title">
                                <h6 className="card-title">Active Users</h6>
                            </div>
                            <div className="iq-card-header-toolbar d-flex align-items-center">
                                <div className="dropdown">
                                <span className="dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" >
                                <i className="ri-more-2-fill"></i>
                                </span>
                                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                                    <a className="dropdown-item" href="dashboard1.html#">Action</a>
                                    <a className="dropdown-item" href="dashboard1.html#">Another action</a>
                                    <a className="dropdown-item" href="dashboard1.html#">Something else here</a>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className="iq-card-body">
                            <div className="media align-items-center mb-4">
                                <div className="iq-profile-avatar status-online">
                                <img className="rounded-circle avatar-60" src="images/user/01.jpg" alt=""/>
                                </div>
                                <div className="media-body ml-3">
                                <h6 className="mb-0"><a href="dashboard1.html#">Anna Sthesia</a></h6>
                                <p className="mb-0">Admin</p>
                                </div>
                            </div>
                            <div className="media align-items-center mb-4">
                                <div className="iq-profile-avatar status-online">
                                <img className="rounded-circle avatar-60" src="images/user/02.jpg" alt=""/>
                                </div>
                                <div className="media-body ml-3">
                                <h6 className="mb-0"><a href="dashboard1.html#">Paul Molive</a></h6>
                                <p className="mb-0">Admin</p>
                                </div>
                            </div>
                            <div className="media align-items-center mb-4">
                                <div className="iq-profile-avatar status-online">
                                <img className="rounded-circle avatar-60" src="images/user/03.jpg" alt=""/>
                                </div>
                                <div className="media-body ml-3">
                                <h6 className="mb-0"><a href="dashboard1.html#">Anna Mull</a></h6>
                                <p className="mb-0">Admin</p>
                                </div>
                            </div>
                            <div className="media align-items-center mb-4">
                                <div className="iq-profile-avatar status-online">
                                <img className="rounded-circle avatar-60" src="images/user/04.jpg" alt=""/>
                                </div>
                                <div className="media-body ml-3">
                                <h6 className="mb-0"><a href="dashboard1.html#">Paige Turner</a></h6>
                                <p className="mb-0">Admin</p>
                                </div>
                            </div>
                            <div className="media align-items-center mb-4">
                                <div className="iq-profile-avatar status-online">
                                <img className="rounded-circle avatar-60" src="images/user/01.jpg" alt=""/>
                                </div>
                                <div className="media-body ml-3">
                                <h6 className="mb-0"><a href="dashboard1.html#">Bob Frapples</a></h6>
                                <p className="mb-0">Admin</p>
                                </div>
                            </div>
                            <div className="media align-items-center mb-4">
                                <div className="iq-profile-avatar status-online">
                                <img className="rounded-circle avatar-60" src="images/user/02.jpg" alt=""/>
                                </div>
                                <div className="media-body ml-3">
                                <h6 className="mb-0"><a href="dashboard1.html#">Barb Ackue</a></h6>
                                <p className="mb-0">Admin</p>
                                </div>
                            </div>
                            <div className="media align-items-center mb-4">
                                <div className="iq-profile-avatar status-online">
                                <img className="rounded-circle avatar-60" src="images/user/03.jpg" alt=""/>
                                </div>
                                <div className="media-body ml-3">
                                <h6 className="mb-0"><a href="dashboard1.html#">Greta Life</a></h6>
                                <p className="mb-0">Admin</p>
                                </div>
                            </div>
                            <div className="media align-items-center mb-4">
                                <div className="iq-profile-avatar status-away">
                                <img className="rounded-circle avatar-60" src="images/user/04.jpg" alt=""/>
                                </div>
                                <div className="media-body ml-3">
                                <h6 className="mb-0"><a href="dashboard1.html#">Ira Membrit</a></h6>
                                <p className="mb-0">Admin</p>
                                </div>
                            </div>
                            <div className="media align-items-center mb-4">
                                <div className="iq-profile-avatar status-away">
                                <img className="rounded-circle avatar-60" src="images/user/01.jpg" alt=""/>
                                </div>
                                <div className="media-body ml-3">
                                <h6 className="mb-0"><a href="dashboard1.html#">Pete Sariya</a></h6>
                                <p className="mb-0">Admin</p>
                                </div>
                            </div>
                            <div className="media align-items-center">
                                <div className="iq-profile-avatar">
                                <img className="rounded-circle avatar-60" src="images/user/02.jpg" alt=""/>
                                </div>
                                <div className="media-body ml-3">
                                <h6 className="mb-0"><a href="dashboard1.html#">Monty Carlo</a></h6>
                                <p className="mb-0">Admin</p>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
         </div>
   </section>
  );
}

export default Navigation;