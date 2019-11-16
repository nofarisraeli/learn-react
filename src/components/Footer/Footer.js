import React from 'react';
import './Footer.css'

function Footer(props) {
    return (
        <div className="Footer">
            {props.text}
        </div>
    );
}

export default Footer;