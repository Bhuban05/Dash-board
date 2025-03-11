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
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
      fill:'false',
      tension:0.4,
      borderColor:'rgba(255,172,130,1)'
    },
    {
      label: 'Dataset 2',
      data: labels.map(() => faker.number.int({ min: 0, max: 200 })),
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
      fill:'true',
      tension:0.4,
      borderWidth: 2,
      borderColor: 'rgba(53, 162, 235, 0.5)',
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
          <div id="inner-container2">
          <div id="yoo3">
          <Doughnut options={options} data={data} />
          </div>
          <div id="yoo4">
          <Bar options={options} data={data} />
          </div>
          </div>
      </div>
    </>
  );
};

export default Crm;
