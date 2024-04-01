import { EdexaClient } from "@edexa/edexajs";
import dotenv from 'dotenv'; 
dotenv.config();

const edexaClient = new EdexaClient();
const key=process.env.key;

const erc20Attributes = {
    name: "SmartToken",
    symbol: "SMT",
    supply: 1000000
  };
  const signer = edexaClient.createWalletSigner(key);
  const erc20ContractInstance = await edexaClient.createContractERC20(erc20Attributes, signer);