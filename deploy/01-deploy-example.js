const { network } = require("hardhat")
const { VERIFICATION_BLOCK_CONFIRMATIONS } = require("../helper-hardhat-config")
const { verify } = require("../utils/verify")

module.exports = async ({ deployments, getNamedAccounts }) => {
    const { deploy, log } = deployments
    const { deployer } = await getNamedAccounts()
    const chainId = network.config.chainId
    const waitBlockConfirmations =
        chainId == 31337 ? 1 : VERIFICATION_BLOCK_CONFIRMATIONS

    log("--------------------------------")
    const args = []

    const example = await deploy("Example", {
        from: deployer,
        log: true,
        args: args,
        waitConfirmations: waitBlockConfirmations,
    })

    // verify if NOT on a local network
    if (chainId != 31337 && process.env.ETHERSCAN_API_KEY) {
        log("Verifying ... please wait!")
        await verify(example.address, args)
    }
    log("--------------------------------")
}

module.exports.tags = ["all", "example"]
