import React from 'react';

const Dashboard = ({ children }) => {
    console.log(children);
    return (
        children.map(i => { return i })
    )
};

export { Dashboard };