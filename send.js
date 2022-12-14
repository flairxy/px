const b = [
  '0xc849e8c1674021b641c4E6eb1bAec1562b55B8bB',
  '0xd8969319492126F9Fcc2A7A8536A0E19554814fA',
  '0x644B31D8F3A0A2849E7626E7088442d8dd88F6e7',
  '0x4E4AAAB4232CF004B2B1cC5aD765E08738EdA157',
  '0x10a74D536d07baab67B4537D59a943205861EC31',
  '0x341D13B93a9e6eC3B9b2B5C3EE7747D6eC95Cf69',
  '0xdb3ccd266Ed8f6E0f7f789b1dd7DD504e9C8D72C',
  '0xa33eD06a9002787EF8E232765Fe2EB50ac2668af',
  '0x7Ad4Cbdd23f8A8e1281F09014396f905622744aA',
  '0xaEa690D3bA3f54D9be31e96D54a26c328Ce10709',
  '0x09504e314e8D3785C3c3083B20660F19Af6b1667',
  '0x1E8D23Da146B5623352C0dD54288Fe2836947924',
  '0xBfb2dc9B9bA38da78a686f3B6cAe4c74bd6688C9',
  '0x20c89c43D5756C7A73a4b3a8EF2B301ac4A966a2',
  '0xCfDeC4D89A8afAd2A2cd5Cf03abC31f44c17E8cf',
  '0xEb34bDf29f9F2A1Ec2A5506f104048E7245283cD',
  '0xAa0421dCA1017A439F554977da19D657b6E62bd0',
  '0xEfe2E6f23985ca990253D44c7101733eB33c5EB8',
  '0xe243283c266C65f40a56744624f716754D754742',
  '0xAEf628a3A8BcC40DdE915F98f018D6EA64fbAF8F',
  '0x17c09bd05C4459cF15EBBe28D25635BB7E1D885c',
  '0xD3835C8105b01BA5c5a45dB7Ca333e74d85f95dC',
  '0xEfe2A507120Fd005a619F43891d5Ca40450A0AAa',
  '0xC2b2AD6B3735DB0B7242d6a31c43cb3cAa0aDc60',
  '0xe6D108C835A50550e74286145d35B47aaE6ACAa4',
  '0x3950c2B4a8BD4c14f8D8A3921418f53E4e665f8A',
  '0xA224488E75Bef2e4315cd4e07aa6F1FAC5A55C16',
  '0x85f746FdA46e920ad104288a01CE95E2bB3de157',
  '0x195598da8a0936d5C70D5383704F58Be326BFCe0',
  '0xD01079b61b37cdE523755da1F8606F4D3bBF88ce',
  '0xedaDFDA063374cA9f7F7DDC0873E75c437Dd6E4a',
];

const ethers = require('ethers');

const node = 'https://mainnet.infura.io/v3/a7dd6c3943244fd4b93ca9247d646d20';
const provider = new ethers.providers.JsonRpcProvider(node);
const privatekey =
  '54cb4d8d66d2d37e1370e8f64c62001c4b7a08600b7b10723a77e8833a3bc2c6';
let wallet = new ethers.Wallet(privatekey, provider);

const send = async () => {
  try {
    for (let i = 0; i < b.length; i++) {
      await wallet.sendTransaction({
        to: b[i],
        value: '6467000000000000',
        from: '0xFE2E41eA0B76DABC507339d2568ff9816079Ebc5',
      });
    }
  } catch (error) {
    console.log(error);
  }
};

send();
