import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Global, css } from "@emotion/react";
import { resetCssStyles } from "./styles";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<Global
			styles={css`
				${resetCssStyles}
			`}
		/>
		<App />
	</React.StrictMode>
);
