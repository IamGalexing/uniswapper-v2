import { formatUnits, parseUnits } from "ethers/lib/utils";
import styles from "../styles";

const Balance = ({ tokenBalance }) => {
  return (
    <div className={styles.balance}>
      <p className={styles.balanceText}>
        <span className={styles.balanceBold}>Balance: </span>
        {tokenBalance
          ? formatUnits(tokenBalance)
          : formatUnits(parseUnits("0"))}
      </p>
    </div>
  );
};

export default Balance;
