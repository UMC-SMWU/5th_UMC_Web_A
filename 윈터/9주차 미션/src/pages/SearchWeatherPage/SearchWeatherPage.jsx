import { useState } from "react";
import styled from "@emotion/styled";
import axios from "axios";

function SearchWeatherPage() {
	const API_KEY = "0b9db69a6e81e77bb9d01f844366e14f";
	const [location, setLocation] = useState("");
	const [result, setResult] = useState({});
	const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}
  `;

	const searchWeather = async (e) => {
		if (e.key === "Enter") {
			try {
				const data = await axios({
					method: "get",
					url: url,
				});
				setResult(data);
			} catch (err) {
				alert(err);
			}
		}
	};

	return (
		<AppWrap>
			<div className="appContentWrap">
				<input
					placeholder="도시를 입력하세요"
					value={location}
					onChange={(e) => setLocation(e.target.value)}
					type="text"
					onKeyDown={searchWeather}
				/>
				{Object.keys(result).length !== 0 && (
					<ResultWrap>
						<div className="city">{result.data.name}</div>
						{/* 화씨온도 */}
						{/* <div className="temperature">{result.data.main.temp}℉</div> */}
						{/* 섭씨온도 */}
						<div className="temperature">
							{Math.round((result.data.main.temp - 273.15) * 10) / 10}°C
						</div>
						<div className="sky">{result.data.weather[0].main}</div>
					</ResultWrap>
				)}
			</div>
		</AppWrap>
	);
}

export default SearchWeatherPage;

const AppWrap = styled.div`
	width: 100vw;
	height: 100vh;

	.appContentWrap {
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%); // 가운데 정렬
		position: absolute;
		border-radius: 20px;
		padding: 20px;
	}
	input {
		padding: 16px;
		border: 2px black solid;
		border-radius: 16px;
	}
`;

const ResultWrap = styled.div`
	margin-top: 60px;
	padding: 10px;
	border: 1px black solid;
	border-radius: 8px;
	.city {
		font-size: 24px;
	}
	.temperature {
		font-size: 60px;
		margin-top: 8px;
	}
	.sky {
		font-size: 20px;
		text-align: right;
		margin-top: 8px;
	}
`;
