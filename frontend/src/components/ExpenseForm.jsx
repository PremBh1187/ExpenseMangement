import { useState } from "react";
import API from "../services/api";

function ExpenseForm({ onAdd }) {
  const [form, setForm] = useState({
    title: "",
    amount: "",
    category: "Food",
    date: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    const payload = {
      ...form,
      amount: Number(form.amount) // ✅ FIX
    };

    const res = await API.post("/expenses", payload);
    onAdd(res.data);

    setForm({ title: "", amount: "", category: "Food", date: "" });
  };

  return (
    <form onSubmit={submitHandler}>
      <input name="title" placeholder="Title" value={form.title} onChange={handleChange} />
      <input name="amount" type="number" placeholder="Amount" value={form.amount} onChange={handleChange} />
      <input name="date" type="date" value={form.date} onChange={handleChange} />

      <select name="category" value={form.category} onChange={handleChange}>
        <option>Food</option>
        <option>Shopping</option>
        <option>Travel</option>
        <option>Bills</option>
      </select>

      <button>Add Expense</button>
    </form>
  );
}

export default ExpenseForm;
