import { Line } from 'react-chartjs-2'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';



  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  
function LineChart(){

    const data = {
        labels: ['Jan', 'Feb', 'March'],
        datasets: [
            {
                label: 'totalpeople',
                data: [12, 19, 30,],
                backgroundColor: 'yellow',
                borderColor: 'pink',
            },
        ],
    }
    const options = {
        contentAxis: "x"
    }
    return(
        <h1>
            Hello line chart
            <Line data={data} options={options} />
        </h1>
    )
}

export default LineChart