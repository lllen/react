import React from 'react';
import PropTypes from 'prop-types';

const GridLayoutRow = ({ children, grid, gapColumn, baseGrid }) => {
	const isGapDimension = (dimension) => {
		return dimension.split('_').length > 1;
	};

	const getGap = (gridProps) => { // toDo: refactoring
		return gridProps.split('_')[1] + 'fr';
	};

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
		gridStyle.gridTemplateColumns = gridSchema.join(' ');
		return { ...gridStyle };
	};

	const getGridItem = () => {
		let gridItems = [];
		const temp = grid.split('-').reduce((propsObj, gridProps) => {
			if(isGapDimension(gridProps)) {
				propsObj.push({
					gap: getGap(gridProps)
				});
			} else {
				propsObj.push({
					col: `${gridProps}fr`
				});
			}
			return propsObj;
		}, []);

		console.log(temp);
		// const gridProps = grid.split('-');
		// const gapCount = getGap(gridProps);
		// console.log(gapCount);

		return gridItems;
	};

	getGridItem();

    const isNumber = (value) => { // toDo: improve check, move to utils
        return (value % 1) === 0;
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
