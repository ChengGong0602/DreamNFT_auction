 const HDWalletProvider = require('@truffle/hdwallet-provider');
 const fs = require('fs');
 const mnemonic = fs.readFileSync(".secret").toString().trim();
 const { POLYGONSCAN_API_KEY} = require('./env.json');
  
 module.exports = {
  plugins: [
    'truffle-plugin-verify'
  ],
  api_keys: {    
    polygonscan: POLYGONSCAN_API_KEY
  },
  networks: {
    matic: {
      provider: () => new HDWalletProvider(mnemonic, `https://rpc-mumbai.maticvigil.com`),
      network_id: 80001,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true
    },
    maticmainnet: {
      provider: () => new HDWalletProvider(mnemonic, `https://rpc-mainnet.maticvigil.com`),
      network_id: 137,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true
    }    
  },

  // Set default mocha options here, use special reporters etc.
  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "^0.8.4", 
      settings: {       
       optimizer: {
         enabled: false,
         runs: 200
       }      
      }
    },
  },
};
