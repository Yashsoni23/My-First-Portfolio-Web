import React, { useState } from 'react'
import Header from './Header'
import './Header.css';
import { FaLinkedinIn, FaInstagram, FaTwitter, FaGithub, FaHackerrank } from "react-icons/fa";
import { AiOutlineArrowRight } from "react-icons/ai";
import { SiCplusplus } from "react-icons/si";

import Imgs from './ImgsApi';
import Slider from './Slider';

const Home = () => {



    const [imgData, setImgData] = useState(Imgs);
    console.log(setImgData);

    return (
        <>
            <section id="Home" className='Home'  >

                <Header>

                </Header>

                <div className="Banner">
                    <div className='SometxtBox'>
                        <div className="Sometxt">
                            <h1 className='txt'>
                                Hello ,I'm <span className="name">Yash</span>
                                <p className="childtxt">"Programming made the impossible possible.<br /> You can have a only null object and a constant variable ."<br />
                                    {/* consectetur adipisicing.  */}
                                    <a target='_blank' href="https://www.linkedin.com/in/yash-simejiya-8288a6225/" className='childtxt  childtxt_hover'>Curious to know more?</a>
                                </p>
                            </h1>
                        </div>
                    </div>
                    <div className="poster_container1">
                        <div className="Poster"></div></div>
                </div>
            </section>
            {/* --------------------------------------Section-2 start------------------------------------------------------- */}
            <section className="About" id='About' >
                <div className="Header">
                    <h2 className='Head'><span className='ulhead'>About</span> Me</h2>
                </div>
                <div className="DivContainer">
                    <div className="ImageOuterBox">
                        <div className="ImageInnerBox ImageInnerBox_About">
                        </div>
                    </div>
                    <div className="AboutOuterContainer">
                        <div className="AboutInnerContainer">
                            <article className="article"><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className='span'>Hey</span> !! I'm Yash.I am currently doing My BCA from SilverOak University.I have much curious about To learn new technology and build something which are fix some problem,so that I trying to shape my career in IT industry. <br />
                                <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                All tech fields are super attactive but in some of them especially my favourites are Competative Coding,Machine Learning,Data Science and ios Development. <br /><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                With this The Curiousity can't calm me down, I always make new sketches and spend a few of my hours when I want to reconnect.Some sketches i have added to this website, on Sketches Section so you must be check it out.<br /><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                So it's all About me if you have any question or suggestion to ask me via drop massage in Contact form or E-mail. <br />
                                <span className="Greets">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Have a Nice Day!!</span>

                            </article>
                        </div>
                    </div>
                </div>
            </section>

            {/* --------------------------------------Section-3 start------------------------------------------------------- */}
            <section id="Projects">
                <div className="triangle_2"> <h2 className='Head2'>Pro<span className='ul2'>je</span>cts</h2></div>
                <div className="projectBox">
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
                                {/* <div className="report_container">
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
                                </div> */}
                                <button type='button' className='Source_btn'>Source Code</button>

                            </div>

                        </div>
                    </div>
                </div>

                <div className="triangle_1"></div>

            </section>
            <section className="Sketches">
                <h2 className='Head3'>S<span className="ul3">kil</span>ls</h2>
                <div className="Banner2">
                    <div className="poster_container">
                        <div className="Poster2" />
                    </div>
                    <div className="SkillBox">
                        <div className="skillset progress-10"><div className="overlay">95%</div><div className="SkillName">HTML</div></div>
                        <div className="skillset progress-11"><div className="overlay">92%</div><div className="SkillName">CSS</div></div>
                        <div className="skillset progress-12"><div className="overlay">60%</div><div className="SkillName">JS</div></div>
                        <div className="skillset progress-13"><div className="overlay">75%</div><div className="SkillName">J-QUERY</div></div>
                        <div className="skillset progress-14"><div className="overlay">80%</div><div className="SkillName">C</div></div>
                        <div className="skillset progress-15"><div className="overlay">75%</div><div className="SkillName">C++</div></div>
                        <div className="skillset progress-16"><div className="overlay">64%</div><div className="SkillName">REACTJS</div></div>
                        <div className="skillset progress-17"><div className="overlay">50%</div><div className="SkillName">NEXTJS</div></div>
                        <div className="skillset progress-18"><div className="overlay">50%</div><div className="SkillName">PHP</div></div>
                        <div className="skillset "><div className="LIlogo"><FaLinkedinIn />
                            <a target='_blank' rel="noreferrer" href="https://www.linkedin.com/in/yash-simejiya-8288a6225/" className='childtxt  childtxt_hover'></a>


                        </div><button onClick={() => window.open('https://www.linkedin.com/in/yash-simejiya-8288a6225/')} className='Profile'>Profile<AiOutlineArrowRight className='Rarrow' /></button></div>
                    </div>
                    <Slider imgData={imgData} />

                </div>




            </section>
            {/* ------------------------------------------------------------------------------------------------------------------------------------------ */}
            <section className=" section_Contect" id="Contact">


                <div className="Contact_header">
                    <h1 className="Contact_Head">Get in Touch</h1>
                </div>
                <div className="Contact_container">

                    <div className="Contact_flex_container" data-aos="fade-left">
                        <form action="https://formspree.io/f/xpznagoe" method="POST">
                            <div className="form_container">
                                <div className="form_container_inner">
                                    <div className=" feild_container ">
                                        <legend> Name*</legend>
                                        <label htmlFor="Name" className="label" min="5">
                                            <input required type="text" name="Name" id="Name"
                                                autocomplete="off" className='input_width' />
                                        </label>
                                    </div>
                                    <div className="Email feild_container ">
                                        <legend> E-mail*</legend>
                                        <label htmlFor="E-mail" className="label">
                                            <input required type="email" name="E-mail" id="E-mail"
                                                autoComplete="off" className='input_width' />
                                        </label>

                                    </div>
                                    <div className="Subject feild_container ">
                                        <legend>Subject *</legend>
                                        <label htmlFor="Subject" className="label">
                                            <input required type="Subject" name="Subject" id="Subject"
                                                autoComplete="off" className='input_width' />
                                        </label>

                                    </div>
                                    <div className="Massage feild_container ">
                                        <legend> Massage*</legend>
                                        <label htmlFor="Subject" className="label">
                                            <textarea title="Massage" name="Massage" id="Massage" autoComplete="off" className='input_width'></textarea>
                                        </label>

                                    </div>
                                    <button type="submit" id="btn">Send</button>

                                </div>
                            </div>
                        </form>
                    </div>





                    <div className="Contact_flex_inner_container" data-aos="fade-right">

                        <div className="Head_container">
                            <h2 id='Feel'>Feel Free To Contact</h2>
                            <h6 className="para">Hello Everyone! Have a great day : I am here to help you. If you want to know
                                something or you
                                have
                                any suggestion then please mail me. Thank You.</h6>
                        </div>
                        <div className="col_container">
                            <div className="address_container">
                                <div className="contain map"><img src="map.png" alt="" className="MEW" /></div>
                                <div className="contain email"><img src="email.png" alt="" className="MEW" /></div>
                                <div className="contain web"><img src="globe.png" alt="" className="MEW" /></div>
                            </div>
                            <div className="main_container3">
                                <div className="address container2">
                                    <h3>Vatva,Ahemedabad</h3>
                                </div>

                                <div className="container2 email">
                                    <h3>Yashsoni48678@gmail.com</h3>
                                </div>

                                <div className="container2 web">
                                    <h3>www.Yashsoni.net.in</h3>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>



                <div className="Thanks">Thanks for Visiting!!</div>
                <footer >
                <div className="footer">
                    <div className="Copy"><span className="cright">&copy;</span>Yash Soni 2022</div>
                    <div className="social">
                        <FaLinkedinIn className='hover' onClick={() => window.open('https://www.linkedin.com/in/yash-simejiya-8288a6225/')} />
                        <FaInstagram className='hover' onClick={() => window.open('https://www.instagram.com/itsyashsimejiya/')}/>
                        <FaGithub className='hover' onClick={() => window.open('https://github.com/Yashsoni23')}/>
                        <FaHackerrank className='hover'onClick={() => window.open(' https://www.hackerrank.com/yashsoni48678')} />
                        <FaTwitter className='hover' onClick={() => window.open('https://twitter.com/YashSon19998199')}/>
                    </div>
                </div>
            </footer>
            </section>

        </>
    )
}

export default Home