import React from 'react'
import { FaLinkedinIn, FaInstagram, FaTwitter, FaGithub, FaHackerrank } from "react-icons/fa";


const Footer = () => {
    return (
        <>
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
            <div className="Thanks">Thanks for Visiting!!</div>
        </>
    )
}

export default Footer