import Web3 from 'web3';

// Assume users have metamask installed
// Pass Web3 the provider automatically injected into your browswer by Metamask
const web3 = new Web3(window.web3.currentProvider);

export default web3;
