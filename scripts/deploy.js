const path = require('path');
const Web3 = require('web3');
const HDWalletProvider = require('truffle-hdwallet-provider');

// 1.get bytecode
const contractPath = path.resolve(__dirname, '../compiled/Car.json');
const { interface, bytecode } = require(contractPath);

// 2.configure provider
const provider = new HDWalletProvider(
  'debate bunker kick logic service dance kiss present rent ritual woman outside',
  'https://rinkeby.infura.io/v3/24a42246e0d94e9a9d31557d890c6b5c'
)

// 3.init instance of web3
const web3 = new Web3(provider);

(async () => {
  // 4.get account of pallet
  const accounts = await web3.eth.getAccounts();
  console.log('部署合约的用户：', accounts[0]);

  // 5.create contract instance and deploy
  const result = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({ data: bytecode, arguments: ['AUDI'] })
        .send({ from: accounts[0], gas: '1000000' });
  console.log('合约部署成功：', result.options.address);
})();

