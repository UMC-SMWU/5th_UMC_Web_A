import React from "react";
import { useLocation, useParams } from "react-router-dom";
import { TMDB_IMAGE_BASE_URL } from "../database";

const MovieDetailPage = () => {
	const { title } = useParams();
	const { state } = useLocation();

	return (
		<div className="page-container">
			<div style={{ display: "flex" }}>
				<img
					style={{ width: "300px", height: "450px" }}
					src={TMDB_IMAGE_BASE_URL + state.posterPath}
					alt="영화 포스터 이미지"
				/>
				<div>
					<div>{title}</div>
				</div>
			</div>
		</div>
	);
};

export default MovieDetailPage;
