// import ReNavLinkct from 'reNavLinkct'
import {NavLink} from "react-router-dom";
import "./Footer.css"

const Footer = () => {
  return (
    <>
    
    <div className="info-section mt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 text-center mb-4">
                            <img src="./images/logo.jpg" alt="logo" id="logo" className="mb-4" />
                            <p className="text-light">Gurugram, Haryana <br />122505</p>
                            <p className="text-light text-center">9354013613</p>
                            <p className="text-light">Working Hours: <br />Mon-Sat (9 am - 8 pm)</p>
                        </div>
                        <div className="col-md-3 mb-4 service">
                            <h3 className="text-light mb-5"><span className="highlight">SE</span>RVICES</h3>
                            <NavLink to="#" target="_blank" className="link1"><span className="arrow">  </span>Bike Carrier</NavLink> <br />
                            <NavLink to="#" className="link1"><span className="arrow">  </span>Car Carrier</NavLink> <br />
                            <NavLink to="#" target="_blank" className="link1"><span className="arrow">  </span>Container Body</NavLink> <br />
                            <NavLink to="#" target="_blank" className="link1"><span className="arrow">  </span>Open Body Container</NavLink> <br />
                            <NavLink to="#" target="_blank" className="link1"><span className="arrow">  </span>Mini Commercial Vehicles</NavLink>
                        </div>
                        <div className="col-md-3 mb-4 n-foot">
                            <h3 className="text-light mb-5"><span className="highlight">NA</span>VIGATION</h3>
                            <NavLink to="index.html" className="n-link">Home</NavLink> <br />
                            <NavLink to="about.html" className="n-link">About</NavLink> <br />
                            <NavLink to="service.html" className="n-link">Service</NavLink> <br />
                            <NavLink to="projects.html" className="n-link">Projects</NavLink> <br />
                            <NavLink to="contactus.html" className="n-link">Contact</NavLink>
                        </div>
                        <div className="col-md-3">
                            <h3 className="text-light mb-5"><span className="highlight">BU</span>SINESS HOURS</h3>
                            <p className="text-light">Our support is available to help you 24 hours a day, seven days a week.</p>
                        </div>
                    </div>
                </div>
            </div>
    </>
  )
}

export default Footer;
