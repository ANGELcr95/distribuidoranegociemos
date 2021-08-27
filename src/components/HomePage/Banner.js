import "../../Styles/HomePageStyle/Banner.css"
import React, { useState } from 'react';
import BannerInfo from "./BannerInfo";

const Banner = () => {

    const[infoBanner, setInfoBanner] = useState([1,2,3,4,5])
    
    // const BannerSlice = infoBanner.map(infoBannerdata => <BannerInfo key={infoBannerdata} infoBannerdata={infoBannerdata}/>)

    const pageNumberImages = []

    for (let i = 0; i < infoBanner.length; i++) {
        pageNumberImages.push(i)  
    }  

    const renderPagesNumbers = pageNumberImages.map(number => {
        return(
            <button key={number} id={number}>
            </button>
        )
    })
    return (
        <div className="Banner">
            <BannerInfo/>
            <div className="RedenderPageNumbers">
            {renderPagesNumbers}
            </div>
            {/* <ul className="pageNumbers">
            <li>
                <button>
                    Prev
                </button>
            </li>

            <li>
                <button>   
                    Next
                </button>
            </li>
            </ul> */}
        </div>
    );
};

export default Banner;