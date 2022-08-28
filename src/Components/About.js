import React from 'react'
import Footer from './Footer'
import Header from './Header'
const About = () => {
    return (
        <>
            <Header />
            <section className="About1" >

                <div className="DivContainer">
                    <div className="ImageOuterBox">
                        <div className="ImageInnerBox ImageInnerBox_About">
                        </div>
                    </div>
                    <div className="AboutOuterContainer">
                        <div className="AboutInnerContainer">
                            <article className="article"><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className='span'>Hey</span> !! I'm Yash.I am currently doing My BCA from SilverOak University.I have much curious about To learn new technology and build something which are fix some problem,so that I trying to shape my career in IT industry. <br />
                                <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                All tech fields are super attactive but in some of them especially my favourites are Competative Coding,Machine Learning,Data Science and ios Development. <br /><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                With this The Curiousity can't calm me down, I always make new sketches and spend a few of my hours when I want to reconnect.Some sketches i have added to this website, on Sketches Section so you must be check it out.<br /><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                So it's all About me if you have any question or suggestion to ask me via drop massage in Contact form or E-mail. <br />
                                <span className="Greets">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Have a Nice Day!!</span>

                            </article>
                        </div>
                    </div>
                </div>

            
                <div className="SkillBox_About SkillBox">
                    <div className="skillset progress-10"><div className="overlay">95%</div><div className="SkillName">HTML</div></div>
                    <div className="skillset progress-11"><div className="overlay">92%</div><div className="SkillName">CSS</div></div>
                    <div className="skillset progress-12"><div className="overlay">60%</div><div className="SkillName">JS</div></div>
                    <div className="skillset progress-13"><div className="overlay">75%</div><div className="SkillName">J-QUERY</div></div>
                    <div className="skillset progress-14"><div className="overlay">80%</div><div className="SkillName">C</div></div>
                    <div className="skillset progress-15"><div className="overlay">75%</div><div className="SkillName">C++</div></div>
                    <div className="skillset progress-16"><div className="overlay">64%</div><div className="SkillName">REACTJS</div></div>
                    <div className="skillset progress-17"><div className="overlay">50%</div><div className="SkillName">NEXTJS</div></div>
                    <div className="skillset progress-18"><div className="overlay">50%</div><div className="SkillName">PHP</div></div>

                    </div>
                <div className="Resume_container">
                    <button className='two_btn' >My Resume</button>
                    <button className='two_btn'> Linked In Profile</button>
                </div>
                <Footer />
                
            </section>
        </>
    )
}

export default About