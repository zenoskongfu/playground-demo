import { useEffect, useState } from "react";
import "./index.scss";
import { compile, string2url } from "./util";
import iframeFile from "../../template/index.html?raw";
import importMap from "../../template/import-map.json";

const Right = () => {
	const [iframeSrc, setIframeSrc] = useState("");

	useEffect(() => {
		const code = compile();

		const res = iframeFile.replace(
			"{script}",
			`
        <script type="importmap">
          ${JSON.stringify(importMap)}
        </script>
        <script type="module" id="appSrc">
          ${code}
        </script>
      `
		);
		console.log(res);
		setIframeSrc(string2url(res, { type: "text/html" }));
	}, []);

	return (
		<div className='right-container'>
			<iframe src={iframeSrc}></iframe>
		</div>
	);
};

export default Right;
