import React from 'react';
import "./Navbar1.css"
import { logo } from "../images_1"
import { Link} from 'react-scroll'

const Navbar1 = props => {
    return (
        <nav className="main-nav">

            <div className="nav-logo"><img className="logo_svg" src={logo} alt="logo" /></div>

            <div />

            <div className="nav-items">
                <li>
                    <Link
                        activeClass="active"
                        to="home"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}>
                        Home
                    </Link>
                </li>

                <li>
                    <Link
                        activeClass="active"
                        to="work"
                        spy={true}                        
                        smooth={true}
                        duration={500}>
                        Work
                    </Link>
                </li>
                <li>
                    <Link
                        activeClass="active"
                        to="about"
                        spy={true}
                        smooth={true}
                        offset={-80}
                        duration={700}>
                        About
                    </Link>
                </li>
            </div>
        </nav>
    );
};

export default Navbar1;