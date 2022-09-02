import React from 'react';
import "./Side-drawer.css"
import { Link } from "react-scroll";

const Sidedrawer = props => {

    let drawerClasses = 'side-drawer'
    if (props.show) {
        drawerClasses = 'side-drawer open'
    }

    return (

        <nav className={drawerClasses} >
            <div className="sidedrawer_items" >
                <ul>
                <li>
                    <Link
                        onClick={props.click}
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
                        onClick={props.click}
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
                        onClick={props.click}
                        activeClass="active"
                        to="about"
                        spy={true}
                        smooth={true}
                        offset={-80}
                        duration={700}>
                        About
                    </Link>
                </li>
                </ul>
            </div>
        </nav>
    )
};

export default Sidedrawer;

