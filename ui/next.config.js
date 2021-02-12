module.exports = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    console.log(config);
    config.module.rules.map((rule) => console.log(JSON.stringify(rule)));
    return config;
  },
};
