import React from 'react';
import logo from './Images/logo.jpg'

const Header =()=>{
    return(<>
        <div className='header'>
            
            <img className='headerLogo' src={logo} alt='logo'/><h1 className='headerName'>Khaleel's Note</h1>
        </div>
    </>);
}
export default Header;