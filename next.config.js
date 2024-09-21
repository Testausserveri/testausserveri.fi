// @ts-check
import withPlaiceholder from "@plaiceholder/next";

/**
 * @type {import('next').NextConfig}
 */
const config = {
  reactStrictMode: true,
  images: {
    domains: ['localhost', 'api.testausserveri.fi', 'avatars.githubusercontent.com', 'testausauto.fi'],
  },
  async rewrites() {
		return [
			{
				source: '/api/v1/:path*',
				destination: process.env.NEXT_PUBLIC_API_SERVER + '/v1/:path*',
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
      { "source": "/link/:path*", "destination": "https://link.testausserveri.fi/:path*", permanent: true },
      { "source": "/yhdistyksen-saannot.pdf", "destination": "/association-rules", permanent: true },
      { "source": "/host/privacy", "destination": "/privacy/host", permanent: true }
    ];
  },
  webpack: (config, options) => {
    config.module.rules.push({ 
      test: /\.mdx$/, use: 'raw-loader' 
    })
    const prefix = config.assetPrefix ?? config.basePath ?? '';
    config.module.rules.push({
      test: /\.mp4$/,
      use: [{
        loader: 'file-loader',
        options: {
          publicPath: `${prefix}/_next/static/media/`,
          outputPath: `${config.dev ? '' : '../'}${config.isServer ? '../' : ''}static/media/`,
          name: '[name].[hash:8].[ext]',
        },
      }],
    });
    return config
  }
};
 
export default withPlaiceholder(config);