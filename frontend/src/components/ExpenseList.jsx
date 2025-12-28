import API from '../services/api';

function ExpenseList({ expenses, onDelete }) {
    const handleDelete = async (id) => {
        await API.delete(`/expenses/${id}`);
        onDelete(id);
    };

    function ExpenseList({ expenses, onDelete }) {
  return (
    <table border="1" width="100%">
      <thead>
        <tr>
          <th>Title</th>
          <th>Amount (₹)</th>
          <th>Category</th>
          <th>Date</th>
          <th>Action</th>
        </tr>
      </thead>

      <tbody>
        {expenses.map((e) => (
          <tr key={e._id}>
            <td>{e.title}</td>
            <td>{e.amount}</td>
            <td>{e.category}</td>
            <td>{new Date(e.date).toLocaleDateString()}</td>
            <td>
              <button onClick={() => onDelete(e._id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}


}

export default ExpenseList;