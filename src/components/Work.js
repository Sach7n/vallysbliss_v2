import React from 'react';
import {work} from "../components/images_1"
import "./Work.css"


const Work = () => {
    return (
        <div className='main_work'>
            {/* <h1>Work</h1>*/}
            <div  className="inner_work">
            {work && work.map((item,key)=>
                <div id="work"  className='event_container' key={key}>
                    <div  className='event_image'>
                        <img className='image_mob' src={item.image} />
                    </div>
                    <div className='overlay1' />
                    <div className='event_desc'>
                        <h2 className="title_r">{item.title}</h2>
                        <div><p>{item.desc}</p></div>
                    </div>
                </div>
                )}

            </div>
        </div>

    );
};

export default Work;