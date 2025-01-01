import React from 'react'
import './HomeBanner.css'
import homeBannerProduct from'../../../homeProduct.json'
const HomeBanner = () => {
  return (
    <div className="Banner">
      <img
        id="backgroundImg"
        src="https://images-eu.ssl-images-amazon.com/images/G/31/IN-Events/Arundhati/NY25_GW_PC_Hero_2x_v2._CB538444218_.jpg"
        alt=""
      />
      <div className="grayBackGroundBanner"></div>
    
      <div className="homeBannerItemDiv">
        {
        homeBannerProduct.product.map((item)=>{
            console.log(item);
            return (
              <div className="homeBannerItemCard">
                <div className="homeBannerTitle">{item.itemTitle}</div>
                <div className="imgHomeBannerItemDivCard">
                    {item.imgs.map((it)=>{
                        return (
                          <div className="imgBannerHomeDiv">
                            <img src={it} alt="" />
                            <div>boat Stone 1800 Bluet</div>
                          </div>
                        );
                    })
                    }

                </div>
              </div>
            );
        })
       
        }
      </div>
    </div>
  );
}

export default HomeBanner
