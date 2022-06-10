import { useState } from 'react';
import Modal from 'react-modal';
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransctionModal } from './components/NewTransactionModal';
import { GlobalStyle } from "./styles/global";
import { TransactionsProvider } from './TransactionContext';

Modal.setAppElement('#root');

export function App() {

  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  const handleOpenNewTransactionModal = () => {
    setIsNewTransactionModalOpen(true);
  };

  const handleCloseNewTransactionModal = () => {
    setIsNewTransactionModalOpen(false);
  };

  return (
    <TransactionsProvider>
      <Header 
        onOpenNewTransactionModal={handleOpenNewTransactionModal}
      />
      <Dashboard />
      <NewTransctionModal isOpen={isNewTransactionModalOpen} onRequestClose={handleCloseNewTransactionModal} />
      <GlobalStyle /> 
    </TransactionsProvider>
  );
}
