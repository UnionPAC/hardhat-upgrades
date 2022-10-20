// manual contract upgrade

const { ethers } = require("hardhat");

const main = async () => {
  const boxProxyAdmin = await ethers.getContract("BoxProxyAdmin");
  const transparentProxy = await ethers.getContract("Box_Proxy");

  const proxyBoxV1 = await ethers.getContract("Box", transparentProxy.address);
  let version = await proxyBoxV1.version();
  console.log(`The version is v${version}`);

  const boxV2 = await ethers.getContract("BoxV2");
  console.log("Upgrading ...");
  const upgradeTx = await boxProxyAdmin.upgrade(
    transparentProxy.address,
    boxV2.address
  );
  await upgradeTx.wait(1);

  const proxyBoxV2 = await ethers.getContract("BoxV2", transparentProxy.address);
  version = await proxyBoxV2.version();
  console.log(`The version is v${version}`);
};

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
