import React from "react";
import {
  Sparklines,
  SparklinesLine,
  SparklinesReferenceLine
} from "react-sparklines";
import _ from "lodash";

export default ({ data, width, height, color, units }) => {
  return (
    <div>
      <Sparklines data={data} width={width} height={height} margin={5}>
        <SparklinesLine color={color} />
        <SparklinesReferenceLine type="mean" />
        <SparklinesReferenceLine type="max" />
      </Sparklines>
      <div className="chart-footer" >
        <span>
          Avg: {Math.round(_.sum(data) / data.length)}{units}
        </span>
        <span>
          Max: {Math.round( Math.max(...data)) }{units}
        </span>
          <span>
          Min: {Math.round( Math.min(...data)) }{units}
        </span>
      </div>
    </div>
  );
};
