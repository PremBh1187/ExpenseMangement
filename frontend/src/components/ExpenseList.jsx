import API from '../services/api';

function ExpenseList({ expenses, onDelete }) {
    const handleDelete = async (id) => {
        await API.delete(`/expenses/${id}`);
        onDelete(id);
    };

    return(
        <ul>
            {expenses.map((exp) => (
                <li key={exp._id}>
                    {exp.title} - ${exp.amount} ({exp.category})
                    <button onClick={() => handleDelete(exp._id)}>Delete</button>
                </li>
            ))}
        </ul>
    );
}

export default ExpenseList;