import React from 'react'
import FacebookIcon from "@mui/icons-material/FacebookOutlined";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import './footer.css'
const footer = () => {
  return (
    <div className="footer-outer-container">
      <div className="footer-inner-container">
        <div className='footer-icons'>
          <ul>
            <li>
              <FacebookIcon />
            </li>
            <li>
              <InstagramIcon />

            </li>
            <li>
              <YouTubeIcon />
            </li>
          </ul>
        </div>
        <div className='content-box'>
          <div>
            <ul>
              <li>Audio Descriptions</li>
              <li>Investor Relations</li>
              <li>Legal Notices</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Help Centre</li>
              <li>Jobs</li>
              <li>Cookies Preferences</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Gift Cards</li>
              <li>Terms of Use
              </li>
              <li>Corporate Information</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Media Centre</li>
              <li>Privacy</li>
              <li>Contact Us
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='server-code'>
        <ul>
          <li>Service Code</li>
        </ul>
      </div>
      <div className='copy-right'>
        <ul>
          <li> ©1997-2024 Netflix, Inc</li>
        </ul>
      </div>
    </div>
  )
}

export default footer
