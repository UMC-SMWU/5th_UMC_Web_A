import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { ReactComponent as BannerSVG } from "../img/ad.svg";

const BannerBox = styled.div`
`;

const Banner = styled(BannerSVG)`
  height: 100%;
`;

export default function Ad() {
    
    const [adState, setAdState ] = useState(true);

    const HandleAdOpen = () => { setAdState(adState => true); }
    const HandleAdClose = () => { setAdState(adState => false); }
    const HandleAdDisplay = () => {
        return (
            <div class="add-wrapper">
                {adState? (
                    <BannerBox>
                        <Banner width="100%" alt="AD"/>
                        <button onClick={HandleAdClose}>광고 안 보기</button> 
                    </BannerBox>
                ) : (
                    <BannerBox>
                        <button onClick={HandleAdOpen}>광고 보기</button> 
                    </BannerBox>
                )}
            </div>
        );
    };

  return (
    <div className="ad-container">
        <HandleAdDisplay /> 
    </div>
  );
}