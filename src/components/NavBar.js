// import { useState, useEffect } from "react";
// import { Navbar, Nav, Container } from "react-bootstrap";
// import navIcon1 from '../assets/img/nav-icon1.svg';
// import navIcon2 from '../assets/img/nav-icon2.svg';
// import navIcon3 from '../assets/img/nav-icon3.svg';
// import { HashLink } from 'react-router-hash-link';
// import {
//   BrowserRouter as Router
// } from "react-router-dom";

// export const NavBar = () => {

//   const [activeLink, setActiveLink] = useState('home');
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const onScroll = () => {
//       if (window.scrollY > 50) {
//         setScrolled(true);
//       } else {
//         setScrolled(false);
//       }
//     }

//     window.addEventListener("scroll", onScroll);

//     return () => window.removeEventListener("scroll", onScroll);
//   }, [])

//   const onUpdateActiveLink = (value) => {
//     setActiveLink(value);
//   }

//   return (
//     <Router>
//       <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
//         <Container>
//           <Navbar.Brand href="/">
//           {/* <h1 className="">SSK</h1> */}
//           </Navbar.Brand>
//           <Navbar.Toggle aria-controls="basic-navbar-nav">
//             <span className="navbar-toggler-icon"></span>
//           </Navbar.Toggle>
//           <Navbar.Collapse id="basic-navbar-nav">
//             <Nav className="ms-auto">
//               <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
//               <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
//               <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
//             </Nav>
//             <span className="navbar-text">
//               <div className="social-icon">
//                 <a href="#"><img src={navIcon1} alt="Linkedin" /></a>
//                 <a href="#"><img src={navIcon2} alt="Git" /></a>
//                 <a href="#"><img src={navIcon3} alt="Instagram" /></a>
//               </div>
//               <HashLink to='#connect'>
//                 <button className="vvd"><span>Let’s Connect</span></button>
//               </HashLink>
//             </span>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>
//     </Router>
//   )
// }


import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import navIcon4 from '../assets/img/nav-icon4.svg';
import { HashLink } from 'react-router-hash-link';

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="/">
          {/* <h1 className="">SSK</h1> */}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="http://www.linkedin.com/in/sudhanshu-shekhar-kumar"><img src={navIcon1} alt="LinkedIn" /></a>
              <a href="https://github.com/Sudhanshu3011"><img src={navIcon2} alt="GitHub" /></a>
              <a href="https://www.instagram.com/kr.s_shekhar/"><img src={navIcon3} alt="Instagram" /></a>
              <a href="https://x.com/Sshekhar__11"><img src={navIcon4} alt="Twitter" /></a>
            </div>
            <HashLink to='#connect'>
              <button className="vvd"><span>Let’s Connect</span></button>
            </HashLink>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
