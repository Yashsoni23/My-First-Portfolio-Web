import React from 'react'
import Footer from './Footer'
import Header from './Header'
import { SiCplusplus } from "react-icons/si";


const Project = () => {
    return (
        <>
            <Header />

        <section className="project">
            <div className="projectBox projectBox_section">
                    <div className="Card1">
                        <div className="Circle1">
                            <div className="CircleIn NextJs" />
                        </div>
                        <div className="Project_Card Cd1">
                            <div className="logo_poster_container">
                                <div className="logo_poster Ecommerce"/>
                                <h1>#E-commerce</h1>
                                <p>(Comming Soon)</p>
                            </div>
                            <div className="card_cover">
                                <span className="trangle3"></span>
                                <span className='Details '>Details</span>

                                <div className="text_container">
                                    <div className="text_cols1">
                                        <h3>Tech Used: </h3>
                                        <h3>Hosting: </h3>
                                        <h3>Website Type:</h3>
                                        <h3>Complated In:</h3>
                                        <h3>API:</h3>
                                    </div>
                                    <div className="text_cols2">
                                        <p>NextJs</p>
                                        <p>-</p>
                                        <p>-</p>
                                        <p>-</p>
                                        <p>-</p>
                                    </div>
                                </div>
                                <div className="report_container">
                                    <div className="Box">
                                        <p className='Report_head SEO'>SEO</p>
                                        <h4 className="Persent">-</h4>
                                    </div>
                                    <div className="Box">
                                        <p className='Report_head Best'>Best <br /> Practices</p>
                                        <h4 className="Persent Persent1">-</h4>
                                    </div>
                                    <div className="Box">
                                        <p className='Report_head Accessibilty'>Accessibilty </p>
                                        <h4 className="Persent">-</h4>
                                    </div>
                                    <div className="Box">
                                        <p className='Report_head Performance'> Performance</p>
                                        <h4 className="Persent Persent1">-</h4>

                                    </div>
                                </div>
                                <button type='button' className='Source_btn'>Source Code(Comming Soon)</button>
                            </div>
                        </div>
                    </div>

                    <div className="Card2">
                        <div className="Circle2">
                            <div className="CircleIn ReactJs" />
                        </div>
                        <div className="Project_Card Cd2">
                        <div className="logo_poster_container">
                                <div className="logo_poster Portfolio"/>
                                <h1>#Portfolio</h1>

                            </div>
                            <div className="card_cover">
                                <span className="trangle3"></span>
                                <span className='Details '>Details</span>

                                <div className="text_container">
                                    <div className="text_cols1">
                                        <h3>Tech Used: </h3>
                                        <h3>Hosting: </h3>
                                        <h3>Website Type:</h3>
                                        <h3>Complated In:</h3>
                                        <h3>API:</h3>
                                    </div>
                                    <div className="text_cols2">
                                        <p> React Js</p>
                                        <p>Netlify.com</p>
                                        <p>Static</p>
                                        <p>12days</p>
                                        <p>Formspree</p>
                                    </div>
                                </div>
                                <div className="report_container">
                                    <div className="Box">
                                        <p className='Report_head SEO'>SEO</p>
                                        <h4 className="Persent">100%</h4>
                                    </div>
                                    <div className="Box">
                                        <p className='Report_head Best'>Best <br /> Practices</p>
                                        <h4 className="Persent Persent1">87%</h4>
                                    </div>
                                    <div className="Box">
                                        <p className='Report_head Accessibilty'>Accessibilty </p>
                                        <h4 className="Persent">83%</h4>
                                    </div>
                                    <div className="Box">
                                        <p className='Report_head Performance'> Performance</p>
                                        <h4 className="Persent Persent1">53%</h4>

                                    </div>
                                </div>
                                <button type='button' className='Source_btn'>Source Code</button>

                            </div>

                        </div>
                    </div>

                    <div className="Card3">
                        <div className="Circle3" >
                            <div className="CircleIn CPP" ><SiCplusplus className='cpp_logo'/></div>
                        </div>
                        <div className="Project_Card Cd3">
                        <div className="logo_poster_container">
                                <div className="logo_poster Bank"/>
                                <h1>#Bank Managment System</h1>

                            </div>
                            <div className="card_cover">
                                <span className="trangle3"></span>
                                <span className='Details '>Details</span>

                                <div className="text_container tc3">
                                    <div className="text_cols1 tc3">
                                    <h3>Tech Used: </h3>
                                        <h3>DS Used: </h3>
                                        <h3>Name :</h3>
                                        <h3>Complated In:</h3>
                                        <h3>GitHub:</h3>
                                    </div>
                                    <div className="text_cols2 tc3">
                                        <p>C++</p>
                                        <p>No</p>
                                        <p>BMS </p>
                                        <p>4 days</p>
                                        <p>Yes</p>

                                    </div>
                                </div>
                               
                                <button type='button' className='Source_btn'>Source Code</button>

                            </div>

                        </div>

                    </div>

                </div>
                <Footer/>

            </section>
        </>
    )
}

export default Project