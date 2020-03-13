import React from "react";
import Popup from "reactjs-popup";
import favrimg from '../../../img/favrimg.png'
export default () => (
    <Popup trigger={<button> Trigger</button>} position="right center">
        <div>
            <h1>FAVr</h1>
            <h2><a href='https://farvbarter.herokuapp.com/' target='_blank' rel="noopener noreferrer">Deployed</a> || <a href='https://github.com/CeeJtheDay/barterApp' target='_blank' rel="noopener noreferrer">Github</a></h2>
            <img className='img' src={favrimg} alt="favrimg" />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
    </Popup>
);