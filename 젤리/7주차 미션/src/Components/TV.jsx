import React from 'react'
import { useNavigate } from 'react-router-dom';

export const IMG_BASE_URL = "https://image.tmdb.org/t/p/w1280/";

export default function TV(props) {
    const navigate = useNavigate();
    const onClickMovieItem = () => {
        navigate(`/TV/${props.name}`, {
            state: props,
        });
    };

    return (
        <div className="movie-container" onClick={onClickMovieItem}>
            <img src={IMG_BASE_URL + props.poster_path} alt="티비포스터" />
            <div className="movie-info">
                <h4>{props.name}</h4>
                <span>{props.vote_average}</span>
            </div>
        </div>
    );
}