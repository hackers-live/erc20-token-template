pragma solidity ^0.5.4;

import "openzeppelin-solidity/contracts/token/ERC20/ERC20Capped.sol";


// 10 billion
contract MyCoin is ERC20Capped(10000000000 ether) {
    string public name = "Hackers Live Coin";
    string public symbol = "HCL";
    uint8 public decimals = 18;
    address public CFO;
    address public CEO;

    constructor () public {
        CEO = msg.sender;
        CFO = msg.sender;
    }

    function setCEO(address newCEO) external {
        require(msg.sender == CEO);

        CEO = newCEO;
    }

    function setCFO(address newCFO) external {
        require(msg.sender == CEO);
        CFO = newCFO;
    }

    function () payable external {

    }

    function withdrawEther() external {
        require(msg.sender == CFO || msg.sender == CEO);
        msg.sender.transfer(address(this).balance);
    }

    function removeMinter(address account) external {
        require(msg.sender == CFO || msg.sender == CEO);
        _removeMinter(account);
    }
}

