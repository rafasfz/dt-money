import { ReactNode, createContext, useEffect, useState } from 'react';
import { api } from './services/api';

interface Transaction {
  id: number;
  title: string;
  amount: number;
  type: "deposit" | "withdraw";
  category: string;
  createdAt: string;
}

export const TransactionsContext = createContext<Transaction[]>([]);

interface TrnsactionsProviderProps {
  children: ReactNode;
}

export const TransactionsProvider = ({children}: TrnsactionsProviderProps) => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    api.get('/transactions')
      .then(response => setTransactions(response.data.transactions));
  }, []);

  return (
    <TransactionsContext.Provider value={transactions}>
      {children}
    </TransactionsContext.Provider>
  );

}
