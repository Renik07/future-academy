/** @type {import('next').NextConfig}
/* const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig;

 */

/* module.exports = {
	webpack(config) {
		config.module.rules.push({
			test:/\.svg$/,
			issuer: {
				test: /\.(js|ts)x?$/,
			},
			use: ['@svgr/webpack'],
		});
		return config;
	},
}; */

module.exports = {
	webpack(config) {
		config.module.rules.push({
			test:/\.svg$/,
      oneOf: [
        {
          use: [
            {
              loader: '@svgr/webpack',
              options: {
                prettier: false,
                titleProp: true,
              },
            },
          ],
          issuer: {
            and: [/\.(ts|tsx|js|jsx|md|mdx)$/],
          },
        },
      ],
		});
		return config;
	},
};