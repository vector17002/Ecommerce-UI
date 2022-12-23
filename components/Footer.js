import React from "react";
import {AiOutlineTwitter} from 'react-icons/ai';
import {AiFillInstagram }  from 'react-icons/ai';


const Footer=()=>{
    return(
        <div className="footer-container">
        <p>2022 Pro Cart All right reserves</p>
        <p className="icons">
        <AiFillInstagram/> 
        <AiOutlineTwitter/> 
        </p>
        </div>
    )
}
export default Footer