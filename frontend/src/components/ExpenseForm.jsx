import { useState } from 'react';
import API from '../services/api';
import { CATEGORIES } from '../utils/categories';

function ExpenseForm({ onAdd}){
    const [expense, setExpense] = useState({
        title: '',
        amount: '',
        category: 'Food'
    });

    const handleChange = (e) => {
        setExpense({ ...expense, [e.target.name]: e.target.value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await API.post('/expenses', expense);
        onAdd(res.data);
        setExpense({ title: '', amount: '', category: 'Food'});
    };

    return(
        <form onSubmit={handleSubmit}>
            <input name="title" placeholder='Title' value={expense.title} onChange={handleChange} />
            <input name="amout" type='number' placeholder='Amount' value={expense.amount} onChange={handleChange} />
            <select name="category" value={expense.category} onChange={handleChange}>
                {CATEGORIES.map((cat) => (
                    <option key={cat} value={cat}>{cat}</option>
                ))}
            </select>
            <button type='submit'>Add Expense</button>
        </form>
    );
}

export default ExpenseForm;