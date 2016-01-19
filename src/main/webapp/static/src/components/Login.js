import React from 'react';
import {Form, Input, Button, Checkbox, Row, Col, message, Spin} from 'antd';

import utils from '../common/utils';

const FormItem = Form.Item;

const Login = React.createClass({
  mixins: [Form.ValueMixin],

  getInitialState() {
    return {
      formData: {
        username: undefined,
        password: undefined,
        rememberMe: undefined,
      },
      loading: false
    };
  },

  handleSubmit(e) {
    e.preventDefault();
    this.login();
  },

  login() {
    this.setState({loading:true});
    utils.post('login', this.state.formData)
    .then(response => response.json())
    .then(json => {
      this.setState({loading:false});
      if(json['shiroLoginFailure']){
        message.error(json.message, 5);
      }else{
        utils.goto_page('index');
      }
    });
  },

  componentWillMount(){
    this.login();
  },

  render() {
    const formData = this.state.formData;
    return (
    	<div>
        <Spin spining={this.state.loading}>
        <div className="header">
            <div>
                <h1>Web ide</h1>
                <p>Integrated Development Environment<br/>代码编辑，代码生成，界面设计，调试，编译</p>
            </div>
            <hr/>
        </div>
        <br/>
        <br/>
    		<Row type="flex" justify="center">
    			<Col span="10"><h2>登录</h2><br/><hr/><br/><br/></Col>
    		</Row>
	    	<Row type="flex" justify="center">
		      <Col span="10">
		      	<Form horizontal onSubmit={this.handleSubmit}>
			        <FormItem
			          id="username"
			          label="账户：">
			          <Input placeholder="请输入账户名" id="username" name="username" onChange={this.setValue.bind(this, 'username')} value={formData.username} />
			        </FormItem>
			        <FormItem
			          id="password"
			          label="密码：">
			          <Input type="password" placeholder="请输入密码" id="password" name="password" onChange={this.setValue.bind(this, 'password')} value={formData.password} />
			        </FormItem>
			        <FormItem>
			          <label className="ant-checkbox-inline">
			            <Checkbox name="rememberMe" value={formData.rememberMe} onChange={this.setValue.bind(this, 'rememberMe')} /> 记住我
			          </label>
			        </FormItem>
			        <Button type="primary" htmlType="submit">登录</Button>
			      </Form>
		      </Col>
		    </Row>
		    <Row type="flex" justify="center">
		    	<Col span="10" offset="6" >ZPM 版权所有 © 2016</Col>
		    </Row>
        </Spin>
	    </div>
    );
  }
});

export default Login;
