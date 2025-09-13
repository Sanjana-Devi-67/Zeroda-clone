import React from 'react';
function Universe() {
    return ( 
        <div className="container mt-5">
            <div className="row mt-5">
                <h3 className="mt-5" style={{color:"#424242",marginLeft:"500px"}}>The Zerodha Universe</h3>
                <p className="mt-3 mb-5" style={{textAlign:"center",color:"#424242",fontSize:"18px"}}>Extend your trading and investment experience even further with our partner platforms</p>
           
            <div className="col-4 p-4 text-center">
                <img src="/media/images/smallcaseLogo.png" />
                <p className='mt-2 text-muted text-small'>Thematic investing platform <br/> that helps you invest in diversified <br/> baskets of stocks on ETFs.</p>
            </div>
            <div className="col-4 p-3 text-center">
                <img style={{width:"40%"}} src="/media/images/streakLogo.png" />
                <p className='mt-2 text-muted text-center text-small'>Systematic trading platform <br/> that allows you to create and backtest <br/> strategies without coding.</p>
            </div>
            <div className="col-4 p-3 mt-2 text-center">
                <img style={{width:"50%"}} src="/media/images/sensibullLogo.svg" />
                <p className='mt-3 text-muted text-small'>Options trading platform that lets you<br/> create strategies, analyze positions, and examine <br/>data points like open interest, FII/DII, and more.</p>
            </div>
            <div className="col-4 p-4 text-center">
                <img style={{width:"60%"}} src="/media/images/zerodhaFundhouse.png" />
                <p className='mt-2 text-muted text-small'>Our asset management venture <br/> that is creating simple and transparent index <br/> funds to help you save for your goals.</p>
            </div>
            <div className="col-4 p-3 mt-2 text-center">
                <img  src="/media/images/goldenpiLogo.png" />
                <p className='mt-2 text-muted text-center text-small'>Investment research platform<br/>  that offers detailed insights on stocks, sectors, <br/> supply chains, and more.</p>
            </div>
            <div className="col-4 p-3 text-center">
                <img style={{width:"28%"}}  src="/media/images/dittoLogo.png" />
                <p className='mt-3 text-muted text-small'>Personalized advice on life<br/>  and health insurance. No spam<br/> and no mis-selling. Sign up for free.</p>
            </div>
            <button className="btn btn-primary mt-3 mb-5" style={{width:"17%",marginLeft:"550px"}}>Sign up for free</button>
        </div>
      </div>
     );
}

export default Universe;