import React from 'react';
import classNames from 'classnames';
import styles from "./styles/index.module.scss"

const Card = ({children}) => {
    const componentClassName = classNames(
        styles.cardWrapper
    );

    return (
         <div className={componentClassName}>
             {children}
         </div>
    )
};

export { Card };