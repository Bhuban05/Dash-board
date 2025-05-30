import "./Crm.css";
import {
  Chart as ChartJS,
  LineElement,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  Title,
  PointElement,
  DoughnutController,
  ArcElement
} from 'chart.js';

import {Bar, Line, Doughnut} from 'react-chartjs-2';
import { faker } from '@faker-js/faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  DoughnutController,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
    },
  },
};

const labels = ['January', 'February', 'March'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() => faker.number.int({ min: 0, max: 150 })),

      backgroundColor: 'rgba(175, 32, 63, 0.5)',

      backgroundColor: 'rgba(255, 99, 132, 1)',

      fill:'false',
      tension:0.4,
      borderColor:'rgb(211, 83, 19)'
    },
    {
      label: 'Dataset 2',
      data: labels.map(() => faker.number.int({ min: 0, max: 200 })),
      backgroundColor: 'rgba(18, 143, 226, 0.5)',
      fill:'true',
      tension:0.4,
      borderWidth: 2,
      borderColor: 'rgba(14, 71, 109, 0.5)',
    },
  ],
};

export const Crm = () => {
  return (
    <>

      <div id="container " >
        <div id="inner-container"  >
          <div id="yoo1">
          <Bar options={options} data={data} />
          </div>
          <div id="yoo2">
          <Line options={options} data={data} />
          </div>
          </div>
      </div>
    </>
  );
};

export default Crm;
