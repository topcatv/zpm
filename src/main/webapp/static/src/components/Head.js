import React, { Component, PropTypes } from 'react'
import { Menu, Icon } from 'antd'
import {Link} from 'react-router'

export default class Head extends Component {
  render() {
    return (
    	<div>
		    <div className="ant-layout-header">
	        <div className="ant-layout-wrapper">
	          <div className="ant-layout-logo"><Link to="admin/index"><Icon type="home"/>ZPM 后台管理系统</Link></div>
	        </div>
	      </div>
      </div>
    );
  }
}
