module.exports = ({env}) => ({
	upload: {
		config: {
			provider: 'aws-s3',
			providerOptions: {
				s3Options: {
					credentials: {
						accessKeyId: env('SPACE_ACCESS_KEY_ID'),
						secretAccessKey: env('SPACE_ACCESS_SECRET'),
					},
					region: env('SPACE_REGION'),
					endpoint: env('SPACE_ENDPOINT'),
					params: {
						Bucket: env('SPACE_BUCKET'),
					},
				},
			},
		},
	},
});
