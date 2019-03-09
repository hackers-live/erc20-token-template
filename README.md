# ERC20 token template

You can create and deploy your own token using this repository.

## Sample Token info

![hackers_live_coin_logo](assets/logo500x500.png)

| Key | Value |
| ------------- | ------------- |
| Name  | Hackers Live Coin  | 
| Symbol  | HCL |
| Decimals  | 18 |
| Address  | [0x6e2FE65d96ED63AAcA9e475F6f251D4232c3842c](https://etherscan.io/address/0x6e2FE65d96ED63AAcA9e475F6f251D4232c3842c) |
| Cap  | 10 billion  |
| Website | <https://www.youtube.com/channel/UCHGJRKiIJijt5u-Z3KkgG_w> |

## Prerequisites

1. Install NodeJS
2. Install Truffle(Solidity development tool)
3. Install [MetaMask](//metamask.io) browser extension
4. Deposit ETH to your MetaMask
5. Register [Infura.io](//infura.io) and get project ids (infura keys)

### Install NodeJS with NVM

#### For OSX

```
touch ~/.bash_profile
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.34.0/install.sh | bash
nvm install 11.11.0
nvm use 11.11.0
node -v && npm -v
```

### Install truffle & truffle-flattener

Truffle is required to be global by some libraries.

Global here means global under a specific node version, not system global.

```
npm i -g truffle
npm i -g truffle-flattener
```

## Install

```
git clone https://github.com/hackers-live/erc20-token-template.git your_token_name
cd your_token_name
npm install
```

## Configure your account

1. Configure account by running`echo <your_address_on_metamask> > .account`
2. Configure mnemonic by running `echo <your_mnemonic> > .secret`
3. Configure infura key by running `echo <your_infura_key> > .infura_key`

## Customize your token

1. Open contracts/MyCoin.sol
2. Edit cap, name, symbol and decimals.
3. That's it.

## Test on local

Start REPL

```
truffle develop
```

Deploy

```
migrate
```

Once deployed, you can access your token as below

```
token = await MyCoin.deployed()
token.name()
token.totalSupply()
```

## Deploy to ropsten/main network.

Ropsten

```
truffle console --network ropsten
```

```
migrate
token = await MyCoin.deployed()
accounts = web3.eth.getAccounts()
token.balanceOf(accounts[0])
token.mint(accounts[0], web3.utils.toWei("1000", "ether"))
token.balanceOf(accounts[0])
```

Main

*The command below consumes your real ETH.*

```
truffle migrate --network main
```

Don't forget write down your contract address or transaction hash.

They are stored build/contracts/MyCoin.json.

*If your project keeps on going, commit them to your repository.*

*Migrations which have been already applied are skipped in the next migration.*

## Flatten your token

"Flatten" is conpiling all contract files into a file.

This is required to submit source code to Etherscan or exchanges and so on.

```
truffle-flattener contracts/MyCoin.sol > output.sol
```

And use output.sol

