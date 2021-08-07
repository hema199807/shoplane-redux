import React, {useState} from 'react';
import './banner.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import img1 from "./asserts/img1.png";
import img2 from "./asserts/img2.png";
import img3 from "./asserts/img3.png";
import img4 from "./asserts/img4.png";
import icon1 from "./asserts/icon1.png";
import icon2 from "./asserts/icon2.png";
import icon3 from "./asserts/icon3.png";
import icon4 from "./asserts/icon4.png";


const Banner = (props) => {
    const {searchValue, handleSearchValue}= props;

    return ( 
        <div>
            <div id="search-div">
                <input type="text" onChange={(e)=>handleSearchValue(e.target.value)} value={searchValue} placeholder="Search Brand or Name"/>
                <i className="fas fa-search" id="search-icon"></i>
            </div>
            {searchValue === "" ?
            <>
            <Carousel showThumbs={false} autoPlay={true} infiniteLoop={true}>
                <div>
                    <img src= {img1} alt="No Image, Sorry for the Inconvinience" style={{width:'100%',height:'350px',margin:'auto'}}/>
                </div>
                <div>
                    <img src={img2} alt="No Image, Sorry for the Inconvinience" style={{width:'100%',height:'350px',margin:'auto'}}/>
                </div>
                <div>
                    <img src={img3} alt="No Image, Sorry for the Inconvinience" style={{width:'100%',height:'350px',margin:'auto'}}/>
                </div>
                <div>
                    <img src={img4} alt="No Image, Sorry for the Inconvinience" style={{width:'100%',height:'350px',margin:'auto'}}/>
                </div>
            </Carousel>
            <div id="features">
                <div className="icon-container">
                    <div className="img-wrapper">
                        <img src={icon1} alt="free delivery icon" />
                    </div>
                    <h4>Free Delivery</h4>
                </div>
      
                <div className="icon-container">
                    <div className="img-wrapper">
                        <img src={icon2} alt="money back gurantee icon" />
                    </div>
                    <h4>Money Back Gurantee</h4>
                </div>
    
                <div className="icon-container">
                    <div className="img-wrapper">
                        <img src={icon3} alt="always support icon" />
                    </div>
                    <h4>Always Support</h4>
                </div>
     
                <div className="icon-container">
                    <div className="img-wrapper">
                        <img src={icon4} alt="secure payment icon" />
                    </div>
                    <h4>Secure Payment</h4>
                </div>
            </div>
            </>: "" }
        </div>
        
    );
}
 
export default Banner;