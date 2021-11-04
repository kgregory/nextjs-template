module.exports = {
	plugins: ['@typescript-eslint'],
	extends: ['next/core-web-vitals', 'plugin:@typescript-eslint/recommended', 'prettier'],
	rules: {
		'@typescript-eslint/array-type': 'error',
		'@typescript-eslint/explicit-member-accessibility': 'error',
		'@typescript-eslint/member-ordering': 'error',
		'@typescript-eslint/no-unused-vars': [
			'error',
			{ vars: 'all', args: 'after-used', ignoreRestSiblings: true },
		],
		'@typescript-eslint/no-explicit-any': 'error',
		'@typescript-eslint/no-parameter-properties': 'error',
		'@typescript-eslint/no-unused-vars': 'error',
		'@typescript-eslint/no-use-before-define': ['error'],
	},
};
