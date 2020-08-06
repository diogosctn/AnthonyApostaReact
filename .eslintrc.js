module.exports = {
	env: {
		es6: true,
		browser: true,
		mocha: true,
		jest: true,
		node: true,
		phantomjs: true,
		protractor: true,
	},
	plugins: ['prettier', 'react'],
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:import/errors',
		'plugin:import/warnings',
		'prettier/react',
		'prettier',
	],
	parser: 'babel-eslint',
	parserOptions: {
		ecmaVersion: 6,
		sourceType: 'module',
		ecmaFeatures: {
			modules: true,
		},
	},
	rules: {
		'prettier/prettier': [
			'error',
			{
				useTabs: true,
				singleQuote: true,
				tabWidth: 2,
				trailingComma: 'all',
				arrowParens: 'avoid',
				printWidth: 80,
				semi: false,
			},
		],
		'react/forbid-prop-types': ['off'],
		'react/prop-types': ['warn'],
		'react/jsx-no-bind': ['off'],
		'react/jsx-indent': ['off'],
		'react/jsx-indent-props': ['off'],
		'react/jsx-filename-extension': ['off'],
		'react/display-name': ['off'],
		'import/no-named-as-default': ['off'],
		'no-unused-vars': [
			'error',
			{
				ignoreRestSiblings: true,
			},
		],
		'no-class-assign': ['off'],
	},
	overrides: [
		{
			files: ['**/*.spec.js'],
			rules: {
				'react/jsx-no-bind': ['off'],
				'react/prop-types': ['off'],
			},
		},
	],
	settings: {
		'import/resolver': {
			node: {
				moduleDirectory: ['node_modules', 'src'],
			},
		},
	},
}
