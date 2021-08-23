import { useHistory } from "react-router-dom";

import { useMoneyHistory } from "../hooks/useMoneyHistory";
import { MoneyHistoryConstructor } from "../components/MoneyHistoryConstructor";

import "../assets/styles/FullMoneyHistory.css";

export function FullMoneyHistory() {
  const { moneyHistory } = useMoneyHistory();
  const history = useHistory();

  console.log(moneyHistory);

  function goBack() {
    history.goBack();
  }

  const newMoneyHistory = moneyHistory.filter((item) =>
    item.hasOwnProperty("amount")
  );

  return (
    <>
      <div className="container-money-history-item">
        <h2>Transactions History</h2>
        {newMoneyHistory.map((moneyHistoryItem) => (
          <MoneyHistoryConstructor moneyHistoryItem={moneyHistoryItem} />
        ))}
        <button onClick={goBack}>Home</button>
      </div>
    </>
  );
}
