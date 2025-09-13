import React from 'react';
function RightSection({imageURL,productName,productDescription,tryDemo,learnMore,googlePlay,appStore}) {
    return (   
       <div className='container p-5 '>
         <div className='row'>
            <div className='col-4 p-4 mt-5'>
                <h2 className="fs-3 mt-5" style={{color:"#424242"}}>{productName}</h2>
                <p className="mt-4" style={{fontSize:"17px",color:"#424242"}}>{productDescription}</p>
                <div>
                    <a href={learnMore} style={{textDecoration:"None"}}>Learn More →</a>
                </div>
            </div>
            <div className='col-1'></div>
            <div className='col-7 p-5 '>
                <img  src={imageURL} alt=""></img>
            </div>
         </div>
       </div>
     );
    
}

export default RightSection;