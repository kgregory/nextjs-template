module.exports = {
	'*.{js,jsx,ts,tsx}': ['eslint --cache --fix', 'prettier --write'],
	'*.{html,css,md}': 'prettier --write',
};
