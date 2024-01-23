import './header.css';
import LogoImg from '../../assets/images/mettlerTitle.png';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { handleLogout } from '../../slices/thunk';
import { Chip } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import React,{useState} from 'react';
import avatar from '../../assets/images/avatar.png'
import { DropdownItem, DropdownMenu } from 'reactstrap';
import { Logout } from '@mui/icons-material';
import { PasswordRounded } from '@mui/icons-material';
import { FaUserCircle } from 'react-icons/fa';
const Header = () => {
  const [open,setOpen]=useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isLoginPage = location.pathname === '/login';
  const isSecretKeyPage = location.pathname === '/secret-key';
  const { jwt, userType} = useSelector((state: any) => state.Login);
    const username  = useSelector((state: any) => state.Login.userDetails);

  // Check if the current page is neither login nor secret-key
  const showLogoImg = !isLoginPage && !isSecretKeyPage;
  const showAvatar = !isLoginPage && !isSecretKeyPage;
  
  const showHeader = !isLoginPage && !isSecretKeyPage;
  const [anchorEl, setAnchorEl] = useState(null);
  const handleMenuOpen = (event:any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  if (!showHeader) {
    return null; // Do not render the header on login and secret-key pages
  }
  const handleLogoutClick = () => {
    const confirmLogout = window.confirm("Are you sure you want to logout?");
    
    if (confirmLogout) {
      console.log(jwt, username);
      const body = {
        jwt,
        username,
      };
      handleLogout(body, navigate);
      handleMenuClose();
    }
    
  };
function DropDownItem(props:any){
return(
  <li className='dropdownItem'>
   <img src={props.img} alt=''></img>
   <a>{props.text}</a>
  </li>
)
}
  return (
    <div className="row mHeader d-flex justify-content-center align-items-center">
      {showLogoImg && (
        <img src={LogoImg} alt="Logo" className='img-fluid' style={{ width:'200px', height: '25px' }} />
      )}

      {/* {showAvatar && (
        <div className="avatar-container" style={{ right: '20px', zIndex: '1' }}>
          <Chip
      icon={<FontAwesomeIcon icon={faCircleUser} size='2xl' style={{color:'#fff'}} />}
      label="Logout"
      onClick={handleLogoutClick}
      variant="outlined"
      style={{color:'#fff'}}
    />
        </div>
      )} */}
      <div className='menu-container'>
        <div className='menu-trigger' onClick={()=>{setOpen(!open)}}>
          <img src={avatar} alt='avatar'></img>
        </div>
        <div className={`dropdown-menu ${open ?'active':'inactive'}`} >
          <h3>{username}<span>{userType}</span></h3>
          <ul>
            <DropdownItem img={<FaUserCircle/>}>My Profile</DropdownItem>
            <DropdownItem img={<PasswordRounded/>}>Change Password</DropdownItem>
            <DropdownItem img={<Logout/>}>Logout</DropdownItem>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;