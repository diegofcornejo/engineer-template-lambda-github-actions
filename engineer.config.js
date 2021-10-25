module.exports = () => {
	return {
		data: {
			"FunctionName": "lambda-github-actions",
			"Description": "Engineer Lambda CI with github actions",
			"Role": "GithubActionsRole",
			"Handler": "index.handler",
			"Runtime": "nodejs14.x",
			"Timeout": 3,
			"MemorySize": 128
		},
		templates: [
			{
				src: '.satelite/engineer/files/lambda.config.json',
				dest: 'src/lambda.config.json',
			},
			{
				src: '.satelite/engineer/files/package.json',
				dest: 'src/package.json',
			},
			{
				src: '.satelite/engineer/files/template.yaml',
				dest: 'src/template.yaml',
			},
		],
	};
};
