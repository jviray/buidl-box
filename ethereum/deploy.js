const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
// Require the .json file from build/ for every contract you want to deploy
const compiledContract = require('./build/SampleContract.json');

const provider = new HDWalletProvider(
  'hundred damp puppy question dance hope ecology copy wealth trigger monster few',
  'https://rinkeby.infura.io/v3/c58307de419b44e2a42cd272d47a08e3'
);

const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log('Attempting to deploy from account', accounts[0]);

  // Returns an instance of the deployed contract
  const result = await new web3.eth.Contract(
    JSON.parse(compiledContract.interface)
  )
    .deploy({ data: compiledContract.bytecode })
    // *** When using newer web3 (1.0.0-beta.35) you don't need to specify
    // gasLimit. Otherwise, gasLimit ('21000' minimum) may be needed.
    //
    // *** Depending on size of the contract, may need to raise gas sent.
    // e.g. Go from 1000000 to 2000000
    .send({ from: accounts[0], gas: '2000000' });

  console.log('Contract deployed to', result.options.address);
};

deploy();

// Contract deployed at address: <add address here if needed>
