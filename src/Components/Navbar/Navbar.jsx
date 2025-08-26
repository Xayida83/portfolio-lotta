import React, { useRef, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.svg'
import underline from '../../assets/nav_underline.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  }
  
  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  }

  const handleLinkClick = (menuItem) => {
    setMenu(menuItem);
    closeMenu();
  }

  const handleKeyPress = (e, action) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      action();
    }
  }

  return (
    <nav className='navbar' role="navigation" aria-label="Main navigation">
      <img src={logo} alt="Portfolio logo" /> 
      <button 
        onClick={openMenu}
        onKeyPress={(e) => handleKeyPress(e, openMenu)}
        className='nav-mob-open'
        aria-label="Open menu"
        aria-expanded={menuRef.current?.style.right === "0"}
      >
        <img src={menu_open} alt="" aria-hidden="true"/>
      </button>
      <ul ref={menuRef} className="nav-menu" role="menubar">
        <button 
          onClick={closeMenu}
          onKeyPress={(e) => handleKeyPress(e, closeMenu)}
          className='nav-mob-close'
          aria-label="Close menu"
        >
          <img src={menu_close} alt="" aria-hidden="true"/>
        </button>
        <li role="none">
          <AnchorLink 
            className='anchor-link' 
            offset={50} 
            href='#home'
            role="menuitem"
            aria-current={menu === "home" ? "page" : undefined}
          >
            <p onClick={() => handleLinkClick("home")}>Home</p>
          </AnchorLink>
          <img src={underline} alt="" aria-hidden="true"/>
        </li>
        <li role="none">
          <AnchorLink 
            className='anchor-link' 
            offset={50} 
            href='#about'
            role="menuitem"
            aria-current={menu === "about" ? "page" : undefined}
          >
            <p onClick={() => handleLinkClick("about")}>About Me</p>
          </AnchorLink>
          <img src={underline} alt="" aria-hidden="true"/>
        </li>
        {/* <li>
          <AnchorLink className='anchor-link' offset={50} href='#services'><p onClick={()=>setMenu("services")}>Services</p></AnchorLink>{menu==="services"?<img src={underline}/>:<></>}
        </li> */}
        <li role="none">
          <AnchorLink 
            className='anchor-link' 
            offset={50} 
            href='#thesis'
            role="menuitem"
            aria-current={menu === "thesis" ? "page" : undefined}
          >
            <p onClick={() => handleLinkClick("thesis")}>Thesis</p>
          </AnchorLink>
          <img src={underline} alt="" aria-hidden="true"/>
        </li>
        <li role="none">
          <AnchorLink 
            className='anchor-link' 
            offset={50} 
            href='#work'
            role="menuitem"
            aria-current={menu === "work" ? "page" : undefined}
          >
            <p onClick={() => handleLinkClick("work")}>Portfolio</p>
          </AnchorLink>
          <img src={underline} alt="" aria-hidden="true"/>
        </li>
        
        <li role="none">
          <AnchorLink 
            className='anchor-link' 
            offset={50} 
            href='#contact'
            role="menuitem"
            aria-current={menu === "contact" ? "page" : undefined}
          >
            <p onClick={() => handleLinkClick("contact")}>Contact</p>
          </AnchorLink>
          <img src={underline} alt="" aria-hidden="true"/>
        </li>
      </ul>
      {/* <div className="nav-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With me</AnchorLink></div>  */}
    </nav>
  )
}

export default Navbar

// import React from 'react'
// import './Navbar.css'
// import logo from '../../assets/logo.svg'
// import underline from '../../assets/nav_underline.svg'


// const Navbar = () => {
//   const [menu,setMenu] = useState("home");
//   return (
//     <div className='navbar'>
//       <img src={logo} alt=""/> 
//       <ul className="nav-menu">
//         <li><p>Home</p>{menu==="home"?<img src={underline}/>:<></>}</li>
//         <li><p>About Me</p>{menu==="home"?<img src={underline}/>:<></>}</li>
//         <li><p>Services</p>{menu==="home"?<img src={underline}/>:<></>}</li>
//         <li><p>Portfolio</p>{menu==="home"?<img src={underline}/>:<></>}</li>
//         <li><p>Contact</p>{menu==="home"?<img src={underline}/>:<></>}</li>
//       </ul>
//       <div className="nav-connect">Connect With me</div>
//     </div>
//   )
// }

// export default Navbar