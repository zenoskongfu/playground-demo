import { transform } from "@babel/standalone";
import indexFile from "../../template/index.tsx?raw";
export type File = {
	name: string;
	value: string;
	language: string;
};

export type Files = {
	[key: string]: File;
};

export const babelTransform = (filename: string, code: string, files: Files) => {
	let result = "";
	try {
		result = transform(code, {
			presets: ["react", "typescript"],
			filename,
			plugins: [],
			retainLines: true,
		}).code!;
	} catch (e) {
		console.error("编译出错", e);
	}
	return result;
};

export const compile = (files: Files) => {
	const main = {
		value: indexFile,
	};
	return babelTransform("index.tsx", main.value, files);
};

export const string2url = (str: string, options = { type: "application/javascript" }) => {
	return URL.createObjectURL(new Blob([str], options));
};
