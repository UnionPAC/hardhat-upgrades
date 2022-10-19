const networkConfig = {
  31337: {
    name: "localhost",
  },
  4: {
    name: "rinkeby",
  },
  5: {
    name: "goerli",
  },
};

const VERIFICATION_BLOCK_CONFIRMATIONS = 6;
const devChains = ["hardhat", "localhost"];

module.exports = {
  networkConfig,
  VERIFICATION_BLOCK_CONFIRMATIONS,
  devChains,
};
