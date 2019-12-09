import React, {Component} from "react";
import PropsType from "prop-types";
import Icon from "../icon";
import "./inputNum.scss";
class InputNum extends Component {
  constructor(props){
    super(props);
    this.state = {
      value: "",
    }
  }
  get value(){
    return this.props.value ? this.props.value : this.state.value;
  }
  onReduce(){
    let inputVal = this.value;
    this.ChangeVal(--inputVal)
  }
  ChangeVal(val) {
    const {value, onChange} = this.props;
    if(!value) {
      this.setState({
        value: val
      })
    }
    if (onChange) {onChange(val)}
  }
  onAdd(){
    let inputVal = this.value;
    this.ChangeVal(++inputVal)
  }

  componentDidMount(){
    let inputVal = this.props.defaultVal;
    this.setState({
      value: inputVal
    })
  }
  render(){
    const {onChange,value} = this.props;
    return (
      <div className="inputNum">
        <div className="inputNum-left inputNum-icon" onClick={this.onReduce.bind(this)}>
          <Icon name="reduce"/>
        </div>
        <div className="inputNum-center"><input type="number" value = {this.value} onChange={(e)=>{
         this.ChangeVal(e.target.value)
        }}/></div>
        <div className="input-right inputNum-icon" onClick={this.onAdd.bind(this)}><Icon name = "addgrey"/></div>
      </div>
    )
  }
}
export default InputNum;