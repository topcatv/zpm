import React, { Component, PropTypes } from 'react'
import { Menu, Icon } from 'antd'
import utils from '../common/utils';

const SubMenu = Menu.SubMenu;

export default class SideMenu extends Component {
  render() {
    return (
    	<aside className="ant-layout-sider">
        <Menu mode="inline" defaultOpenKeys={['sys']}
        onClick={ (params)=> this.open_page(params)} >
          <SubMenu key="sys" title={<span><Icon type="user" />系统管理</span>}>
            <Menu.Item key="inbox">Test</Menu.Item>
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
