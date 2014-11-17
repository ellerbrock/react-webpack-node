var path = require("path");

var commonLoaders = [
	{ test: /\.js$/, loader: "jsx-loader" },
	{ test: /\.png$/, loader: "url-loader" },
	{ test: /\.jpg$/, loader: "file-loader" },
	{ test: /\.css$/, loader: "style!css" }
];

var assetsPath = path.join(__dirname, "public", "assets");
var publicPath = "assets/";

module.exports = {
	name: "browser",
	// The entry point of the bundle
	entry: "./app/app.js",
	output: {
		// The output directory as absolute path
		path: assetsPath,
		// The filename of the entry chunk as relative path inside the output.path directory
		filename: "bundle.js",
		// The output path from the view of the Javascript
		publicPath: publicPath

	},
	module: {
		loaders: commonLoaders
	}
};