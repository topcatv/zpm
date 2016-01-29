import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Breadcrumb, QueueAnim } from 'antd';

import Head from '../components/Head';
import Footer from '../components/Footer';
import SideMenu from "../components/SideMenu";

import { fetchPermissions } from '../reducers/permissions';

class App extends Component {
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
			      </div>,
			      <Footer key="c"/>
			      ]}
		      </QueueAnim>
		    </div>
		  </div>
    );
  }

  componentWillMount() {
  	this.props.fetchPermissions();
  }
}

// 哪些 Redux 全局的 state 是我们组件想要通过 props 获取的？
function mapStateToProps(state) {
  return {
    permissions: state.permissions
  };
}

// 哪些 action 创建函数是我们想要通过 props 获取的？
function mapDispatchToProps(dispatch) {
	return { fetchPermissions: bindActionCreators(fetchPermissions, dispatch) };
}

export default connect(
	mapStateToProps, 
	mapDispatchToProps
	)(App);
