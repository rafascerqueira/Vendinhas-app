import { faker } from '@faker-js/faker';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { ThemeContext } from '../../context/ThemeContext';

ChartJS.register(ArcElement, Tooltip, Legend);

const labels = ['Avon', 'Natura', 'Demillus', 'Abelha Rainha', 'Outros'];

export function Donutchart() {
  return (
    <ThemeContext.Consumer>
      {({ enabled }) => (
        <Doughnut
          options={{
            responsive: true,
            plugins: {
              legend: {
                position: 'top' as const,
                labels: { color: `${enabled ? '#f3f4f6' : '#374151'}` },
              },
              title: {
                display: true,
                text: 'Vendas por Fabricante',
                font: { size: 24 },
                color: `${enabled ? '#f3f4f6' : '#374151'}`,
              },
            },
          }}
          data={{
            labels,
            datasets: [
              {
                data: labels.map(() =>
                  faker.datatype.number({ min: 1, max: 100 })
                ),
                backgroundColor: [
                  '#f87171',
                  '#4ade80',
                  '#818cf8',
                  '#c084fc',
                  '#f472b6',
                ],
              },
            ],
          }}
        />
      )}
    </ThemeContext.Consumer>
  );
}
