import web3 from './web3';
import SampleContract from './build/SampleContract.json';

// References deployed SampleContract; needs ABI and contract's address
const instance = new web3.eth.Contract(
  JSON.parse(SampleContract.interface),
  '0xf53EB36d72BFe035E460642220AF744909650D86'
);

export default instance;
