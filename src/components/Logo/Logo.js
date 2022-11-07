import React from "react";
import Tilt from 'react-parallax-tilt';
import face from './face.png';

const Logo = () => {
    return(
        <div className="ma4 mt0">
            <Tilt className="br2 shadow-2" options={{ max : 55 }} style={{ height: 150, width: 150 }}>
                <div className="pa3">
                    <img style={{paddingTop: '5px'}} alt="" src={face} height={100} width={100} />
                </div>
            </Tilt>                           
        </div>
    );
}

export default Logo