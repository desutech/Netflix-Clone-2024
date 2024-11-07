import React from 'react'
import FacebookIcon from "@mui/icons-material/FacebookOutlined";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";

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
        <div >
          <div>
            <ul>
              <li>Audio Descriptions</li>
              <li>Investor Relations</li>
              <li>Legal Notices</li>
              <li>Service Code</li>
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
    </div>
  )
}

export default footer
