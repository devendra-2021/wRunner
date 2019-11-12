import RemoveServiceOutputsPlugin from "remove-service-outputs-plugin";

export default function(options) {
	options = options ? options : {};
	var workFolder = options.workFolder;
	
	return {
		entry: {
			"wrunner-native": workFolder + "/src/wRunner/wrunner-native.js",
			"wrunner-jquery": workFolder + "/src/wRunner/wrunner-jquery.js",
			"wrunner-default-theme": workFolder + "/src/themes/wrunnerDefaultTheme/wrunner-default-theme.js"
		},
		output: {
			path: workFolder + "/prod/",
			filename: data => {
				switch(data.chunk.name) {
					default: 
						return "[name].js";
				}
			}
		},
		plugins: [
			new RemoveServiceOutputsPlugin([
				["wrunner-default-theme", /.*\.js$/]
			])
		],
		performance: {
			hints: false
		},
		optimization: {
			splitChunks: {
				cacheGroups: {
					vendors: {
						test: /[\\/](vendors|node_modules)[\\/]/,
						name: "vendors",
						filename: "[name].js",
						chunks: "all"
					},
					default: false
				}
			}
		},
		devtool: "none"
	};
}