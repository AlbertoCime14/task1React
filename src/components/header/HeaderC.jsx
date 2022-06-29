import React from 'react'
import ProfilePhoto from '../../img/profile_albertoCime.jpeg'

const HeaderC = () => {
    return (
        <div>
            <header className="header mobile-menu-hide">
                <div className="header-titles">
                    <h4>Professional details</h4>
                </div>
                <div className="header-content">
                    <div className="header-photo">
                        <img src={ProfilePhoto} alt="Alberto cime" />
                    </div>
                    <div className="header-titles">
                        <h4>Alberto Cime</h4>
                        <h4>Jr Systems Engineer</h4>
                    </div>
                </div>
                <div className="row ">
                    <div className="col-xs-12 col-sm-12">
                        <div className="info-list">
                            <ul style={{textAlign: 'left', color: 'azure'}}>
                                <li className="lnr lnr-user" style={{marginBottom: '0px'}}>
                                    <span style={{fontFamily: 'poppins,Helvetica,sans-serif', marginLeft: '5px'}} className="header-titles">Name:</span>
                                    <span style={{fontFamily: 'poppins,Helvetica,sans-serif', marginLeft: '5px'}} className="header-titles">Alberto Cime</span>
                                </li>
                                <li className="lnr lnr-user" style={{marginBottom: '0px'}}>
                                    <span style={{fontFamily: 'poppins,Helvetica,sans-serif', marginLeft: '5px'}} className="header-titles">Age:</span>
                                    <span style={{fontFamily: 'poppins,Helvetica,sans-serif', marginLeft: '5px'}} className="header-titles">24</span>
                                </li>
                                <li className="lnr lnr-location" style={{marginBottom: '0px'}}>
                                    <span style={{fontFamily: 'poppins,Helvetica,sans-serif', marginLeft: '5px'}} className="header-titles">Location:</span>
                                    <span style={{fontFamily: 'poppins,Helvetica,sans-serif', marginLeft: '5px'}} className="header-titles">MX</span>
                                </li>
                                <li className="lnr lnr-pencil" style={{marginBottom: '0px'}}>
                                    <span style={{fontFamily: 'poppins,Helvetica,sans-serif', marginLeft: '5px'}} className="header-titles">Experience:</span>
                                    <span style={{fontFamily: 'poppins,Helvetica,sans-serif', marginLeft: '5px'}} className="header-titles">1 year</span>
                                </li>
                                <li className="lnr lnr-graduation-hat" style={{marginBottom: '0px'}}>
                                    <span style={{fontFamily: 'poppins,Helvetica,sans-serif', marginLeft: '5px'}} className="header-titles">Degree:</span>
                                    <span style={{fontFamily: 'poppins,Helvetica,sans-serif', marginLeft: '5px'}} className="header-titles">UTM</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <ul className="main-menu">

                    <li>
                        <a href="#about-me" className="nav-anim">
                        </a>
                    </li>
                </ul>
                <div className="social-links">
                    <ul>
                        <li><a href="https://www.linkedin.com/in/alberto-orlando-cime-castellanos-4405b6225/" target="_blank"><i
                            className="fab fa-linkedin-in"></i></a></li>
                        <li><a href="https://github.com/AlbertoCime14" target="_blank"><i className="fab fa-github"></i></a></li>
                    </ul>
                </div>
            </header>
        </div>
    )
}

export default HeaderC