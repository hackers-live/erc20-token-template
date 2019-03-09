# Hackers' Live Coin

You can create and deploy your own token using this repository.

## Token info

![hackers_live_coin_logo](assets/logo500x500.png)

| Key | Value |
| ------------- | ------------- |
| Name  | Hackers Live Coin  | 
| Symbol  | HCL |
| Decimals  | 18 |
| Address  | 0x6e2FE65d96ED63AAcA9e475F6f251D4232c3842c |
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
nvm install --lts
node -v && npm -v
```

## Install

```
git clone https://github.com/hackers-live/hackers-live-coin.git your_token_name
cd your_token_name
npm install
```

## Setup connection

1. Configure mnemonic by `echo <your_mnemonic> > .secret`
2. Configure infura key by `echo <your_infura_key> > .infura_key`

## Customize your token

1. Open contracts/HackersLiveCoin.sol
2. Edit cap, name, symbol and decimals.
3. That's it.

## Test on local

Start REPL

```
truffle develop
```

Deploy

```
migrate --reset
```

Once deployed, you can access your token as below

```
token = await HackersLiveCoin.deployed()
token.name()
token.totalSupply()
```

## Deploy to ropsten/main network.

Ropsten

```
truffle console --network ropsten
```

```
migrate --reset
token = await HackersLiveCoin.deployed()
token.mint(your_address, 1000)
token.balanceOf(your_address)
```

Main

*The command below consumes your real ETH.*

```
truffle migrate --reset --network main
```

Don't forget write down your contract address or transaction hash.


## Flatten your token

"Flatten" is conpiling all contract files into a file.

This is required to submit source code to Etherscan or exchanges and so on.

```
truffle-flattener contracts/HackersLiveCoin.sol > output.sol
```

And use output.sol

