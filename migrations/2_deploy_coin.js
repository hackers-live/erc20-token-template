/*
 * Deploy ERC20 token.
 */

const MyCoin = artifacts.require("MyCoin");


module.exports = function(deployer, network, accounts) {
  deployer.deploy(MyCoin);
};

