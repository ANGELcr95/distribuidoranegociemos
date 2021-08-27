import "../../Styles/HomePageStyle/BannerInfo.css"
import React from 'react';


const BannerInfo = (infoBannerdata) => {
    return (
        <div className="BannerInfo">
            <div className="DescriptionBanner">
                <h3>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h3>
                <p>
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                </p>
                <button>Comprar ahora</button>
            </div>
            <div className="ImgBanner">
                hola
                {/* <img src={infoBannerdata.url} alt="ImgBanner"></img> */}
            </div>
        </div>
    );
};

export default BannerInfo;