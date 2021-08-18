import React from "react";
import ChartBar from "./ChartBar";
import "../UI/Chart.css";
const Chart = (props) => {
  //convert datapoint an object into an number
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  //count max value of chart
  const totalMax = Math.max(...dataPointValues);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMax}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
