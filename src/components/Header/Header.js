import React from 'react';
import './Header.css'

function Header(props) {
    return (
        <div className="Header">          
                {props.imgSrc ? <div><img src={props.imgSrc} className={props.class}></img></div> : ''}           
            
                {props.text ? <div>{props.text}</div>: ''}
        </div>
    );
}

export default Header;