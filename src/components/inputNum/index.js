import React, {Component} from "react";
import Icon from "../icon";
import "./inputNum.scss";
import PropTypes from 'prop-types'
class InputNum extends Component {
  static propTypes = {
    onChange: PropTypes.func,
  }

  static defaultProps = {
    onChange: () => {}
  }
  constructor(props){
    super(props);
    this.state = {
      value: "",
      errorInfo: "",
    }
  }
  get value(){
    return this.props.value ? this.props.value : this.state.value;
  }
  onReduce(){
    let inputVal = this.value;
    this.ChangeVal(--inputVal)
  }
  ChangeVal(val,e) {
    const {value, onChange} = this.props;
    if(!value) {
      this.setState({
        value: val
      })
    }
    onChange(val,e)
  }
  onAdd(){
    let {max} = this.props
    let inputVal = this.value;
    var inde = ++inputVal;
    if(inde > max) {
      this.setState({
        errorInfo: "输入最大值为"+max
      })
      return
    }
    this.ChangeVal(inde)
  }

  componentDidMount(){
    let inputVal = this.props.defaultVal;
    this.numInput.focus();
    this.setState({
      value: inputVal
    })
  }
  render(){
    return (
      <div>
        <div className="inputNum">
          <div className="inputNum-left inputNum-icon" onClick={this.onReduce.bind(this)}>
            <Icon name="reduce"/>
          </div>
          <div className="inputNum-center">
            <input type="number" value = {this.value} ref={(input) => { this.numInput = input; }}
            onChange={(e)=>{
            this.ChangeVal(e.target.value, e)
          }} /></div>
          <div className="input-right inputNum-icon" onClick={this.onAdd.bind(this)}><Icon name = "addgrey"/></div>
        </div>
        {this.state.errorInfo && <span>{this.state.errorInfo}</span>}
      </div>
    )
  }
}
export default InputNum;