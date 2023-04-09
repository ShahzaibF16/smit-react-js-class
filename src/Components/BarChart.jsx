import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);


function BarChart(){
    const data ={
        label:["Jan","Feb","March"],
        datesets:[
            {
                label:"income",
                data:[80,30,15],
                backgroundColor:["yellow","pink","lime"],
                borderColor:["black","blue","grey"]
            }
        ]
    }
    const option = {
        indexAxis:"x",
    }

    return(
           <>
           <div>
            <BarChart data={data} option={option}/>
           </div>
           </>
    )
}

export default BarChart;