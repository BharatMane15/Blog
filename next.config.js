const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        MONGODB_USERNAME: "manebharat15",
        MONGODB_PASSWORD: "bharat15",
        MONGODB_CLUSTERNAME: "cluster0",
        MONGODB_DATABASE: "my-blog",
      },
    };
  }
  return {
    env: {
      MONGODB_USERNAME: "manebharat15",
      MONGODB_PASSWORD: "bharat15",
      MONGODB_CLUSTERNAME: "cluster0",
      MONGODB_DATABASE: "my-blog",
    },
  };
};
