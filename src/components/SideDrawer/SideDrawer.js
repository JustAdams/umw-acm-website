import React from 'react';
import './SideDrawer.css';
import NavigationItems from '../Navigation/NavigationItems/NavigationItems';

const SideDrawer = (props) => {
    let setClass = 'Closed';
    if (props.open) {
        setClass = 'Opened';
    }
    
    return (
        <div 
            className={setClass}
            onClick={props.closed}>
                <NavigationItems />
        </div>
    );
};

export default SideDrawer;