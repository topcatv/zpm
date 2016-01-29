import React from 'react';
import { Validation, Form, Input, Spin, Button, Checkbox, Radio, Row, Col, message, Modal } from 'antd';
const Validator = Validation.Validator;
const FormItem = Form.Item;
const RadioGroup = Radio.Group;

function cx(classNames) {
  if (typeof classNames === 'object') {
    return Object.keys(classNames).filter(function(className) {
      return classNames[className];
    }).join(' ');
  } else {
    return Array.prototype.join.call(arguments, ' ');
  }
}

const form_state = {
  status: {
    loginName: {},
    name: {},
    email: {}
  },
  formData: {
    loginName: undefined,
    name: undefined,
    email: undefined
  },
  loading: false,
  isEmailOver: false,
  show: false,
  emailValidateMethod: 'onBlur' // 用于改变 email 的验证方法
};

const UserForm = React.createClass({
  mixins: [Form.ValueMixin, Validation.FieldMixin],

  getInitialState() {
    return form_state;
  },

  handleSubmit() {
    this.setState({loading: true});
    const validation = this.refs.validation;
    validation.validate((valid) => {
      if (!valid) {
        this.setState({loading: false});
        return;
      } else {
        this.props.onSubmit(this.state.formData);    
        message.success('收到表单值~~~ ：' + JSON.stringify(this.state.formData, function(k, v) {
          if (typeof v === 'undefined') {
            return '';
          }
          return v;
        }));
        this.refs.validation.reset();
        this.setState(this.getInitialState());
        setTimeout(() => {this.setState({loading:false})}, 2000);
      }
    });
  },

  handleCancel() {
    this.refs.validation.reset();
    this.setState(this.getInitialState());
    this.setState({show: false});
  },

  componentWillReceiveProps(props) {
    this.setState({show: props.show});
  },

  componentWillMount() {
    this.setState({show: this.props.show});
  },

  handleEmailInputBlur() {
    this.setState({
      isEmailOver: true
    });
  },

  handleEmailInputFocus() {
    if (this.state.isEmailOver) {
      this.setState({
        emailValidateMethod: 'onChange'
      });
    }
  },

  renderValidateStyle(item) {
    const formData = this.state.formData;
    const status = this.state.status;

    const classes = cx({
      'error': status[item].errors,
      'validating': status[item].isValidating,
      'success': formData[item] && !status[item].errors && !status[item].isValidating
    });

    return classes;
  },

  render() {
    const formData = Object.assign(this.state.formData, this.props.user);
    const status = this.state.status;

    return (
      <Modal ref="modal"
       visible={this.state.show}
       title="编辑用户信息" onOk={this.handleSubmit} onCancel={this.handleCancel} >
       <Spin spining={this.state.loading}>
       <Form horizontal>
       <Validation ref="validation" onValidate={this.handleValidate}>
        <FormItem
          label="用户名："
          labelCol={{span: 6}}
          wrapperCol={{span: 14}}
          validateStatus={this.renderValidateStyle('loginName')}
          hasFeedback
          help={status.loginName.isValidating ? '正在校验中..' : (status.loginName.errors && status.loginName.errors.join(','))}
          required>
          <Validator rules={[{required: true, min: 5, message: '用户名至少为 5 个字符'}]}>
          <Input type="text" id="loginName" name="loginName" placeholder="请输入用户名" value={formData.loginName} onChange={this.setValue.bind(this, 'loginName')} />
          </Validator>
        </FormItem>
        <FormItem
          label="姓名："
          labelCol={{span: 6}}
          wrapperCol={{span: 14}}
          validateStatus={this.renderValidateStyle('name')}
          hasFeedback
          help={status.name.isValidating ? '正在校验中..' : (status.name.errors && status.name.errors.join(','))}
          >
          <Input type="text" id="name" name="name" placeholder="请输入姓名" value={formData.name} onChange={this.setValue.bind(this, 'name')} />
        </FormItem>
        <FormItem
          label="邮箱："
          labelCol={{span: 6}}
          wrapperCol={{span: 14}}
          validateStatus={this.renderValidateStyle('email')}
          hasFeedback
          help={status.email.isValidating ? '正在校验中..' : (status.email.errors && status.email.errors.join(','))}
          >
          <Validator rules={[{required: true, type:'email', message: '请输入正确的邮箱地址'}]} trigger={this.state.emailValidateMethod}>
            <Input type="email" name="email" id="email" value={formData.email} placeholder="请输入邮箱地址" onBlur={this.handleEmailInputBlur} onFocus={this.handleEmailInputFocus} onChange={this.setValue.bind(this, 'email')}/>
          </Validator>
        </FormItem>
        </Validation>
        </Form>
      </Spin>
      </Modal>
    );
  }
});

export default UserForm;
