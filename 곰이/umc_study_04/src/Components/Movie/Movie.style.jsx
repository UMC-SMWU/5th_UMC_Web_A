import styled from "styled-components";

export const Body = styled.body` 
    background-color: rgb(34, 37, 72);
    color: white;
`;
  
export const Card_container = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    margin: 10px 30px 10px 30px;
`;

export const Movie_box = styled.div` 
    position: relative;
    width: 220px;
    height: 400px;
    margin: 10px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
`;

export const Img_box = styled.div`
    height: 300px;
`;

export const Img = styled.img` 
    width: 100%;
    height: 100%;
    object-fit:cover;
`;

export const Info_box = styled.div` 
    height: 100px;
    display: flex;
    border: 20%;
    background-color: rgb(56, 59, 102);
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
`;

export const Title_box = styled.div` 
    width: 190px;
    margin: 15px 10px 10px 10px;
`;

export const Vote_average_box = styled.div` 
    width: 30px;
    margin: 15px 10px 10px 5px;
`;

export const Overview_box = styled.div` 
    position: absolute;
    top: 0;
    background-color: rgba(0, 0, 0, 0.8);
    width: 220px;
    height: 400px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
`;

export const Overview_text = styled.div` 
    font-size: 13px;
    width: 190px;
    height: 370px;
    margin: 30px 15px 15px 15px;
    line-height: 1.3em;
`;

export const Overview_text_p  = styled.p` 
    height: 270px;
    font-size: 13px;
`;