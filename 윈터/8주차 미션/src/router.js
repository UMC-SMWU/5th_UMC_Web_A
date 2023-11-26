import { createBrowserRouter } from "react-router-dom";
import { LoginPage, SearchWeatherPage } from "./pages";

const router = createBrowserRouter([
	{
		path: "/",
		element: <div>home page</div>,
	},
	{
		path: "/weather/search",
		element: <SearchWeatherPage />,
	},
	{
		path: "/login",
		element: <LoginPage />,
	},
]);

export default router;
