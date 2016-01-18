import React, { Component } from 'react'
import Head from '../components/Head';
import Footer from '../components/Footer';
import { Breadcrumb } from 'antd';
import SideMenu from "../components/SideMenu"

export default class App extends Component {
  render() {
    return (
      <div>
		    <div className="ant-layout-topaside">
		      <Head />
		      <div className="ant-layout-wrapper">
		        <div>
				    	<div className="ant-layout-breadcrumb">
				        <Breadcrumb>
				          <Breadcrumb.Item>首页</Breadcrumb.Item>
				        </Breadcrumb>
				      </div>
				    	<div className="ant-layout-container">
				        <SideMenu />
				        <div className="ant-layout-content">
				          {this.props.children}
				        </div>
				      </div>
			      </div>
		        <Footer />
		      </div>
		    </div>
		  </div>
    );
  }
}
