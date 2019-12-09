import React , {Component} from 'react';
import "./input.scss";
class InputNum extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputVal: "",
      errorVal: false,
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
      inputVal: this.props.defaultVal
    })
  }
  render(){
    let {onChange} = this.props;
    let rex = /^\d*$/;
    return (
      <div className = "input">
        <div className = "input_main">
          <input value= {this.value} onChange={(e)=>{
            var targetVal = (e.target.value).trim() || " ";
            this.setState({
              errorVal: !rex.test(targetVal)
            })
            if(!this.Control) {
              this.setState({
                inputVal: targetVal
              })
            }
            if(onChange){onChange(e)}
          }}/>
        </div>
        {this.state.errorVal && <div className="input_error">仅能输入数字</div>}
      </div>
    )
  }
}
export default InputNum;