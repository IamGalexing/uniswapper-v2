import { useState, useEffect } from "react";
import Web3 from "web3";
import { useConfig } from "@usedapp/core";
import { getRouterInfo, getFactoryInfo } from "../utils";
import { ROUTER_ADDRESS } from "../config";

export const loadPools = async (providerUrl) => {
  const provider = new Web3.providers.HttpProvider(providerUrl);
  const web3 = new Web3(provider);

  const routerInfo = await getRouterInfo(ROUTER_ADDRESS, web3);
  const factoryInfo = await getFactoryInfo(routerInfo.factory, web3);

  return factoryInfo.pairsInfo;
};

export const usePools = () => {
  const { readOnlyChainId, readOnlyUrls } = useConfig();
  const [loading, setLoading] = useState(true);
  const [pools, setPools] = useState({});

  useEffect(() => {
    loadPools(readOnlyUrls[readOnlyChainId]).then((pools) => {
      setPools(pools);
      setLoading(false);
    });
  }, [readOnlyChainId, readOnlyUrls]);

  return [loading, pools];
};
