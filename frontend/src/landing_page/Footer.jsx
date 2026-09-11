import React from "react";
import logo from "../assets/images/logo.png";

const Footer = () => {
  return (
    

    <footer className=" border-top bg-light">
    <div className="container ">
      <div className="row mt-5">
        <div className="col-lg-3 col-md-6 col-sm-12">
          <img src={logo} alt="logo" style={{width:"50%"}} />
          <p>&copy; 2010 - 2026, Zerodha Broking Ltd. All rights reserved.</p>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12">
          <p className="fs-5" style={{fontWeight:"600"}}>Company</p>
          
           <ul className="ps-0">
            <li className="mb-3" style={{listStyle:"none"}}>
               <a className="text-muted text-decoration-none " style={{fontSize:"18px",fontWeight:"500"}} href="#">About</a><br></br>
            </li>
            <li className="mb-3" style={{listStyle:"none"}}>
               <a className="text-muted text-decoration-none " style={{fontSize:"18px",fontWeight:"500"}} href="#">Philosophy</a><br></br>
            </li>
            <li className="mb-3" style={{listStyle:"none"}}>
               <a className="text-muted text-decoration-none " style={{fontSize:"18px",fontWeight:"500"}} href="#">Press & media</a><br></br>
            </li>
            <li className="mb-3" style={{listStyle:"none"}}>
               <a className="text-muted text-decoration-none " style={{fontSize:"18px",fontWeight:"500"}} href="#">Careers</a><br></br>
            </li>
            <li className="mb-3" style={{listStyle:"none"}}>
               <a className="text-muted text-decoration-none " style={{fontSize:"18px",fontWeight:"500"}} href="#">Zerodha Cares (CSR)</a><br></br>
            </li>
            <li className="mb-3" style={{listStyle:"none"}}>
               <a className="text-muted text-decoration-none " style={{fontSize:"18px",fontWeight:"500"}} href="#">Zerodha.tech</a><br></br>
            </li>
           </ul>
            
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12">
          <p className="fs-5" style={{fontWeight:"600"}}>Support</p>
          
           <ul className="ps-0">
            <li className="mb-3" style={{listStyle:"none"}}>
               <a className="text-muted text-decoration-none " style={{fontSize:"18px",fontWeight:"500"}} href="#">Contact us</a><br></br>
            </li>
            <li className="mb-3" style={{listStyle:"none"}}>
               <a className="text-muted text-decoration-none " style={{fontSize:"18px",fontWeight:"500"}} href="#">Support portal</a><br></br>
            </li>
            <li className="mb-3" style={{listStyle:"none"}}>
               <a className="text-muted text-decoration-none " style={{fontSize:"18px",fontWeight:"500"}} href="#">How to file a complaint?</a><br></br>
            </li>
            <li className="mb-3" style={{listStyle:"none"}}>
               <a className="text-muted text-decoration-none " style={{fontSize:"18px",fontWeight:"500"}} href="#">Z-Connect blog</a><br></br>
            </li>
            <li className="mb-3" style={{listStyle:"none"}}>
               <a className="text-muted text-decoration-none " style={{fontSize:"18px",fontWeight:"500"}} href="#">Downloads</a><br></br>
            </li>
            
           </ul>
            
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12">
          <p className="fs-5" style={{fontWeight:"600"}}>Account</p>
          
           <ul className="ps-0">
            <li className="mb-3" style={{listStyle:"none"}}>
               <a className="text-muted text-decoration-none " style={{fontSize:"18px",fontWeight:"500"}} href="#">Open demat account</a><br></br>
            </li>
            <li className="mb-3" style={{listStyle:"none"}}>
               <a className="text-muted text-decoration-none " style={{fontSize:"18px",fontWeight:"500"}} href="#">Fund transfer
</a><br></br>
            </li>
            <li className="mb-3" style={{listStyle:"none"}}>
               <a className="text-muted text-decoration-none " style={{fontSize:"18px",fontWeight:"500"}} href="#">Dematerialisation</a><br></br>
            </li>
           
           </ul>
            
        </div>
        
      </div>
      <div className="row mt-5 mb-5 ">
        <div className="col" style={{fontSize:"14px"}}>
          <p className=" text-muted">Zerodha Broking Ltd.: Member of NSE, BSE, MCX & MSEI – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to complaints@zerodha.com, for DP related to dp@zerodha.com. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF</p>
          <p className=" text-muted">Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances</p>
          <p className=" text-muted">Investments in securities market are subject to market risks; read all the related documents carefully before investing.</p>
          <p className=" text-muted">"Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers/depository participants. Receive information of your transactions directly from Exchange/Depositories on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please create a ticket here.</p>
        </div>
      </div>
    </div>
    </footer>
  );
};

export default Footer;
