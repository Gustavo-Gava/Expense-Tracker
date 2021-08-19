import { useState, useContext, useEffect } from "react";

import { MoneyHistory } from "../components/MoneyHistory";
import { MoneyHistoryContext } from "../App";

import "../assets/styles/Home.css";

export function Home() {
  const [inputText, setInputText] = useState("");
  const [amount, setAmount] = useState(0);
  const { moneyHistory, setMoneyHistory } = useContext(MoneyHistoryContext);
  const { money, setMoney } = useContext(MoneyHistoryContext);

  useEffect(() => {
    setMoney(money);
  }, []);

  function handleAddNewAmount() {
    const title = inputText;

    // Check inputs
    if (parseFloat(amount) === 0 || inputText.trim() === "") {
      alert("Digite dados válidos");
      return;
    }

    if (parseFloat(amount) > 0) {
      const newIncome = money.income + parseFloat(amount);
      const newBalance = money.balance + parseFloat(amount);
      setMoney({
        ...money,
        income: newIncome,
        balance: newBalance,
        title,
      });
    } else {
      const newExpense = money.expense - parseFloat(amount);
      const newBalance = money.balance + parseFloat(amount);
      setMoney({ ...money, expense: newExpense, balance: newBalance, title });
    }

    setMoneyHistory([
      ...moneyHistory,
      {
        title,
        amount: parseFloat(amount),
      },
    ]);
    console.log(moneyHistory);
    setInputText("");
    setAmount(0);
  }

  function handleClickClearTransactions() {
    setMoney({
      balance: 0,
      income: 0,
      expense: 0,
      title: "",
    });
    setMoneyHistory([{}, {}, {}]);
  }

  return (
    <div className="main-content">
      <div>
        <h2 className="principal-title">Expense Tracker</h2>

        <h2>Your Balance</h2>
        <h2 className="current-money">
          {money.balance.toLocaleString("en-us", {
            style: "currency",
            currency: "USD",
          })}
        </h2>

        <div className="container-money">
          <div>
            <span>INCOME</span>
            <span>
              {money.income.toLocaleString("en-us", {
                style: "currency",
                currency: "USD",
              })}
            </span>
          </div>
          <div>
            <span>EXPENSE</span>
            <span>
              {money.expense.toLocaleString("en-us", {
                style: "currency",
                currency: "USD",
              })}
            </span>
          </div>
        </div>

        <MoneyHistory moneyHistoryArray={moneyHistory} />
        <button
          className="clear-transactions-btn"
          onClick={handleClickClearTransactions}
        >
          Clear Transactions
        </button>
        <h3 className="title-add-new-transaction">Add new Transaction</h3>

        <div className="line"></div>

        <div className="container-input-text">
          <h4>Text</h4>
          <input
            type="text"
            placeholder="Enter Text..."
            onChange={(e) => setInputText(e.target.value)}
            value={inputText}
          />
        </div>
        <div>
          <h4>Amount</h4>
          <h5>(Income: positive number | Expense: negative number)</h5>
          <input
            type="number"
            placeholder="Enter Amount..."
            onChange={(e) => setAmount(e.target.value)}
            value={amount}
          />
          <button className="new-transaction" onClick={handleAddNewAmount}>
            Add Transaction
          </button>
        </div>
      </div>
    </div>
  );
}
