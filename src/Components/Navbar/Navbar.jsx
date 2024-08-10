import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.svg'
import underline from '../../assets/nav_underline.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Navbar = () => {
  
    const [menu,setMenu] = useState("home");
  return (
    <div className='navbar'>
      <img src={logo} alt=""/> 
      <ul className="nav-menu">
      <li><AnchorLink className='anchor-link' offset={50} href='#home'><p onClick={()=>setMenu("home")}>Home</p></AnchorLink>{menu==="home"?<img src={underline}/>:<></>}</li>
      <li><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={()=>setMenu("about")}>About Me</p></AnchorLink>{menu==="about"?<img src={underline}/>:<></>}</li>
      <li><AnchorLink className='anchor-link' offset={50} href='#services'><p onClick={()=>setMenu("services")}>Services</p></AnchorLink>{menu==="services"?<img src={underline}/>:<></>}</li>
      <li><AnchorLink className='anchor-link' offset={50} href='#work'><p onClick={()=>setMenu("work")}>Portfolio</p></AnchorLink>{menu==="work"?<img src={underline}/>:<></>}</li>
      <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={()=>setMenu("contact")}>Contact</p></AnchorLink>{menu==="contact"?<img src={underline}/>:<></>}</li>
      </ul>
      <div className="nav-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With me</AnchorLink></div>
    </div>
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