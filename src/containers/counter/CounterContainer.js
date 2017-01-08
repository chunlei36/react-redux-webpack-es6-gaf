import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { increment, decrement, resetNumber } from 'actions';

import Counter from 'components/counter/Counter';
import CounterInput from 'components/counter/CounterInput';

class CounterContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '1' };

    // 可以简化，参考ES2017 Property initializer syntax
    // http://babeljs.io/docs/plugins/transform-class-properties/

    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleFoucs = this.handleFoucs.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  handleIncrement() {
    this.props.increment(+this.state.value);
  }

  handleDecrement() {
    this.props.decrement(+this.state.value);
  }

  handleReset() {
    this.props.resetNumber();
    this.setState({value: '1'});
  }

  handleChange(e) {
    e.preventDefault();

    this.setState({
      value: e.target.value
    });
  }

  handleFoucs(e) {
    e.preventDefault();
    this.preValue = this.state.value;
    this.setState({
      value: ''
    });
  }

  handleBlur(e) {
    e.preventDefault();
    const isNumber = (val) => /^[0-9]+$/.test(val);

    if (!isNumber(e.target.value)) {
      this.setState({
        value: this.preValue
      });
    }
  }

  render() {
    const { counter } = this.props;
    return (
      <div>
        <h2>CounterContainer!!</h2>
        <CounterInput
          value={this.state.value}
          handleChange={this.handleChange}
          handleFoucs={this.handleFoucs}
          handleBlur={this.handleBlur}
        />
        <Counter
          counter={counter}
          handleIncrement={this.handleIncrement}
          handleDecrement={this.handleDecrement}
          handleReset={this.handleReset}
          />
      </div>
    );
  }
}

CounterContainer.propTypes = {
  counter: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  resetNumber: PropTypes.func.isRequired
};

function mapStateToProps({ counter }) {
  return {
    counter
  };
}

/* 参见下面简写，一般情况参数相同可简写
function mapDispatchToProps(dispatch) {
  return {
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement()),
  };
}
*/

export default connect(
  mapStateToProps,
  { increment, decrement, resetNumber }
)(CounterContainer);
