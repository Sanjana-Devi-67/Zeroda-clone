import React from 'react';
function Hero() {
    return ( 
        <div className='container text-center p-5 mt-5 mb-5 border-bottom'>
            <h1 style={{color:"#424242",fontSize:"36px"}}>Zerodha Products</h1>
            <h3 style={{color:"#424242",fontSize:"23px",fontWeight:"480"}} className='text-muted mt-3'>Sleek, modern, and intuitive trading platforms</h3>
            <p className='text-muted mt-3 mb-5' style={{fontSize:"18px",fontWeight:"550"}}>Check out our <a style={{textDecoration:"None"}} href='/investments'>investment offerings →</a></p>
        </div>
     );
}

export default Hero;