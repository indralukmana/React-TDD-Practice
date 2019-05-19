module.exports = {
	extends: ['standard', 'standard-react'],
	parser: 'babel-eslint',
	plugins: ['jest', 'react', 'cypress'],
	env: {
		browser: true,
		'jest/globals': true
	},
	rules: {
		'newline-per-chained-call': ['error', { ignoreChainWithDepth: 1 }]
	}
}
