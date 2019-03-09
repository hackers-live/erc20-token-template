/*
 * This migration actually nothing here.
 * We don't want to write any additional contracts on chain.
 */

const Migrations = artifacts.require("Migrations");

module.exports = function(deployer, network, accounts) {
  deployer.deploy(Migrations)
};

