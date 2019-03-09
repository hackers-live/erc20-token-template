const HackersLiveCoin = artifacts.require("HackersLiveCoin");
const accountIndex = 0


module.exports = function(deployer, network, accounts) {
  deployer.deploy(
    HackersLiveCoin,
    {
      "from": accounts[accountIndex]
    }
  );
};

