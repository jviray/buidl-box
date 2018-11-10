const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledContract = require('./build/CONTRACT.json');

const provider = new HDWalletProvider(
  'hundred damp puppy question dance hope ecology copy wealth trigger monster few',
  'https://rinkeby.infura.io/v3/c58307de419b44e2a42cd272d47a08e3'
);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log('Attempting to deploy from account', accounts[0]);

  // Returns an instance of the contract we deployed
  const result = await new web3.eth.Contract(
    JSON.parse(compiledContract.interface)
  )
    // Add { arguments: [] } if needed
    .deploy({ data: compiledContract.bytecode })

    // Important to set gasLimit (21000 is generally the minimum);
    // was not mentioned in Grider's tutorial
    //
    // ***Update: Was a web3 issue, now using 1.0.0-beta.35;
    // gasLimit no longer needed!
    .send({ from: accounts[0], gas: '1000000' });

  console.log('Contract deployed to', result.options.address);
};

deploy();

// Comment deployed address
