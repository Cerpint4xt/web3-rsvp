require("@nomiclabs/hardhat-waffle");
require("dotenv").config();

const STAGING_ALCHEMY_URL = process.env.STAGING_INFURA_URL;
const STAGING_PRIVATE_KEY = process.env.STAGING_PRIVATE_KEY;

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  network:{
    hardhat:{
      chainId: 1337,
    },
    mumbai:{
      url: STAGING_ALCHEMY_URL,
      accounts: [`0x${STAGING_PRIVATE_KEY}`],
      gas: 2100000,
      gasPrice: 8000000000,
    },
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  
};
