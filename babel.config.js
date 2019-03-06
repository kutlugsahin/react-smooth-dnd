module.exports = function(api) {
	api.cache(true);

	return {
		presets: [
			"@babel/preset-typescript",
			"@babel/preset-react",
			"@babel/preset-env"
		],
		plugins: [
			"@babel/plugin-proposal-class-properties"
		]
	};	
}
