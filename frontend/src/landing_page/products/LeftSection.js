import React from 'react';
function LeftSection({imageURL,productName,productDescription,tryDemo,learnMore,googlePlay,appStore}) {
    return ( 
       <div className='container mt-2 p-3'>
         <div className='row'>
            <div className='col-8 p-5 '>
                <img src={imageURL} alt=""></img>
            </div>
            {/* <div className='col-2'></div> */}
            <div className='col-4 p-4 mt-5'>
                <h2 className="fs-3 mt-5" style={{color:"#424242"}}>{productName}</h2>
                <p className="mt-4" style={{fontSize:"17px",color:"#424242"}}>{productDescription}</p>
                <div>
                    <a href={tryDemo} style={{textDecoration:"None"}}>TryDemo →</a>
                    <a href={learnMore} style={{marginLeft:"125px",textDecoration:"None"}}>Learn More →</a>
                </div>
                <div className='mt-3'>
                    <a href={googlePlay} style={{textDecoration:"None"}}><img src="/media/images/googlePlayBadge.svg"/></a>
                    <a href={appStore} style={{marginLeft:"50px",textDecoration:"None"}}><img src="/media/images/appStoreBadge.svg"/></a>
                </div> 
            </div>
         </div>
       </div>
     );
}

export default LeftSection;