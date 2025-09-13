import React from 'react';
import { Link } from 'react-router-dom';
function Footer() {
    return ( 
        <footer  style={{backgroundColor:"#f8f8f8"}}>
        <div className='container border-top mt-5'>
            <div className='row mt-5'>
                <div className='col'>
                    <img src="media/images/logo.svg" style={{width:"50%"}}/>
                    <p>© 2010 - 2025, Zerodha Broking Ltd. All rights reserved.</p>
                </div>
                <div className='col'>
                    <p style={{fontWeight:"550",fontSize:"18px"}}>Company</p>
                    <Link style={{display: "block", textDecoration: "none", color: "#666666", marginBottom: "8px"}} to='/product'>Products</Link> 
                    <Link style={{display: "block", textDecoration: "none", color: "#666666", marginBottom: "8px"}} to='/pricing'>Pricing</Link> 
                    <a style={{display: "block", textDecoration: "none", color: "#666666", marginBottom: "8px"}} href=''>Referral program</a> 
                    <a style={{display: "block", textDecoration: "none", color: "#666666", marginBottom: "8px"}} href=''>Careers</a>        
                    <a style={{display: "block", textDecoration: "none", color: "#666666", marginBottom: "8px"}} href=''>Zerodha.tech</a>     
                    <a style={{display: "block", textDecoration: "none", color: "#666666", marginBottom: "8px"}} href=''>Press & media</a>  
                    <a style={{display: "block", textDecoration: "none", color: "#666666", marginBottom: "8px"}} href=''>Zerodha Cares (CSR)</a>             
                </div>
                <div className='col'>
                    <p style={{fontWeight:"550",fontSize:"18px"}}>Support</p>
                    <a style={{display: "block", textDecoration: "none", color: "#666666", marginBottom: "8px"}} href=''>Contact</a> 
                    <Link style={{display: "block", textDecoration: "none", color: "#666666", marginBottom: "8px"}}  to='/support'>Support portal</Link>  
                    <a style={{display: "block", textDecoration: "none", color: "#666666", marginBottom: "8px"}} href=''>Z-Connect blog</a>  
                    <a style={{display: "block", textDecoration: "none", color: "#666666", marginBottom: "8px"}}  href=''>List of charges</a>             
                    <a style={{display: "block", textDecoration: "none", color: "#666666", marginBottom: "8px"}} href=''>Downloads & Resources</a> 
                </div>
                <div className='col'>
                   <p style={{fontWeight:"550",fontSize:"18px"}}>Account</p>
                   <a style={{display: "block", textDecoration: "none", color: "#666666", marginBottom: "8px"}} href=''>Open an account</a> 
                   <a style={{display: "block", textDecoration: "none", color: "#666666", marginBottom: "8px"}}href=''>Fund transfer</a>             
                   <a style={{display: "block", textDecoration: "none", color: "#666666", marginBottom: "8px"}} href=''>60 day challenge</a>  
                </div>
            </div>
        <div className='mt-5 text-muted fs-10' style={{fontSize:"14px"}}>
            <p>Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; SEBI Registration no.: INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to <a style={{textDecoration:"None"}} href=''>complaints@zerodha.com</a>, for DP related to <a style={{textDecoration:"None"}} href=''>dp@zerodha</a>.com. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF</p>
            <p>Procedure to file a complaint on <a style={{textDecoration:"None"}} href=''>SEBI SCORES</a>: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances</p>
            <p><a style={{textDecoration:"None"}} href=''>Smart Online Dispute Resolution | Grievances Redressal Mechanism</a></p>
            <p>Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.</p>
            <p>India's largest broker based on networth as per NSE. <a style={{textDecoration:"None"}} href=''>NSE broker factsheet</a></p>
            <p>"Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, <a style={{textDecoration:"None"}} href=''>please create a ticket here</a>.</p>
            <div className='d-flex mt-3 mb-3'>
                <Link style={{display: "block", textDecoration: "none", color: "#666666",marginLeft:"100px",fontSize:"14px"}}to='https://www.nseindia.com/'>NSE</Link>
                <Link style={{display: "block", textDecoration: "none", color: "#666666",marginLeft:"50px",fontSize:"14px"}} to='https://www.bseindia.com/'>BSE</Link>
                <Link style={{display: "block", textDecoration: "none", color: "#666666",marginLeft:"50px",fontSize:"14px"}} to='https://www.mcxindia.com/'>MCX</Link>
                <Link style={{display: "block", textDecoration: "none", color: "#666666",marginLeft:"50px",fontSize:"14px"}} to='/terms-and-conditions'>Terms & conditions</Link>
                <Link style={{display: "block", textDecoration: "none", color: "#666666",marginLeft:"50px",fontSize:"14px"}} to='/policies-and-procedures'>Policies & procedures</Link>
                <Link style={{display: "block", textDecoration: "none", color: "#666666",marginLeft:"50px",fontSize:"14px"}} to='/privacy-policy'>Privacy policy</Link>
                <Link style={{display: "block", textDecoration: "none", color: "#666666",marginLeft:"50px",fontSize:"14px"}} to='/disclosure'>Disclosure</Link>
                <Link style={{display: "block", textDecoration: "none", color: "#666666",marginLeft:"50px",fontSize:"14px"}} to='/investor-attention'>For investor's attention</Link>
                <Link style={{display: "block", textDecoration: "none", color: "#666666",marginLeft:"50px",fontSize:"14px"}} to='/investor-charter'>Investor charter</Link>
            </div>
        </div>
    </div>
    </footer>
 );
}

export default Footer;