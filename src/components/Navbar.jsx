import React from 'react';


const Navbar = () => {
    return (
        <>

            <div className='navbar'>
                <div className="logo">
                    <img src="/postpulse-logo.png" alt="PostPulse Logo" className="logo-img" />
                    <span>PostPulse</span>
                </div>



                <div className='nav-link'>

                    <div>
                        Home
                    </div>
                    <div>
                        About
                    </div>
                    <div>
                        Contact Us
                    </div>

                    <div>
                        Log in
                    </div>


                </div>
            </div>
        </>
    )
};



export default Navbar