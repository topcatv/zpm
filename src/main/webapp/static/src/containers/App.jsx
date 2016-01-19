import React, { Component } from 'react'
import Head from '../components/Head';
import Footer from '../components/Footer';
import { Breadcrumb, QueueAnim } from 'antd';
import SideMenu from "../components/SideMenu"

export default class App extends Component {
  render() {
    return (
      <div>
		    <div className="ant-layout-topaside">
		    	<QueueAnim type={['top', 'bottom']} delay={300}>
			      {[
			      <Head key="a" />,
			      <div className="ant-layout-wrapper" key="b">
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
			      ]}
		      </QueueAnim>
		    </div>
		  </div>
    );
  }
}
