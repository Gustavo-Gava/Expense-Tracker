import { useContext } from 'react'

import {MoneyHistoryContext} from '../App'

export function useMoneyHistory() {
  const value = useContext(MoneyHistoryContext)
  return value 
}