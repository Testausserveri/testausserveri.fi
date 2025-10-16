// @ts-check
import withPlaceholder from "@plaiceholder/next";
import CopyPlugin from "copy-webpack-plugin"
import { readFileSync } from "fs"
import { parse } from "path"
import { createHash } from "crypto"

// Which files from posts directory will be forcefully included as assets
// (glob list format)
const postAssets = "splinecode,mp4,pdf"

/**
 * @type {import('next').NextConfig}
 */
const config = {
  reactStrictMode: true,
  images: {
    domains: ['localhost', 'api.testausserveri.fi', 'avatars.githubusercontent.com', 'testausauto.fi', 'cdn.discordapp.com'],
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
    // syslog slug changes april 2025
    const syslogSlugChanges = {
      "stipendit-2023": "2023-stipendit",
      "disobey-collab-2025": "2025-disobey-collab",
      "ngh-challenge-2025": "2025-ngh-challenge",
      "team-finland-2024": "2024-team-finland",
      "testausmokki-2024": "2024-testausmokki",
      "testausserveri-disobey-2025": "2025-testausserveri-disobey",
      "testitapahtuma-1": "2025-testitapahtuma",
      "vectorama-ctf": "2025-vectorama-ctf"
    };

    const syslogSlugChangesRules = Object.entries(syslogSlugChanges).map(([oldSlug, newSlug]) => ({
      source: `/syslog/${oldSlug}`,
      destination: `/syslog/${newSlug}`,
      permanent: true
    }));

    // all rules
    return [
      ...syslogSlugChangesRules,
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
    config.plugins.push(
      new CopyPlugin({
          patterns: [
            {
              from: `./posts/**/*.{${postAssets}}`,
              to({ absoluteFilename }) {
                if (!absoluteFilename) throw new Error("Tried to copy invalid post asset!")
                const content = readFileSync(absoluteFilename)
                const hash = createHash("md5").update(content).digest("hex").slice(0, 8)
                const file = parse(absoluteFilename)
                return `static/media/${file.name}.${hash}${file.ext}`
              },
              noErrorOnMissing: true,
            },
          ],
      })
  )
    config.module.rules.push({ 
      test: /\.mdx$/, use: 'raw-loader' 
    })
    const prefix = config.assetPrefix ?? config.basePath ?? '';
    config.module.rules.push({
      test: new RegExp(`\.(${postAssets.replace(/,/g, "|")})$`),
      use: [{
        loader: 'file-loader',
        options: {
          publicPath: `${prefix}/_next/static/media/`,
          outputPath: 'static/media/',
          name: '[name].[md5:contenthash:8].[ext]',
        },
      }],
    });
    return config
  }
};
 
export default withPlaceholder(config);