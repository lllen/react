import React from 'react'
import PieChart from "../../plots/pieChart";
import LineChart from "../../plots/lineChart";

import { lineDataPoints, pieDataPoints } from "./data";

const Charts = () => {
    return (
        <>
            <PieChart title="Custom title" dataPoints={pieDataPoints} />
            <LineChart title="Custom title 2" dataPoints={lineDataPoints} />
        </>
    )
};

export { Charts };