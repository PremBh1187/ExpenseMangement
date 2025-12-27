import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

function ExpenseChart({ expenses }) {
  const categories = {};

  expenses.forEach((exp) => {
    categories[exp.category] =
      (categories[exp.category] || 0) + exp.amount;
  });

  const data = {
    labels: Object.keys(categories),
    datasets: [
      {
        data: Object.values(categories),
      },
    ],
  };

  return (
    <>
      <h3>Category-wise Expenses</h3>
      <Pie data={data} />
    </>
  );
}

export default ExpenseChart;