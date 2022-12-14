module.exports = {
  images: {
    domains: ['courses-top.ru'],
  },
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