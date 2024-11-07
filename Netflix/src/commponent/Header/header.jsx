import React from 'react'
import "./header.css";
import NetflixLogo from '../../assets/Images/netflix-logo.png';
import NotificationIcon from '@mui/icons-material/NotificationsNoneOutlined';
import SearchIcon from '@mui/icons-material/SearchOutlined';
import AccountBoxIcon from '@mui/icons-material/AccountBoxOutlined';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDownOutlined';


const header = () => {
  return (
    <div className='header-outer-container'>
      <div className='header-container'>
        <div className="header-left">
          <ul>
            <li><img src={NetflixLogo} alt=" " /></li>
            <li>Home</li>
            <li>TvShows</li>
            <li>Movies</li>
            <li>Latest</li>
            <li>MyList</li>
            <li>Browse by Languages</li>
          </ul>
        </div>

        <div className='header-right'>
          <ul>
            <li> < NotificationIcon /></li>
            <li> <SearchIcon /></li>
            <li><AccountBoxIcon /></li>
            <li><ArrowDropDownIcon /></li>


          </ul>
        </div>
      </div>
    </div>
  )
}

export default header
