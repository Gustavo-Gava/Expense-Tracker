import {createContext, useState } from 'react'
import {BrowserRouter, Route} from "react-router-dom";

import {Home} from './pages/Home'
import {FullMoneyHistory} from './pages/FullMoneyHistory'

export const MoneyHistoryContext = createContext({})

function App(){
  const [moneyHistory, setMoneyHistory] = useState([{}, {}, {}]);
  const [money, setMoney] = useState({
    balance: 0,
    income: 0,
    expense: 0,
    title: "",
  });

  return (
    <>
      <BrowserRouter>
        <MoneyHistoryContext.Provider value={{moneyHistory, setMoneyHistory, money, setMoney}}>
          <Route path="/" exact component={Home} />
          <Route path="/FullMoneyHistory" component={FullMoneyHistory}/>
        </MoneyHistoryContext.Provider>
      </BrowserRouter>
    </>
  )
}

export default App