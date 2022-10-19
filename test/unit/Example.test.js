const { assert, expect } = require("chai");
const { network, ethers, getNamedAccounts } = require("hardhat");
const { devChains } = require("../../helper-hardhat-config");

// only run if on a chain that is a devChain
!devChains.includes(network.name)
  ? describe.skip
  : describe("Example", async function () {
      beforeEach(async () => {});

      describe("constructor", () => {
        it("should do something", async () => {});
      });
    });
