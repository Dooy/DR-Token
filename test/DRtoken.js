const { ethers } = require("hardhat");
const { expect } = require("chai");

describe("DRtoken", function () {
  let DRtoken,instance,owner;
  const initialSupply =      10000  ;
  this.beforeEach( async function(){
    DRtoken = await ethers.getContractFactory("DRtoken");
    instance = await DRtoken.deploy( ); //initialSupply
    [owner] = await ethers.getSigners();
    await instance.deployed();
  });

  it("测试 DRtoken name, symbal,totalSupply 是正确的.", async function(){
      expect( await instance.name()).to.equal("DappRank");
      expect( await instance.symbol()).to.equal("DR");
      //expect( await instance.totalSupply()).to.equal( initialSupply );
  });
  // it("Should owner's balance equls totalSupply.", async function(){
  //     //expect(await instance.balanceOf(owner.address)).to.equal(initialSupply) ;//balanceOf(account)
  // });
});
