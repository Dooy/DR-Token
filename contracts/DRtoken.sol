// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
// import "hardhat/console.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract DRtoken is ERC20 {
    
    constructor() ERC20 ("DappRank","DR") { //uint256 initialSupply
       
      //_mint(msg.sender, initialSupply * 10 ** decimals()  );
        _mint(msg.sender, 10000 * 10 ** decimals());
    }
}
