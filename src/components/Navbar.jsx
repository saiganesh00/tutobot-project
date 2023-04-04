
import './navbar.scss'
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

const Navbar = () => {
  
  return (
    <div>
        <div className="navbar">
            <div className="navbar-left">
            <span>TutoBot</span>
            </div>
            <div className="navbar-right">
                {/* <span><ListItemIcon /></span>  */}
                {/* <DehazeIcon/> */}
                <ul>
                  <li>
                    <ScrollLink activeClass="active" to="home" spy={true} smooth={true} offset={-70} duration={500}>Home</ScrollLink>
                  </li> 
                  <li>
                    <ScrollLink activeClass="active" to="about" spy={true} smooth={true} offset={-70} duration={500}>About</ScrollLink>
                  </li>
                  <li>
                    <ScrollLink activeClass="active" to="course" spy={true} smooth={true} offset={-70} duration={500}>Courses</ScrollLink>
                  </li>
                  <li>
                    <ScrollLink activeClass="active" to="team" spy={true} smooth={true} offset={-70} duration={500}>Team</ScrollLink>
                  </li>
                  <li>
                    <ScrollLink activeClass="active" to="contact" spy={true} smooth={true} offset={-70} duration={500}>Contact</ScrollLink>
                  </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar
