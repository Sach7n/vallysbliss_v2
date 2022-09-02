import React from 'react';
import "./About.css"


const About = () => {  
    return (
        <div id="about" className='main_about'>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
        
            <div className="inner_about">
            <div className='info'>
                <div className='get_connected'>
                    <p>Lets get started</p>
                    <h1>Contact Us</h1>
                    <a href="tel:+918000957080">+91 8000957080</a>
                    <div className='mob_direction'>
                    <a target="_blank" rel="noreferrer"  href="https://goo.gl/maps/m2gToTzchvkqbhU56"><p>8/A Navjivan Colony, St. Xaviers Road, Padharia, Anand</p></a>
                    </div>
                    <ul className='media_list'>
                        <li><a href={'mailto:ridetheblissofgrace@gmail.com'} class="envelope"><i class="fa fa-envelope fa-2x"></i></a></li> 
                        <li><a target="_blank" rel="noreferrer" href="https://m.facebook.com/theperfectbliss/" class="linkedin"><i class="fa fa-facebook fa-2x"></i></a></li>
                        <li><a target="_blank" rel="noreferrer" href="https://www.instagram.com/vallys.bliss/?igshid=YmMyMTA2M2Y%3D" class="github"><i class="fa fa-instagram fa-2x"></i></a></li>
                    </ul>
                </div>
                <div className='direction'>
                    <h1>Where ?</h1>
                    <h4>8/A Navjivan Colony, St. Xaviers Road, Padharia, Anand</h4>
                    <a target="_blank" rel="noreferrer" href="https://goo.gl/maps/m2gToTzchvkqbhU56">Directions</a>
                </div>
            </div>       
            <div className='name_r'>
          <p>made with &hearts; by <a target="_blank" rel="noreferrer" href="https://instagram.com/sach7n?igshid=YmMyMTA2M2Y=">Sachin Macwan</a></p>
        </div> 
            </div>
        </div>
  
    );
};

export default About;