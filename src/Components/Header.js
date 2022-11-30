import React ,{useState}from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars } from "react-icons/fa";
import { GrClose } from "react-icons/gr";
// import "./Comman.js";
import './Header.css';

const Header = () => {
  const [showMenu, setshowMenu] = useState(false);
  const [showMenu1, setshowMenu1] = useState(false);
  
  
  return (
     

    <>
    
      <div className= "Navbar " id='Navbar' >
      <div className="Logo">
                        <h1 id='logo' onClick={()=>window.open('https://yashsoni32.netlify.app/')}>Yash soni</h1>
                    </div>
           {window.innerWidth > 500 ? <div className="NavItems " id='NavItems' >
              <li><NavLink to='/' className="NavLink " >Home</NavLink></li>
              <li><NavLink to='/About' className="NavLink" >About</NavLink></li>
              <li><NavLink to='/Projects' className="NavLink" >Projects</NavLink></li>
              <li><NavLink to='/Sketches' className="NavLink" >Sketches</NavLink></li>
              <li><NavLink to='/Contact' className="NavLink" >Say Hi!</NavLink></li>
        </div>:showMenu && <div className=" NavItems" id='NavItems' >
              <li><NavLink to='/' className="NavLink" >Home</NavLink></li>
              <li><NavLink to='/About' className="NavLink" >About</NavLink></li>
              <li><NavLink to='/Projects' className="NavLink" >Projects</NavLink></li>
              <li><NavLink to='/Sketches' className="NavLink" >Sketches</NavLink></li>
              <li><NavLink to='/Contact' className="NavLink" >Say Hi!</NavLink></li>
        </div>}
        
        <div className="Btn">
          <FaBars className='bars' onClick={window.innerWidth < 500? ()=>{setshowMenu(!showMenu)  }:()=>{ setshowMenu1(!showMenu1);} }   id="bar" />
          <GrClose className='close'/>
        </div>
      </div>

    </>
  )
}

export default Header
