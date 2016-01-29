import React, { Component } from 'react';
import { connect } from 'react-redux';
import { QueueAnim, Table, Button } from 'antd';
import { user_search, user_save } from '../../reducers/users';
import { utils } from '../../common/utils';
import UserForm from './UserForm';

const columns = [{
				  title: 'ID',
				  dataIndex: 'id',
				  key: 'id',
				}, {
				  title: '用户名',
				  dataIndex: 'name',
				  key: 'name',
				}, {
				  title: '登录名',
				  dataIndex: 'loginName',
				  key: 'loginName',
				}];

class UserManage extends Component {

	constructor(props) {
      super(props);
      let self = this;
      let pagination = {
        total: props.total,
        current: 1,
        size: 'small',
        showSizeChanger: true,
        onShowSizeChange: function(current, pageSize) {
          //console.log('Current: ', current, '; PageSize: ', pageSize);
          const params = {
            pageSize: pageSize,
            pageNum: current
          };
          console.log(this);
          self.loadData(params);
        },
        onChange: function(current) {
          //console.log('Current: ', current);
        }
      };
      this.state = {loading: false, dialog_show: props.dialog_show, form_loading: props.form_loading, pagination: pagination};
  }

  render() {
    return (
    	<div>
        <QueueAnim delay={500}>
        {[
        	<div key="0">
        		<h2>用户管理</h2>
        		<hr/>
        		<br/><br/>
        	</div>,
          <div key="1">
            <Button type="primary" onClick={this.newUser.bind(this)} >添加新用户</Button>
            <br/><br/>
          </div>,
        	<Table key="2" rowKey={ (record) => record.id } dataSource={this.props.dataSource} columns={columns} loading={this.state.loading} pagination={this.state.pagination} onChange={this.handleTableChange.bind(this)}/>
        ]}
        </QueueAnim>
        <UserForm user={this.props.user} show={this.state.dialog_show} loading={this.state.form_loading} onSubmit={this.props.saveUser}/>
      </div>
    );
  }

  handleTableChange(pagination, filters, sorter) {
    const pager = this.state.pagination;
    pager.current = pagination.current;
    this.setState({
      pagination: pager
    });
    const params = {
      pageSize: pagination.pageSize,
      pageNum: pagination.current,
      sortField: sorter.field,
      sortOrder: sorter.order
    };
    for (let key in filters) {
      params[key] = filters[key];
    }
    this.loadData(params);
  }

  newUser() {
    this.showDialog(true);
  }

  openDialog(user) {
    if(user){
      //this.props.fillUser(id);
    }
    this.showDialog(true);
  }

  loadData(params = {pageSize: 10, pageNum: 1}) {
    this.showLoading(true);
    this.props.search(params);
  }

  componentWillMount() {
    this.loadData();
  }

  componentWillReceiveProps(props) {
    let pager = this.state.pagination;
    let nState = { loading: false, dialog_show: props.dialog_show };
    if(props.total){
      pager.total = props.total;
      nState.pagination = pager;
    }
    
    this.setState(Object.assign(this.state, nState));
  }

  showLoading(loading) {
    this.setState({ loading: loading });
  }

  showDialog(show) {
    this.setState({ dialog_show: show });
  }
}

UserManage.propTypes = { 
  loading: React.PropTypes.bool, 
  dialog_show: React.PropTypes.bool,
  form_loading: React.PropTypes.bool
};
UserManage.defaultProps = { 
  loading: false,
  dialog_show: false,
  form_loading: false
};

// 哪些 Redux 全局的 state 是我们组件想要通过 props 获取的？
function mapStateToProps(state) {
  return {
    dataSource: state.users.qr,
    total: state.users.total,
    dialog_show: state.users.dialog_show,
    form_loading: state.users.form_loading,
    ts: state.users.ts
  };
}

// 哪些 action 创建函数是我们想要通过 props 获取的？
function mapDispatchToProps(dispatch) {
  return {
    search: (params) => dispatch(user_search(params)),
    saveUser: (user) => dispatch(user_save(user))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
