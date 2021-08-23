export function MoneyHistoryConstructor({ moneyHistoryItem }) {
  return (
    <div
      className="moneyHistoryItem"
      style={
        moneyHistoryItem.amount > 0
          ? { borderRight: "6px solid #67DCA2" }
          : moneyHistoryItem.amount < 0
          ? { borderRight: "6px solid #B83329" }
          : { borderRight: "none" }
      }
    >
      <span>{moneyHistoryItem.title}</span>
      <span>
        {moneyHistoryItem.amount.toLocaleString("en-us", {
          style: "currency",
          currency: "USD",
        })}
      </span>
    </div>
  );
}
