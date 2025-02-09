// postcss.config.js
import autoprefixer from "autoprefixer";
import cssnano from "cssnano";
import { purgeCSSPlugin } from "@fullhuman/postcss-purgecss";

export default {
	plugins: [
		autoprefixer(),
		cssnano({
			preset: "default", // Минимизация CSS с настройками по умолчанию
		}),
		purgeCSSPlugin({
			content: [
				"./**/*.html",
				"./src/**/*.js",
				"./src/**/*.ts",
				"./src/**/*.vue",
				"./src/**/*.tsx",
			],
		}),
	],
};
