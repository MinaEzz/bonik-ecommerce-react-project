import React from 'react'
import "../css/Header.css"
// mui icons 
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';
// bootstrap
import { Navbar, Container} from 'react-bootstrap';
// router dom
import { Link } from 'react-router-dom';
// import { HashLink} from 'react-router-hash-link';


function Header() {
  return (
    <>
    <header id='header'>
      <Container>
        <div className="row">
        <div className='left col col-md-4 col-7'>
        <div className="phone">
        <PhoneIcon className='icon'></PhoneIcon> <label>+88012 3456 7894</label>
        </div>
        <div className="mail">
        <EmailIcon className='icon'></EmailIcon> <label>support@ui-lib.com</label>
        </div>
      </div>
      <div className='right col col-md-2 col-4'>
        <Link to={""}>Theme FAQ"s</Link>
        <Link to={""}>Need Help?</Link>
      </div>
        </div>
      </Container>
    </header> 
     {/* ./header */}
    <Navbar id='navbar' expand="lg" sticky="top">
      <Container className='d-flex flex-column align-items-end'>
        <div className="row">
          <div className="logo col col-md-2 col-12">
          <Navbar.Brand href="/">
            <img src="Assets/logo.svg" alt="bonik logo" draggable={false} />
          </Navbar.Brand>
          </div>
          <div className="col col-md-7 col-7 ">
            <div className="search-box">
              <SearchIcon></SearchIcon>
              <input type="text" placeholder='search' />
            </div>
          </div>
          <div className="col col-md-3 col-5 ">
            <div className="nav-icons ">
              <PersonIcon></PersonIcon>
              <ShoppingBagIcon></ShoppingBagIcon>
            </div>
          </div>
        </div>
      </Container>
    </Navbar>
    {/* ./Navbar */}
    </>
  )
}

export default Header
