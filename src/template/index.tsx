import React, { useState } from "react";
import ReactDOM from "react-dom/client";

// import "./index.css";

const App = () => {
	const [count, setCount] = useState(0);
	return <button onClick={() => setCount(count + 1)}>count: {count}</button>;
};

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
