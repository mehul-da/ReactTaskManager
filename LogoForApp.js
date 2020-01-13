import React from 'react';
import appLogo from '../appLogo.png';


function logo() {
    return (
        <div className = "logoApp">
            <img className = "logo" alt = "" src = {appLogo} style = {{width: 250, height: 200, padding: 30}}/>
        </div>
    )
}


export default logo;

