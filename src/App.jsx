import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Login from "./pages/Login";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<div>
				<div className="header text-teal-500">Ecommerce website</div>
				<Login />
			</div>
		</>
	);
}

export default App;
