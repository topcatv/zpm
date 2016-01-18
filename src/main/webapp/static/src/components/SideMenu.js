import React, { Component, PropTypes } from 'react'
import { Menu, Icon } from 'antd'
import history from '../common/history';

const SubMenu = Menu.SubMenu;

export default class SideMenu extends Component {
  render() {
    return (
    	<aside className="ant-layout-sider">
        <Menu mode="inline" defaultOpenKeys={['sub1', 'sub2', 'sub3']}
        onSelect={ (params)=> this.goto(params)} >
          <SubMenu key="sub1" title={<span><Icon type="user" />系统管理</span>}>
            <Menu.Item key="inbox">选项1</Menu.Item>
            <Menu.Item key="2">选项2</Menu.Item>
            <Menu.Item key="3">选项3</Menu.Item>
            <Menu.Item key="4">选项4</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" title={<span><Icon type="laptop" />导航二</span>}>
            <Menu.Item key="5">选项5</Menu.Item>
            <Menu.Item key="6">选项6</Menu.Item>
            <Menu.Item key="7">选项7</Menu.Item>
            <Menu.Item key="8">选项8</Menu.Item>
          </SubMenu>
          <SubMenu key="sub3" title={<span><Icon type="notification" />导航三</span>}>
            <Menu.Item key="9">选项9</Menu.Item>
            <Menu.Item key="10">选项10</Menu.Item>
            <Menu.Item key="11">选项11</Menu.Item>
            <Menu.Item key="12">选项12</Menu.Item>
          </SubMenu>
        </Menu>
      </aside>
    );
  }

  goto(params) {
    let {item, key, selectedKeys} = params;
    console.log(params);
    history.pushState(null, key);
  }
}
