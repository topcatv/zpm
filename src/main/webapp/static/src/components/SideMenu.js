import React, { Component, PropTypes } from 'react'
import { Menu, Icon } from 'antd'
import { connect } from 'react-redux';
import utils from '../common/utils';

const SubMenu = Menu.SubMenu;

class SideMenu extends Component {
  render() {
    return (
    	<aside className="ant-layout-sider">
        <Menu mode="inline" defaultOpenKeys={['sys']}
        onClick={ (params)=> this.open_page(params)} >
          <SubMenu key="sys" title={<span><Icon type="user" />系统管理</span>}>
            <Menu.Item key="inbox">test</Menu.Item>
            <Menu.Item key="users">用户管理</Menu.Item>
          </SubMenu>
        </Menu>
      </aside>
    );
  }
  
  open_page(params) {
    let {item, key} = params;
    utils.goto_page(key);
  }

}

export default connect()(SideMenu);
