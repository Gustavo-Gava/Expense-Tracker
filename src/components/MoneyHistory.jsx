import { useHistory } from "react-router-dom";

import "../assets/styles/MoneyHistory.css";

export function MoneyHistory({ moneyHistoryArray }) {
  const last = moneyHistoryArray[moneyHistoryArray.length - 1];
  const penultimate = moneyHistoryArray[moneyHistoryArray.length - 2];
  const antepenultimate = moneyHistoryArray[moneyHistoryArray.length - 3];
  const history = useHistory();
  function handleClickFullHistory() {
    history.push("/FullMoneyHistory");
  }

  return (
    <>
      <h3>History</h3>

      <div className="line"></div>
      <div className="container-history">
        <div
          className="item-history"
          style={
            last.amount > 0
              ? { borderRight: "6px solid #67DCA2" }
              : last.amount < 0
              ? { borderRight: "6px solid #B83329" }
              : { borderRight: "none" }
          }
        >
          <span>{last.title}</span>
          <span>{last.amount}</span>
        </div>
        <div
          className="item-history"
          style={
            penultimate.amount > 0
              ? { borderRight: "6px solid #67DCA2" }
              : penultimate.amount < 0
              ? { borderRight: "6px solid #B83329" }
              : { borderRight: "none" }
          }
        >
          <span>{penultimate.title}</span>
          <span>{penultimate.amount}</span>
        </div>
        <div
          className="item-history"
          style={
            antepenultimate.amount > 0
              ? { borderRight: "6px solid #67DCA2" }
              : antepenultimate.amount < 0
              ? { borderRight: "6px solid #B83329" }
              : { borderRight: "none" }
          }
        >
          <span>{antepenultimate.title}</span>
          <span>{antepenultimate.amount}</span>
        </div>
        <button
          onClick={handleClickFullHistory}
          className="full-history item-history"
        >
          Full history
        </button>
      </div>
    </>
  );
}
