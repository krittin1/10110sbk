import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

class Header extends Component {

    constructor(props){
        super(props);
        this.state ={
            activeItem: 'home'
        }
    }

    handleItemClick = (e, { name }) => this.setState({ 
        activeItem: name 
    })

    render(){
        const { activeItem } = this.state.activeItem;
        return(

            <div>
                <Menu inverted>
                    <Link to="/10110sbk">
                    <Menu.Item
                    name='home'
                    active={activeItem === 'home'}
                    onClick={this.handleItemClick}
                    />
                    </Link>
                    
                    <Link to="/create">
                    <Menu.Item
                    name='create'
                    active={activeItem === 'create'}
                    onClick={this.handleItemClick}
                    />
                    </Link>
      </Menu>
            </div>
        )
    }
}

export default Header;