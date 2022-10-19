const { network, ethers } = require("hardhat");

// sets the Example.sol contract value
const example = async () => {
  const example = await ethers.getContract("Example");
  console.log("Setting a new value ...");
  const setValueTx = await example.setValue(123);
  const setValueTxReciept = await setValueTx.wait();

  const newValue = await example.getValue();
  console.log(`New value is ${newValue}`);
};

example()
  .then(() => process.exit(0))
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
