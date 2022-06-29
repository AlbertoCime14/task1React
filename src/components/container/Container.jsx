import React from 'react'

const Container = () => {
    return (
        <div>
            <div className="content-area">
                <div className="animated-sections">
                   
                    <section data-id="about-me" className="animated-section">
                        <div className="page-title">
                            <h2>About <span>Me</span></h2>
                        </div>

                        <div className="section-content">
                           
                            <div className="row">
                                <div className="col-xs-12 col-sm-6">
                                    <div className="info-list">
                                        <ul>
                                            <li>
                                                <span className="title">Name</span>
                                                <span className="value">Alberto Cime</span>
                                            </li>

                                            <li>
                                                <span className="title">Age</span>
                                                <span className="value">24</span>
                                            </li>

                                            <li>
                                                <span className="title">Location</span>
                                                <span className="value">Mérida, Yucatán, Mx</span>
                                            </li>

                                            <li>
                                                <span className="title">Experience</span>
                                                <span className="value">1 year</span>
                                            </li>

                                            <li>
                                                <span className="title">Degree</span>
                                                <span className="value" >Universidad Tecnológica Metropolitana</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="col-xs-12 col-sm-6">
                                    <div className="info-list">
                                        <ul>
                                            <li>
                                                <span className="title">Carrer Level</span>
                                                <span className="value">Level 1</span>
                                            </li>

                                            <li>
                                                <span className="title">Phone</span>
                                                <span className="value">(999)1-74-51-54</span>
                                            </li>

                                            <li>
                                                <span className="title">Twitter</span>
                                                <span className="value">@example</span>
                                            </li>

                                            <li>
                                                <span className="title">E-mail</span>
                                                <span className="value">orland_998@hotmail.com<a href=""></a></span>
                                            </li>


                                        </ul>
                                    </div>
                                </div>
                            </div>
                           
                            <div className="white-space-50"></div>
                           
                            <div className="row">
                                <div className="col-xs-12 col-sm-12">
                                    <div className="block-title">
                                        <h3>I'm <span>Jr. Systems Engineer</span></h3>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-xs-12 col-sm-12">
                                    <div className="col-xs-12 col-sm-12">
                                        <p>Hello, my name is Alberto Cime and I am a systems engineer; Throughout my professional development, I have had experience developing web applications, using programming languages such as PHP and Javascript, although I personally prefer activities related to the development of APIs, using frameworks such as Node.Js and non-relational databases such as Mongo DB and Dynamo DB.</p>
                                        <p>I am passionate about cybersecurity, and I have a year of experience using some tools such as ZAP proxy, sql map, nmap and postman. As well as, I have worked with firewalls like Fortinet for the creation of web filtering and network connectivity policies. In the future I would like to be a cloud security specialist.</p>
                                    </div>
                                </div>
                            </div>
                           
                        </div>
                    </section>
                   
                </div>
            </div>
        </div>
    )
}

export default Container