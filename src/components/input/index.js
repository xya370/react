import React , {Component} from 'react';
import "./input.scss";
import Icon from "../icon";
class InputNum extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputVal: " ",
    }
  }
  get Control(){
    return (!!this.props.value)
  }
  get value(){
    return this.Control ? this.props.value : this.state.inputVal;
  }
  componentDidMount(){
    this.setState({
      inputVal: this.props.defaultVal || " "
    })
  }
  render(){
    let {onChange, suffixEvent, suffixIcon} = this.props;
    return (
      <div className = "input">
        <div className = "input_main">
          <input value= {this.value} onChange={(e)=>{
            var targetVal = (e.target.value).trim();
            if(!this.Control) {
              this.setState({
                inputVal: targetVal || " "
              })
            }
            if(onChange){onChange(e)}
          }}/>
        </div>
        {suffixIcon &&
          <div className="input_fix input_icon" onClick = {(e)=>{
            if (suffixEvent) {
              suffixEvent(this.value);
            }
          }}>
            <Icon name = {suffixIcon}/>
          </div>}
      </div>
    )
  }
}
export default InputNum;