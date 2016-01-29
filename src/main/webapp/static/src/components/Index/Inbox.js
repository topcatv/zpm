import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux';
import { changeText, destoryText } from '../../reducers/text'

class Inbox extends Component {
  render() {
    return (
    	<div style={{ height: 240 }}>
        <div style={{clear: 'both'}}>
        	<input 
        		type="text" 
        		ref="input"
        		onChange={(e) => this.handleChange(e)}
        	/>
        	{this.props.text}
        	</div>
      </div>
    );
  }

  handleChange(e) {
    const node = this.refs.input
    const text = node.value.trim()
    this.props.onChange(text);
  }

  componentDidMount() {
		this.props.onDestory();
  }
}

// 哪些 Redux 全局的 state 是我们组件想要通过 props 获取的？
function mapStateToProps(state) {
  return {
    text: state.text
  };
}

// 哪些 action 创建函数是我们想要通过 props 获取的？
function mapDispatchToProps(dispatch) {
  return {
    onChange: (text) => dispatch(changeText(text)),
    onDestory: () => dispatch(destoryText())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Inbox);
