import { EdexaClient } from "@edexa/edexajs";
import dotenv from 'dotenv';
dotenv.config();

const edexaClient = new EdexaClient();
const key=process.env.key;


  const erc721Attributes = {
    name: "doge NFT",
    symbol: "DFT"
  };
  const signer = edexaClient.createWalletSigner("d50be47bf7948acc940ce6f34dc25516c89802f3765db9b75e92f278e2c62b95");
  const erc721ContractInstance = await edexaClient.createContractERC721(erc721Attributes, signer);
  