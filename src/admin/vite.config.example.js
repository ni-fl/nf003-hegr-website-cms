// IMPORTS
const { mergeConfig } = require('vite');

const config = (config) => {
  
  // MERGE CONFIGS
  const mergedConfig = mergeConfig(config, {
    resolve: {
      alias: {
        '@': '/src',
      },
    },
  });
  
  // RETURN
  return mergedConfig
};

// EXPORTS
module.exports = config;

