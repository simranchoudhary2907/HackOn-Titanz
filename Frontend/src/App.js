import React, { useEffect, useState } from 'react';
import { web3, loadContract } from './web3';

function App() {
  const [account, setAccount] = useState('');
  const [contractData, setContractData] = useState('');

  useEffect(() => {
    async function load() {
      try {
        // Request accounts
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setAccount(accounts[0]);
        console.log(accounts[0]);

        // Load contract
        const myContract = await loadContract('demo');

        // Check if the network supports EIP-1559
        const block = await web3.eth.getBlock('latest');
        let transactionConfig;

        if (block.baseFeePerGas !== undefined) {
          // Network supports EIP-1559
          const maxPriorityFeePerGas = web3.utils.toWei('2', 'gwei');
          const maxFeePerGas = web3.utils.toWei('50', 'gwei');
          transactionConfig = {
            from: accounts[0],
            maxPriorityFeePerGas,
            maxFeePerGas,
          };
        } else {
          // Network does not support EIP-1559
          const gasPrice = await web3.eth.getGasPrice();
          transactionConfig = {
            from: accounts[0],
            gasPrice,
          };
        }

        // Call contract method
        await myContract.methods.set(4).send(transactionConfig);
        const data = await myContract.methods.get().call({ from: accounts[0] });
        setContractData(data);
        console.log(data);
      } catch (error) {
        console.log('Error fetching accounts:', error);
        // Handle error (e.g., user rejected request)
      }
    }

    load();
  }, []);

  return (
    <div>
      <h1>Your React DApp</h1>
      <p>Account: {account}</p>
      <p>Data from Contract: {contractData}</p>
    </div>
  );
}

export default App;
