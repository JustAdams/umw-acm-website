import React, {useState} from 'react';
import NavigationBar from '../../components/Navigation/NavigationBar/NavigationBar';
import './Layout.css';
import SideBar from '../../components/SideBar/SideBar';
import SideDrawer from '../../components/SideDrawer/SideDrawer';

// Rebuilt using React hooks for state management

const Layout = (props) => {
    const [sideDrawer, setSideDrawer] = useState(false);

    return (
        <div className='Layout'>
            <NavigationBar 
                toggleDrawerClicked={() => setSideDrawer(!sideDrawer)}/>
            <SideBar />
            <SideDrawer 
                open={sideDrawer} 
                closed={() => setSideDrawer(!sideDrawer)}/>
            <main>
                {props.children}
            </main>
        </div>
    );
};

export default Layout;