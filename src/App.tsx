import React from 'react';
import './App.css';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, LineSeries, 
  Inject, DateTime, Logarithmic} from '@syncfusion/ej2-react-charts';
import {sampleData} from './data';
function App() {
  return (
    <div style={{textAlign:"center"}}>
      <ChartComponent title="Product X Growth" width="650"
      primaryXAxis={{valueType:"DateTime", labelFormat:"y"}}
      primaryYAxis={{valueType:"Logarithmic", title:"Profit",
      minimum:100, maximum:1000000, interval:2,
      labelFormat:"${value}", logBase:2}}>
        <Inject services={[LineSeries, DateTime, Logarithmic]}></Inject>
        <SeriesCollectionDirective>
          <SeriesDirective type="Line" name="Product X" dataSource={sampleData}
          xName="date" yName="value" marker={{visible:true}}></SeriesDirective>
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  );
}

export default App;
