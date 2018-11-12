const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const provider = ganache.provider();
const web3 = new Web3(provider);

// Code below will ignore the MaxListenersExceededWarning from the compiler
// It's a bug in either web3 or the provider and cannot be fixed
require('events').EventEmitter.defaultMaxListeners = 0;

const compiledContract = require('../ethereum/build/SampleContract.json');
