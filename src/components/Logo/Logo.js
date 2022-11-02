import React from "react";
import Tilt from 'react-parallax-tilt';
import face from './face.png';

const Logo = () => {
    return(
        <div className="ma4 mt0 fl w-thrid">
            <Tilt scale={1.15} transitionSpeed={2500}>
                <img alt="" src={face} width={200} height={200}/>
            </Tilt>                           
        </div>
    );
}

export default Logo