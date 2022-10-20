const { task } = require("hardhat/config");
require("@nomicfoundation/hardhat-toolbox");
require("@openzeppelin/hardhat-upgrades");
require("hardhat-contract-sizer");
require("hardhat-deploy");
require("dotenv").config();

/* Tasks */
require("./tasks/accounts");

/* 
const GOERLI_RPC_URL = process.env.GOERLI_RPC_URL
const PRIVATE_KEY = process.env.PRIVATE_KEY
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY
const COINMARKETCAP_API_KEY = process.env.COINMARKETCAP_API_KEY 
*/

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 31337,
      blockConfirmations: 1,
    },
    localhost: {
      chainId: 31337,
    },
    /* 
        rinkeby: {
            chainId: 4,
            saveDeployments: true,
            blockConfirmations: 6,
            url: GOERLI_RPC_URL,
            accounts: [PRIVATE_KEY],
        },
        goerli: {
            chainId: 5,
            saveDeployments: true,
            blockConfirmations: 6,
            url: GOERLI_RPC_URL,
            accounts: [PRIVATE_KEY],
        }, 
        */
  },
  solidity: {
    compilers: [{ version: "0.8.17" }, { version: "0.7.0" }],
  },
  etherscan: {
    // apiKey: ETHERSCAN_API_KEY,
  },
  gasReporter: {
    enabled: true,
    outputFile: "gas-report.txt",
    noColors: true,
    currency: "USD",
    // coinmarketcap: COINMARKETCAP_API_KEY,
  },
  contractSizer: {
    runOnCompile: false,
    only: [""],
  },
  namedAccounts: {
    deployer: {
      default: 0,
    },
    randomPerson: {
      default: 1,
    },
  },
  mocha: {
    timeout: 100000,
  },
};
