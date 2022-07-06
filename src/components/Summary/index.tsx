import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';
import { useTransactions } from '../../hooks/useTransactions';

import { Container } from "./styles";

export function Summary() {
  const { transactions } = useTransactions();
  console.log(transactions)

  const totalDeposits = transactions.reduce((total, transaction) => 
    transaction.type === 'deposit' ? total + transaction.amount : total
  , 0);

  const totalWithdraws = transactions.reduce((total, transaction) => 
    transaction.type === 'withdraw' ? total + transaction.amount : total
  , 0);

  const totalTransactions = totalDeposits - totalWithdraws;

  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Entradas" />
        </header>
        <strong>
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          }).format(totalDeposits)}  
          </strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeImg} alt="Saídas" />
        </header>
        <strong>
          -{new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          }).format(totalWithdraws)}  
        </strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="" />
        </header>
        <strong>
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          }).format(totalTransactions)}    
        </strong>
      </div>
    </Container>
  );
}