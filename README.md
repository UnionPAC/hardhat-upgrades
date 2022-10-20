# Hardhat Upgrades

reference @ https://forum.openzeppelin.com/t/openzeppelin-upgrades-step-by-step-tutorial-for-hardhat/3580/1

### This will be a demo of upgrading the Box.sol contract to BoxV2.sol

#### How does this work? <br>

In order to upgrade Box -> BoxV2 ... <br>
We need to have a Proxy that points to the specific implementation contract we want to use. <br>
So we will need to point to BoxV2 instead of Box <br>

<pre>
Proxy     Box <br>
       -> BoxV2
</pre>

#### So how can we do this?

1. Deploy a Proxy
   - Manually
   - Using hardhat deploy plugin (https://github.com/wighawag/hardhat-deploy#deploying-and-upgrading-proxies)
   - Using Open Zeppelin hardhat upgrades (https://docs.openzeppelin.com/upgrades-plugins/1.x/api-hardhat-upgrades)


🟢  This demo will be using the hardhat-deploy method 🟢