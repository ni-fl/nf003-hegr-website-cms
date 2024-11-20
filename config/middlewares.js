module.exports = ({env}) => [
	'strapi::errors',
	{
		name: 'strapi::security',
		config: {
			contentSecurityPolicy: {
				useDefaults: true,
				directives: {
					'connect-src': ['self', 'https:'],
					'img-src': ['\'self\'', 'data:', 'blob:', 'https:', `https://${env('SPACE_BUCKET')}.${env('SPACE_REGION')}.${env('SPACE_ENDPOINT')}`],
					'media-src': ['\'self\'', 'data:', 'blob:', 'https:', `https://${env('SPACE_BUCKET')}.${env('SPACE_REGION')}.${env('SPACE_ENDPOINT')}`],
					upgradeInsecureRequests: null,
				},
			},
		},
	},
	'strapi::cors',
	'strapi::poweredBy',
	'strapi::logger',
	'strapi::query',
	'strapi::body',
	'strapi::session',
	'strapi::favicon',
	'strapi::public',
];
