var path = require('path');

module.exports = {
	entry: './index.js',
	// devtool: 'source-map',
	output: {
		path: path.resolve(__dirname, 'dist'), // eslint-disable-line
		filename: 'index.js',
		library: 'ReactSmoothDnD',
		libraryTarget: "umd",
		globalObject: 'this'
	},
	module: {
		rules: [{
			test: /\.(js|jsx)$/,
			use: 'babel-loader'
		}]
	},
	externals: {
		react: {
			commonjs: 'react',
			commonjs2: 'react',
			amd: 'react',
			root: 'React'
		},
		'react-dom': {
			commonjs: 'react-dom',
			commonjs2: 'react-dom',
			amd: 'react-dom',
			root: 'ReactDOM'
		},
		'smooth-dnd': {
			commonjs: 'smooth-dnd',
			commonjs2: 'smooth-dnd',
			amd: 'smooth-dnd',
			root: 'SmoothDND'
		},
		'prop-types': {
			commonjs: 'prop-types',
			commonjs2: 'prop-types',
			amd: 'prop-types',
			root: 'PropTypes'
		}
	}
};