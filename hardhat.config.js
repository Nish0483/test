require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
require("@nomiclabs/hardhat-ethers");

const PRIVATE_KEY = process.env.key;
const API_KEY = process.env.api;


/** @type import('hardhat/config').HardhatUserConfig */

module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.8.20",
        settings: {
          evmVersion: "london",
        }
      // },
      // {
      //   version: "0.8.0",
      //   settings: {
      //     optimizer: { enabled: true, runs: 100_000 },
      //   },
      // },
      // {
      //   version: "0.8.4",
      //   settings: {
      //     optimizer: { enabled: true, runs: 100_000 },
      //   },
      // },
      // {
      //   version: "0.4.11",
      //   settings: {
      //     optimizer: { enabled: true, runs: 100_000 },
      //   },
      // },
      // {
      //   version: "0.7.0",
      //   settings: {
      //     optimizer: { enabled: true, runs: 100_000 },
      //   },
      // },
      // {
      //   version: "0.8.17",
      //   settings: {
      //     optimizer: { enabled: true, runs: 100_000 },
      //   },
      },
    ],
  },

  networks:{

    
   hardhat:{},
   mumbai:{
    url:API_KEY,
    accounts:[PRIVATE_KEY]
   },
   goerli:{
    url:"https://goerli.infura.io/v3/66e35b8932754052acbddffc9c06ed38",
    accounts:[PRIVATE_KEY]
   },
   holesky:{
    url:"wss://ethereum-holesky-rpc.publicnode.com",
    accounts:[PRIVATE_KEY]
   },
   edexa: {
    url: "https://testnet.edexa.com/rpc",
    chainId: 1995,
    accounts: [PRIVATE_KEY]
  }

   

  },


  etherscan: {
    apiKey:"J47C9S2V682MWVCP8KK4G4W2WG4ZMBAEHX"
   },

  paths: {
    artifacts: "./artifacts",
    cache: "./cache",
    
    tests: "./test",
    // Exclude the node_modules directory explicitly
    nodeModules: "./node_modules",
  },
};