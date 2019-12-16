import React, {Component} from 'react';
import ReactDOM from "react-dom";
import "./confirm.scss";
class ConfirmDom extends Component {
  constructor(props){
    super(props)
    this.state = {
      show: true
    }
  }
  close(){
    this.setState({
      show: false
    })
  }
  render(){
    let {text, onDefine, onCancle} = this.props;
    return (
      this.state.show && <div className = "confirm">
        <div className = "confirm_header"></div>
        <div className = "confirm_main">
          {text}
        </div>
        <div className = "confirm_foot">
          <div className = "confirm_btns">
            <div className = "confirm_btn define" onClick={(e)=>{
              if(onDefine){onDefine()}
              this.close()
            }}>确定</div>
            <div className="confirm_btn cancle" onClick={(e)=>{
              if(onCancle){onCancle()}
              this.close()
            }}>取消</div>
          </div>
        </div>
      </div>
    )
  }
}
function Confirm(label){
  var div ;
  return new Promise((resolve,reject)=>{
    div = document.createElement("div");
    document.body.appendChild(div);
    ReactDOM.render(<ConfirmDom text={label} onDefine={(e)=>{
      resolve()
    }} onCancle = {(e)=>{
      if(reject){reject()}
    }}/>, div)
  }).then(()=>{
    ReactDOM.unmountComponentAtNode(div);
    return "confirm"
  })
}
export default Confirm;
