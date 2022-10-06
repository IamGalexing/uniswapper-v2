import { Goerli } from "@usedapp/core";
require("dotenv").config();

//it does not work
export const ROUTER_ADDRESS = process.env.ROUTER_ADDRESS;

// like this its work, same with readOnlyUrls
// export const ROUTER_ADDRESS = "with router address here";

export const DAPP_CONFIG = {
  readOnlyChainId: Goerli.chainId,
  readOnlyUrls: {
    [Goerli.chainId]: process.env.ALCHEMY_GOERLI_URL,
  },
};
