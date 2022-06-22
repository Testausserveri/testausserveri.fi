const withPlugins = require('next-compose-plugins')
const withTM = require('next-transpile-modules')(['@testausserveri/react-testausid'])

module.exports = withPlugins([withTM], {
  reactStrictMode: true,
  images: {
    domains: ['localhost'],
    domains: ['api.testausserveri.fi'],
  },
})
