import styled from "@emotion/styled";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	position: relative;
	background-color: #373b69;
	width: 300px;
`;

export const PosterImage = styled.img``;

export const Info = styled.div`
	display: flex;
	align-items: center;
	gap: 10px;
	padding: 16px;
	height: 90px;
`;

export const Title = styled.h3`
	font-size: 16px;
	font-weight: bold;
	color: #ffffff;
`;

export const VoteAverage = styled.span`
	font-size: 16px;
	color: #ffffff;
`;

export const Backdrop = styled.div`
	position: absolute;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.8);
	padding: 20px 14px;
	box-sizing: border-box; // padding으로 인해 박스 사이즈가 넘치는 것을 방지
`;

export const BackdropTitle = styled.h3`
	margin-bottom: 14px;
	font-size: 16px;
	color: gray;
	font-weight: bold;
`;

export const BackdropOverview = styled.p`
	font-size: 16px;
	color: gray;
`;
