import React from 'react'
import { useParams } from 'react-router-dom'
import { useLocation } from 'react-router-dom';
import { IMG_BASE_URL } from '../Components/Movie';

export default function MovieDetail() {
    const { title } = useParams();
    const { state } = useLocation();
    return (
        <div style={{
            display: "flex"
        }} className='page-container'>
            <div >
                <img
                    style={{ width: "300px", height: "450px" }}
                    src={IMG_BASE_URL + state.poster_path} alt="영화 포스터 이미지" />
            </div>
            <div style={{ fontSize: "32px", fontWeight: "bold" }} className='detailtitle'>{title}</div>
        </div >
    )
}
