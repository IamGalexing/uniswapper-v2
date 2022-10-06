import { useState } from "react";
import { Contract } from "@ethersproject/contracts";
import { abis } from "@my-app/contracts";
import {
  ERC20,
  useContractFunction,
  useEthers,
  useTokenAllowence,
  useTokenBalance,
} from "@usedapp/core";
import { ethers } from "ethers";
import { parseUnits } from "ethers/lib/utils";
import { ROUTER_ADDRESS } from "../config";
import { AmountIn, AmountOut, Balance } from "./";
import {
  getAvailableTokens,
  getCounterpartTokens,
  findPoolByTokens,
  isOperationPending,
  getFailureMessage,
  getSuccessMessage,
} from "../utils";
import styles from "../styles";

const Exchange = ({ pools }) => {
  const isApproving = isOperationPending("approve");
  const isSwapping = isOperationPending("swap");

  // const successMessage = getSuccessMessage();
  // const failureMessage = getFailureMessage();

  return (
    <div className='flex flex-col w-full items-center'>
      <div className='mb-8'>
        <AmountIn />
        <Balance />
      </div>
      <div className='mb-8 w-[100%]'>
        <AmountOut />
        <Balance />
      </div>
      {"approvedNeeded" && !isSwapping && (
        <button
          disabled={!"canApprove"}
          className={
            "canApprove"
              ? "bg-site-pink text-white"
              : "bg-site-dim2 text-dim2"`${styles.actionButton}`
          }
        >
          {isApproving ? "Approving..." : "Approve"}
        </button>
      )}
    </div>
  );
};

export default Exchange;
