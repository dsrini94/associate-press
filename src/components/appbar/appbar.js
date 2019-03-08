import React, { Component } from 'react';

import { Button, Dropdown, Menu, Image, Input } from 'semantic-ui-react';

import { Link } from "react-router-dom";

import './appbar.css'

import logo from './infinity.png'

export default class AppBar extends Component {

  constructor(props){
    super(props);

    this.state = {
      activeItem:''
    }

    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(e){
    if(e.key === 'Enter')
    {
      console.log('enter is pressed');
      this.props.handleEnter();
    }
  }

  render() {
    return (
      <div >
      <Menu secondary size="large" className="appbar">
       <Menu.Item></Menu.Item>
       <Menu.Item><Image src={logo} className="appbarLogo"/></Menu.Item>
       <Menu.Item name='Associate Press' active={this.state.activeItem === 'home'} onClick={this.handleItemClick} className="appbarBrandName"/>

       <Menu.Menu position='right'>
         <Menu.Item>
           <Input icon='search' placeholder='Search...' onKeyDown={this.handleSearch}/>
         </Menu.Item>



         <Menu.Item>
           <img src="https://cdn2.iconfinder.com/data/icons/flaturici-set-4/512/user-512.png" />
         </Menu.Item>
         <Dropdown item className="dropdown" icon>
            <Dropdown.Menu >
              <Dropdown.Item>My Account</Dropdown.Item>
              <Dropdown.Item as={Link} to='/'>Logout</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Menu.Item>
          </Menu.Item>

          <Menu.Item>
          </Menu.Item>

          <Menu.Item>
          </Menu.Item>
       </Menu.Menu>
     </Menu>
      </div>
    );
  }
}
