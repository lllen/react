import React from 'react';
import classNames from 'classnames';
import styles from './styles/index.module.scss'
import PropTypes from 'prop-types';

const DashboardRow = ({ children, grid }) => {
    const getGridTemplate = () => {
        return grid.split('-').map(column => column + 'fr ').join(' ');
    };

    const componentClassName = classNames(
        styles.dashboardRow
    );

    const gridColumns = {
        gridTemplateColumns: getGridTemplate()
    };

    return (
        <div className={componentClassName} style={gridColumns}>
            {
                children.map((child, index) =>
                    <div key={index}>{child}</div>
                )
            }
        </div>
    );
};

DashboardRow.propTypes = {
  grid: PropTypes.string
};

export { DashboardRow };