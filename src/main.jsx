import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import { ApiProvider } from "./hooks/useAPI";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<ApiProvider>
			<App />
		</ApiProvider>
	</React.StrictMode>
);
