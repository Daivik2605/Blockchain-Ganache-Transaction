const SimpleStorage = artifacts.require("SimpleStorage");

async function main() {
    const web3 = new Web3("http://localhost:7545");
    const networkId = await web3.eth.net.getId();
    const deployedNetwork = SimpleStorage.networks[networkId];
    const simpleStorage = new web3.eth.Contract(SimpleStorage.abi, deployedNetwork.address);

    document.getElementById("set-value-button").addEventListener("click", async () => {
        const value = document.getElementById("value-input").value;
        await simpleStorage.methods.setValue(value).send({ from: (await web3
