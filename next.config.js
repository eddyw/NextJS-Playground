module.exports = (_, config) => {
  Object.assign(config, {
    redirects: async () => [
      {
        source: '/index/',
        destination: '/',
        permanent: true
      },
      {
        source: '/some/thing/',
        destination: '/here/',
        permanent: true,
      },
    ],
    experimental: {
      reactRefresh: true,
      trailingSlash: true,
    }
  });

  return config;
};
