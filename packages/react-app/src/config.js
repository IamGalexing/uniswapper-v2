import { Goerli } from "@usedapp/core";
import { Contract, GoerliURL } from "connectionInfo.js";

export const ROUTER_ADDRESS = Contract;

export const DAPP_CONFIG = {
  readOnlyChainId: Goerli.chainId,
  readOnlyUrls: {
    [Goerli.chainId]: GoerliURL,
  },
};
