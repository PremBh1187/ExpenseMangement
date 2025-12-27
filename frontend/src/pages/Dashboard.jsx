import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../services/api';
import ExpenseForm from '../components/ExpenseForm';
import ExpenseList from '../components/ExpenseList';
import ExpenseChart from '../components/ExpenseChart';
import Navbar from '../components/Navbar';

function Dashboard() {
  const navigate = useNavigate();
  const [expenses, setExpenses] = useState([]);

  // ✅ Check token FIRST
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
    }
  }, [navigate]);

  // ✅ Fetch expenses AFTER token exists
  useEffect(() => {
    const fetchExpenses = async () => {
      try {
        const res = await API.get('/expenses');
        setExpenses(res.data);
      } catch (err) {
        console.error(err);
        navigate('/login');
      }
    };
    fetchExpenses();
  }, [navigate]);

  const addExpense = (expense) => {
    setExpenses([expense, ...expenses]);
  };

  const deleteExpense = (id) => {
    setExpenses(expenses.filter((e) => e._id !== id));
  };

  return (
    <>
      <Navbar />
      <h2>Expense Dashboard</h2>
      <ExpenseChart expenses={expenses} />
      <ExpenseForm onAdd={addExpense} />
      <ExpenseList expenses={expenses} onDelete={deleteExpense} />
    </>
  );
}

export default Dashboard;
