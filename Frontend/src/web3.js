import Web3 from 'web3';

const web3 = new Web3(window.ethereum);

// Function to load contract JSON file dynamically
const loadContract = async (contractName) => {
  const contractJSON = await import(`./contracts/${contractName}.json`);
  const contractABI = contractJSON.abi;
  const networkId = await web3.eth.net.getId();
  const contractAddress = contractJSON.networks[networkId]?.address; // USE YOUR OWN METAMASK ADDRESS HERE

  if (!contractAddress) {
    throw new Error(`Contract ${contractName} not deployed on the current network`);
  }

  return new web3.eth.Contract(contractABI, contractAddress);
};

// Export web3 and loadContract function
export { web3, loadContract };
