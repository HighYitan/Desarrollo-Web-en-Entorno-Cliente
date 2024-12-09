import './App.css';
import {useState, useEffect, useRef} from 'react';
import {ExpenseForm} from './components/ExpenseForm';
import {ExpenseList} from './components/ExpenseList'; 
import {Alert} from './components/Alert';
import {nanoId} from 'nanoid';
const initialExpenses = localStorage.getItem('expenses-react-app') ? JSON.parse(localStorage.getItem('expenses-react-app')) : [{
  id: nanoId(),
  charge: 'perro',
  amount: 44
}, {
  id: nanoId(),
  charge: 'gato',
  amount: 34
}];
export default function App() {
  const [expenses, setExpenses] = useState(initialExpenses);
  const [amount, setAmount] = useState('');
  const [charge, setCharge] = useState('');
  const [edit, setEdit] = useState(false);
  const [alert, setAlert] = useState({show: false});

  const idRef = useRef(0);

  useEffect(() => {
    localStorage.setItem('expenses-react-app', JSON.stringify(expenses));
  }, [expenses])

  function handleCharge(e){
    setCharge(e.target.value);
  }

  function handleAmount(e){
    let amount = e.target.value;
    //0 == false
    (amount) ? setAmount(parseInt(amount)) : setAmount(amount);
    setAmount(e.target.value);
  }

  function handleAlert({type, text}){
    setAlert({show: true, type, text});
    setTimeout(() => {
      setAlert({show: false});
    }, 3000);
  }

  function handleSubmit(e){
    e.preventDefault(); //Prevent the default behavior of the form. Siempre en un handleSubmit.
    if(charge !== '' && amount > 0){
      if(edit){
        let tempExpenses = expenses.map(expense => {
          return expense.id === idRef.current ? {...expense, charge, amount} : expense;
        });
        setExpenses(tempExpenses);
        setEdit(false);
        handleAlert({type: 'success', text: 'item edited'});
      } 
      else {
        const newExpense = {id: nanoId(), charge, amount};
        setExpenses([...expenses, newExpense]);
        handleAlert({type: 'success', text: 'item added'});
      }
      setCharge('');
      setAmount('');
    } else {
      handleAlert({type: 'danger', text: 'charge can\'t be empty value and amount value has to be bigger than zero'});
    }
  }

  function handleDelete(id){
    let tempExpenses = expenses.filter(expense => expense.id !== id);
    setExpenses(tempExpenses);
    handleAlert({type: 'danger', text: 'Expense deleted'});
  }

  function handleClearItems(){
    setExpenses([]);
    //handleAlert({type: 'danger', text: 'all items deleted'});
  }

  function handleEdit(id){
    let expense = expenses.find(expense => expense.id === id);
    let {charge, amount} = expense;
    setCharge(charge);
    setAmount(amount);
    setEdit(true);
    idRef.current = id;
  }
  return (
    <>
      {alert.show && <Alert type={alert.type} text={alert.text}/>}
      <h1>Budget calculator</h1>
      <main className="App">
        <ExpenseForm
          charge={charge}
          amount={amount}
          handleCharge={handleCharge}
          handleAmount={handleAmount}
          handleSubmit={handleSubmit}
          edit={edit}
        />
        <ExpenseList
          expenses={expenses}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
          handleClearItems={handleClearItems}
        />
      </main>
      <h1>Total spending:
        <span className="total">
          {expenses.reduce((acc, curr) => (acc += curr.amount), 0)}€
        </span>
      </h1>
    </>
  );
}