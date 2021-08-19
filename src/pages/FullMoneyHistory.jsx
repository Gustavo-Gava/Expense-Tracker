import { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";

import { MoneyHistoryConstructor } from "../components/MoneyHistoryConstructor";
import { MoneyHistoryContext } from "../App";

import "../assets/styles/FullMoneyHistory.css";

export function FullMoneyHistory() {
  const { moneyHistory, setMoneyHistory } = useContext(MoneyHistoryContext);
  const history = useHistory();

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
