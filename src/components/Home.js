import React, { useState, useEffect } from 'react';
import { main_background, strip, work, bridal } from "./images_1"
import "./home.css"

const Home = () => {
    const [theme, setTheme] = useState(main_background[0])
    const [mobCard, setmobCard] = useState(work[0])
    let i =0 ,j = 0;
    function two() {
        let l = main_background.length - 1;
        let d = work.length - 1;
        setInterval(() => {
            while (true) {
                if (i >= l) i = -1;
                i += 1;
                if (j >= d) j = -1;
                j += 1;
                setTheme(main_background[i])
                setmobCard(work[j])
                break;
            }

        }, 10000)
        console.log(mobCard)
    }
    useEffect(() => {
        two();
    }, []);

    return (
        <div id="home" className='main_home'>

            <div className="inner_home">
                {/*   <div className='logo'>
                            <img className='logo_img' src={logo} />
                        </div>
                    */}
                <div className='image_container'>
                    <div className='image_1'>
                        <img className='image_m' src={theme} />
                        <div className='overlay' />

                    </div>
                </div>

                {/*       <div className='text'>
                            <p className='p-h'>Welcome to</p>
                                <p className='p-mobile1'>Vallys Bliss</p>
                                <p className='p-h'>Welcome to</p>
                                <p className='p-h1'>Vally's Bliss</p>
                                <p className='p-h2'>where we plan your moments</p>
                                <p className='p-mobile2'>We plan your momemnts here</p>    
                            </div>*/}
                <div className='strip'>
                    {strip && strip.map(({ key, image, desc }) => {

                        return (
                            <div className='strip_image_cont' key={key}>
                                <img className='image_2' src={image} />
                                <p className='strip_desc_p'>{desc}</p>

                            </div>);
                    })}

                </div>

                <div className='card_mobile'>
                            <div className='card_mobile_cont' >
                                <img className='image_3' src={mobCard.image} />
                                <p className='card_mobile_p'>{mobCard.title}</p>
                            </div>

                </div>                
            </div>

        </div>
    );
}


export default Home;