import { Line } from "react-chartjs-2"
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


function MultiLineChart(){

    const data = {
        labels: ['Jan', 'Feb', 'March'],
        datasets: [
            {
                label:"No. Students",
                data:[100,60,20],
                backgroundColor:"green"
            }
        ],
    }
    const options = {
        contentAxis: "y"
    }
    return(
        <h1>
            Hello line chart
            <Line data={data} options={options}/>
        </h1>
    )
}

export default MultiLineChart;