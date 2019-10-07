import React from 'react';
import classNames from 'classnames';
import styles from './styles/index.module.scss'
import PropTypes from 'prop-types';

const DashboardRow = ({ children, itemsCount, grid }) => {
    const getGridTemplate = () => {
        return grid.split('-');
    };

    const componentClassName = classNames(
        styles.dashboardRow
    );
    return (
        <div className={componentClassName} style={{grid-template-rows: `${getGridTemplate()[0]}fr ${getGridTemplate()[1]}fr`}}>
            {children.map((child, index) =>
                <div key={index}>{child}</div>
            )}
        </div>
    );
};

DashboardRow.propTypes = {
  itemsCount: PropTypes.number,
  grid: PropTypes.string
};

export { DashboardRow };