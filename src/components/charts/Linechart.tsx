import { faker } from '@faker-js/faker';
import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from 'chart.js';

import { Line } from 'react-chartjs-2';

import { ThemeContext } from '../../context/ThemeContext';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const labels = [
  'Jan',
  'Fev',
  'Mar',
  'Abr',
  'Mai',
  'Jun',
  'Jul',
  'Ago',
  'Set',
  'Out',
  'Nov',
  'Dez',
];

export function Linechart() {
  return (
    <ThemeContext.Consumer>
      {({ enabled }) => (
        <Line
          options={{
            responsive: true,
            plugins: {
              legend: {
                position: 'top' as const,
                labels: {
                  color: `${enabled ? '#f3f4f6' : '#374151'}`,
                },
              },
              title: {
                display: true,
                text: 'Receita por Período',
                font: { size: 24 },
                color: `${enabled ? '#f3f4f6' : '#374151'}`,
              },
            },
          }}
          data={{
            labels,
            datasets: [
              {
                label: 'Receita',
                data: labels.map(() =>
                  faker.datatype.number({ min: 100, max: 1000 })
                ),
                borderColor: '#701a75',
                backgroundColor: '#f0abfc',
              },
            ],
          }}
        />
      )}
    </ThemeContext.Consumer>
  );
}
