const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

// The lines API_SERVER_DEV and URL_DEV are the most significant to you
const API_SERVER_DEV = `https://api.testausserveri.fi`
const API_SERVER_PROD = `https://api.testausserveri.fi`

const URL_DEV = `http://localhost:3000`
const URL_PROD = `https://testausserveri.fi`

const MEDIA_API_SERVER = 'https://api.testausserveri.fi'
/// ---

module.exports = (phase) => ({
  reactStrictMode: true,
  images: {
    domains: ['localhost', 'api.testausserveri.fi', 'avatars.githubusercontent.com'],
  },
  env: {
    NEXT_PUBLIC_API_SERVER_MEDIA: MEDIA_API_SERVER,
    NEXT_PUBLIC_API_SERVER: (phase === PHASE_DEVELOPMENT_SERVER ? API_SERVER_DEV : API_SERVER_PROD),
    NEXT_PUBLIC_URL: (phase === PHASE_DEVELOPMENT_SERVER ? URL_DEV : URL_PROD)
  },
  async rewrites() {
		return [
			{
				source: '/api/v1/:path*',
				destination: (phase === PHASE_DEVELOPMENT_SERVER ? API_SERVER_DEV : API_SERVER_PROD) + '/v1/:path*',
			},
		]
	},
  i18n: {
    locales: ['fi'],
    defaultLocale: 'fi',
  },
  compiler: {
    styledComponents: true
  },
  async redirects() {
    return [
      { "source": "/.well-known/webfinger", "destination": "https://mastodon.testausserveri.fi/.well-known/webfinger", permanent: true },
      { "source": "/github", "destination": "https://api.testausserveri.fi/v1/github/authorize", permanent: true },
      { "source": "/jasenhakemus", "destination": "/apply", permanent: false },
      { "source": "/host/enable", "destination": "https://forms.gle/Z9oTUEKAdHheBcVT6", permanent: false },
      { "source": "/link/jasenhakemus", "destination": "/apply", permanent: false },
      { "source": "/link/(.*)", "destination": "https://link.testausserveri.fi/$1", permanent: true },
      { "source": "/yhdistyksen-saannot.pdf", "destination": "/association-rules", permanent: true }
    ];
  },
})

