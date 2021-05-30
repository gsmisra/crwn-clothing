import React from 'react';
import './header-styles.scss';
import { Link } from 'react-router-dom'; 
import { ReactComponent as Logo} from  '../../assets/crown.svg';


const HeaderComponent = () => (

    <div className='header'>
        <Link className='logo-container' to="/">
            <Logo className='logo'></Logo>
        </Link>
        <div className='options'>
            <Link className='options' to='/shop'>
                SHOP
            </Link>
            <Link className='options' to='/contact'>
                CONTACT
            </Link>
        </div>
    </div>
)


export default HeaderComponent;