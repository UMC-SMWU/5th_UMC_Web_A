import React, { useState } from "react";

function Ad() {
	const [isCheck, setCheck] = useState(true);

	return (
		<div>
			{isCheck && <img width="100%" src="/img/banner.svg" alt="광고배너" />}
			<button
				onClick={() => {
					setCheck((e) => !e);
				}}
			>
				{isCheck ? "광고 숨기기" : "광고 보기"}
			</button>
		</div>
	);
}

export default Ad;
