# Blockchain-Ganache-Transaction
A simple dApp to test the working of Ganache:

First we install ganache and truffle from their official websites

Truffle is a development framework for Ethereum that allows developers to write, test, and deploy smart contracts. 
Install Truffle by running the following command in your terminal or command prompt:

npm install -g truffle

Create a new Truffle project: 
Create a new directory for your project and navigate to it in your terminal or command prompt. Then run the following command to create a new Truffle project:

truffle init


Write a smart contract: In the contracts/ directory of your Truffle project, create a new file called SimpleStorage.sol.
This contract is a simple storage contract that allows you to set and retrieve a value. When you set the value, it will be stored on the blockchain


Write a migration script: In the migrations/ directory of your Truffle project, create a new file called 2_deploy_simple_storage.js.
This script deploys the SimpleStorage contract to the blockchain.


Compile and deploy the contract: Run the following commands in your terminal or command prompt to compile and deploy the contract:
truffle compile
truffle migrate


Create a front-end: In the root directory of your Truffle project, create a new file called index.html.
This code creates a simple HTML interface for your dApp that allows you to set and retrieve a value.


Create a JavaScript file: In the root directory of your Truffle project, create a new file called app.js. 


#Now if you check your ganache application you will see a transaction on the blockchain
