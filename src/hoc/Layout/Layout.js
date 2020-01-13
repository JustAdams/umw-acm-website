import React, {Component} from 'react';
import NavigationBar from '../../components/Navigation/NavigationBar/NavigationBar';
import './Layout.css';
import SideBar from '../../components/SideBar/SideBar';
import Footer from '../../components/Footer/Footer'; // TODO - implement to stick to bottom of window

class Layout extends Component {
    state = {
        showSidebar: false
    }

    render() {
        return (
            <div className='Layout'>
                <NavigationBar />
                <SideBar />
                {this.props.children}
            </div>
        );
    };
};

export default Layout;