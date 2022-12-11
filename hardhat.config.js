require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();
require("@nomiclabs/hardhat-etherscan");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
    },
    matic: {
      url: "https://rpc-mumbai.maticvigil.com",
      accounts: [process.env.MATIC_PRIVATE_KEY]
    }
    ,TBNC: {
      //url: "https://bsctestapi.terminet.io/rpc",
      url: "https://bsc-testnet.public.blastapi.io",
      accounts: [process.env.MATIC_PRIVATE_KEY]
    }
    ,goerli: {
      //url: "https://bsctestapi.terminet.io/rpc",
      url: "https://eth-goerli.public.blastapi.io",
      accounts: [process.env.MATIC_PRIVATE_KEY]
    }
  },
  etherscan: {
    // etherscan:
    // bscscan:
    //apiKey: "your apiKey",
    apiKey: {
      bscTestnet: process.env.BSC_API_KEY
      ,goerli:process.env.GLI_API_KEY
    }
  },
  solidity: {
    version:"0.8.17"
  }
};
