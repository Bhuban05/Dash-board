import './App.css';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import datas from "./data/datas.json";

ChartJS.register(BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

function App() {
  return (
    <>
      <Bar
        data={{
          labels: datas.map((data) => data.label),
          datasets: [
            {
              label: "Count of Participants",
              data: datas.map((data) => data.value),
              backgroundColor:"rgb(191, 154, 154)",
            },
          ],
        }}
      />
    </>
  );
}

export default App;