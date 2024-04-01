//we are intercating with already deployed a erc 20 contract before here for minting the coin to a wallet


import { EdexaClient } from "@edexa/edexajs";
import dotenv from 'dotenv';
dotenv.config();

const edexaClient = new EdexaClient();
 const key=process.env.key;

const erc20 = edexaClient.getERC20Instance("0x844aE708e856DdfB13DC3531F1B5416A5d4f05cb");

const transactionResponse = await erc20.getBalance("0x4c48367Ca3192b1B494e65f6c81699Bc62506c73");
// console.log(`Transaction Hash: ${transactionResponse.hash}`);
console.log("coin balnce of user",transactionResponse.toString());


//lets try a mint >>>>>>>>
const recipientAddress = "0x4c48367Ca3192b1B494e65f6c81699Bc62506c73";
const mintAmount = "2000000000000000000"; 
const signer = edexaClient.createWalletSigner(key);

try{
const transac = await erc20.mint(recipientAddress, mintAmount, signer); 
console.log("mint success");



}catch(error){console.log(error);}
