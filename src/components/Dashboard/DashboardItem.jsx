import React from 'react';
import Card from "../Card/index"

const DashboardItem = ({ title, component }) => {
    return (
        <Card>
            {title}
            {component}
        </Card>

    )
};

export { DashboardItem };