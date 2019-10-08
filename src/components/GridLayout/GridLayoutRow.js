import React from 'react';
import PropTypes from 'prop-types';

const GridLayoutRow = ({ children, grid, gapColumn, baseGrid }) => {
	const getGrid = () => {
		const gridSchema = [];
		const gridStyle = {
			display: 'grid',
			gridColumnGap: `${gapColumn}em`
		};

		// eslint-disable-next-line
		for (let i = 0; baseGrid > i; ++i) {
			gridSchema.push('1fr');
		}

		const gridProps = grid.split('-');
		const gapCount = getGap(gridProps);
		console.log(gapCount);
		gridStyle.gridTemplateColumns = gridSchema.join(' ');


		return { ...gridStyle };
	};

    const isNumber = (value) => { // toDo: improve check, move to utils
        return (value % 1) === 0;
    };

    const getGap = (gridProps) => { // toDo: refactoring
        return gridProps.find(g => {
            if (!isNumber(g)) {
                return `${g.split('_')[1]}fr`;
            }
        }).split('_')[1] + 'fr';
	};

	return (
		<div style={getGrid()}>
			{
				children.map((child, index) => {
					//return <div style={{gridColumnStart: `${gridProps[index]}`}}>{child}</div>
				})
			}
		</div>
	);
};

GridLayoutRow.defaultProps = {
	baseGrid: 12,
	gapColumn: 1
};

GridLayoutRow.propTypes = {
	baseGrid: PropTypes.number,
	gapColumn: PropTypes.number,
	grid: PropTypes.string
};

export { GridLayoutRow };
