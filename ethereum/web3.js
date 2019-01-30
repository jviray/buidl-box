import Web3 from 'web3';

let web3;

if (typeof window !== 'undefined' && typeof window.ethereum !== 'undefined') {
  async function requestAccess() {
    web3 = new Web3(window.ethereum);
    await ethereum.enable();
  }

  requestAccess();
} else if (
  typeof window !== 'undefined' &&
  typeof window.web3 !== 'undefined'
) {
  web3 = new Web3(window.web3.currentProvider);
} else {
  const provider = new Web3.providers.HttpProvider(
    'https://rinkeby.infura.io/v3/c58307de419b44e2a42cd272d47a08e3'
  );

  web3 = new Web3(provider);
}

export default web3;
