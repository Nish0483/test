const { ethers, network } = require("hardhat");

async function main() {
  if (network.name === "hardhat") {
    console.warn(
      "You are deploying to a temporary hardhat network.\n" +
      "If you want to deploy to a real network, make sure to use '--network <network>' flag."
    );
  }

  const [deployer] = await ethers.getSigners();
  console.log("Deploying the contract from account:", await deployer.getAddress(), "\n");
  console.log("Account balance:", ethers.utils.formatEther(await deployer.getBalance()), "ETH");

  const MyToken = await ethers.getContractFactory("MyToken");
  const myToken = await MyToken.deploy();
  await myToken.deployed();

  console.log("ERC20 Token deployed to:", myToken.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
