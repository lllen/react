import React from 'react';
import PieChart from "../../plots/pieChart";
import { pieDataPoints } from "../Charts/data";

const DashboardItems = ({ title, component }) => {
    return (
        <>
            {title}
            {component}
        </>

    )
};

export { DashboardItems };