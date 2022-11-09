
const hre = require("hardhat");

const main = async() => {};

const rsvpContractFactory = await hre.ethers.getContractFactory("Web3RSVP");
const rsvpContract = await rsvpContractFactory.deploy();
await rsvpContract.deployed();
console.log("Contracto deployed to:", rsvpContract.address);

const [deployer, address1, address2] = await hre.ethers.getSigners();

const runMain = async() => {
    try {
        await main();
        process.exit(0);
    } catch(error) {
        console.log(error);
        process.exit(1);
    }
};

runMain();

let deposit = hre.ethers.utils.parseEther("1");
let maxCapacity = 3;
let timestamp = 1718926200;
let eventDataCID = "bafybeibhwfzx6oo5rymsxmkdxpmkfwyvbjrrwcl7cekmbzlupmp5ypkyfi"; 
