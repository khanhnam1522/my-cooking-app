module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: ['plugin:react/recommended', 'airbnb', 'prettier'],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 12,
		sourceType: 'module',
	},
	plugins: ['react', 'prettier'],
	rules: {
		'no-use-before-define': 'off',
		'react/jsx-filename-extension': [
			2,
			{ extensions: ['.js', '.jsx', '.ts', '.tsx'] },
		],
		'react/prop-types': 0,
		'react/jsx-props-no-spreading': 'off',
		'import/no-unresolved': 'off',
		'no-console': 'off',
		'no-underscore-dangle': 'off',
		'import/extensions': 'off',
	},
};
