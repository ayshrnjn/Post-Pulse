import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();

    return (
        <>
            <div className='navbar'>
                <div className="logo">
                    <img src="/postpulse-logo.png" alt="PostPulse Logo" className="logo-img" />
                    <span>PostPulse</span>
                </div>
                <div className='nav-link'>
                    <div onClick={() => navigate('/')}>Home</div>
                    <div onClick={() => navigate('/about')}>About</div>
                    <div>Contact Us</div>
                </div>
            </div>
        </>
    )
};

export default Navbar;