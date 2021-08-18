import React from "react";

import "../UI/Chartbar.css";

const ChartBar = (props) => {
    //specify chartbar instance should be filled
    let barFill = '0%';
    if (props.maxValue > 0) {
      barFill = Math.round((props.value / props.maxValue) * 100) + "%";
    }
 return (
   <div className="chart-bar">
     <div className="chart-bar__inner">
       {/* dynamically styling from bar fill*/}
       <div className="chart-bar__fill" style={{height: barFill}}></div>
     </div>
     <div className="chart-bar__label">{props.label}</div>
   </div>
 );
};

export default ChartBar;
