import React, {Component} from 'react';
import NavigationBar from '../../components/Navigation/NavigationBar/NavigationBar';
import SideBar from '../../components/SideBar/SideBar';

class Layout extends Component {
    state = {
        showSidebar: false
    }

    render() {
        return (
            <div>
                <NavigationBar />
                <SideBar />
                {this.props.children}
            </div>
        );
    };
};

export default Layout;