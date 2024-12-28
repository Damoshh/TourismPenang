import React from 'react'
import "./Footer.css";

const Footer = () => {  return (
    <div className='footer'>
        <div className='top'>
            <div>
                <h2>TOURISM PENANG.</h2>
                <p>Choose your destination</p>
            </div>
            <div>
                <a href>
                    <i className='fa-brands fa-facebook-square'></i>
                </a>
                <a>
                    <i className='fa-brands fa-instagram-square'></i>
                </a>
                <a>
                    <i className='fa-brands fa-square-x-twitter'></i>
                </a>
            </div>
        </div>

        <div className='bottom'>
            <div>
                <h4>Project</h4>
                    <a>Change log</a>
                    <a>Status</a>
                    <a>License</a>
                    <a>All version</a>
            </div>
            <div>
                <h4>Community</h4>
                    <a>Github</a>
                    <a>Issues</a>
                    <a>Project</a>
                    <a>Twitter</a>
            </div>
            <div>
                <h4>Help</h4>
                    <a>Support</a>
                    <a>Troubleshooting</a>
                    <a>Contact Us</a>
            </div>
            <div>
                <h4>Others</h4>
                    <a>Terms of Services</a>
                    <a>Privacy Policy</a>
                    <a>License</a>
            </div>            
        </div>
    </div>
  )
}

export default Footer
