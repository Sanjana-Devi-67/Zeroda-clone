import React from 'react';
import Hero from './Hero';
import LeftSection from './LeftSection';
import RightSection from './RightSection';
import Universe from './Universe';
function ProductPage() {
    return ( <>
       <Hero />
       <LeftSection imageURL="/media/images/kite.png"
           productName="Kite"
           productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
           tryDemo=""
           learnMore=""
           googlePlay="https://play.google.com/store/apps/details?id=com.zerodha.kite3&pli=1"
           appStore="https://apps.apple.com/in/app/zerodha-kite-trade-invest/id1449453802"
        />
        <RightSection imageURL="/media/images/console.png"
           productName="Console"
           productDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
           learnMore=""
        />
        <LeftSection imageURL="/media/images/coin.png"
           productName="Coin"
           productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
           tryDemo=""
           learnMore=""
           googlePlay="https://play.google.com/store/apps/details?id=com.zerodha.coin"
           appStore="https://apps.apple.com/in/app/coin-by-zerodha-mutual-funds/id1392892554"
        />
         <RightSection imageURL="/media/images/kiteconnect.png"
           productName="Kite Connect API"
           productDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
           learnMore=""
        />
        <LeftSection imageURL="/media/images/varsity.png"
           productName="Varsity mobile"
           productDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
           tryDemo=""
           learnMore=""
           googlePlay="https://play.google.com/store/apps/details?id=com.zerodha.varsity"
           appStore="https://apps.apple.com/in/app/varsity-by-zerodha/id1474610753"
        />
        <h4 className="mt-5 mb-5" style={{textAlign:"center",color:"#424242"}}>Want to know more about our technology stack? Check out the <a href="" style={{textDecoration:"None"}}>Zerodha.tech</a> blog.</h4>
       <Universe />
    </> );
}

export default ProductPage;