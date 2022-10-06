import { useState, useEffect } from "react";
import { shortenAddress, useEthers, useLookupAddress } from "@usedapp/core";
import styles from "../styles";

const WalletButton = () => {
  const [accountAddress, setAccountAddress] = useState("");

  const { ens } = useLookupAddress();
  const { account, deactivate, activateBrowserWallet } = useEthers();

  useEffect(() => {
    if (ens) {
      setAccountAddress(ens);
    } else if (account) {
      setAccountAddress(shortenAddress(account));
    } else {
      setAccountAddress("");
    }
  }, [accountAddress, account, ens]);

  const handleButton = () => {
    account ? deactivate() : activateBrowserWallet();
  };

  return (
    <button onClick={handleButton} className={styles.walletButton}>
      {accountAddress || "Connect wallet"}
    </button>
  );
};

export default WalletButton;
