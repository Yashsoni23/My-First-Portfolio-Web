import React from 'react'
import Header from './Header';
import { FaLinkedinIn, FaInstagram, FaTwitter, FaGithub, FaHackerrank } from "react-icons/fa";


const Contact = () => {
    return (
        <>
        <Header/>
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
            <FaLinkedinIn className='hover' />
            <FaInstagram className='hover' />
            <FaGithub className='hover' />
            <FaHackerrank className='hover' />
            <FaTwitter className='hover' />
        </div>
    </div>
</footer>
</section>
        </>

    )
}

export default Contact